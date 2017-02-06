import {Component, ViewEncapsulation, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {CarehomesService} from '../../services/carehomes';
import {PopupService} from '../../services/popup';


declare let L: any;
@Component({
  selector: 'map',
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MapCmp implements AfterViewInit {
  constructor(public carehomesService: CarehomesService, public popupService: PopupService) {}
  carehomes : any;
  mymap: any;
  apikey = 'pk.eyJ1IjoianVhbmNhcmxvc2hnIiwiYSI6ImNpdnIzN2R4dzAwMTEyeW1ubTI2aXJ1bG0ifQ.nY1oVZ6HN3Vg4sSwbOy2Vw';
  //Emitter used to send the map to the parent component
  @Output() onMap = new EventEmitter<any>();

  //Map loads after the view
  ngAfterViewInit() {
    this.initMap();
    //Gets carehomes json (only coordinates, carehome id and overall grade) and adds the markers to the map
    this.getCarehomes();
  }

  initMap() : void {
    //Add map to the div
    this.mymap = L.map('mapid').setView([54, -2], 6);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token='+this.apikey, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/'+
    'licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    }).addTo(this.mymap);

    //Emit map so that the map-input component can use it
    this.onMap.emit(this.mymap);
  }

  addMarker(lat: number , lng : number, id : string, color : string, markers) : void {
    //Adds a marker in input coordinates, with input color and input id.
    var size = 'l';
    //Options in case we want to change the marker size
    //smallOptions: {iconSize: [20, 50], popupAnchor: [0,-20]}
    //mediumOptions: {iconSize: [30,70], popupAnchor: [0,-30]}
    //largeOptions: {iconSize: [36,90], popupAnchor: [0,-40]}
    var icon = L.icon({
                        iconUrl: 'https://api.mapbox.com/v4/marker/pin-'+size+'+'+color+'.png?access_token='+this.apikey,
                        iconRetinaUrl: 'https://api.mapbox.com/v4/marker/pin-'+size+'+'+color+'@2x.png?access_token='+this.apikey,
                        iconSize: [36,90],
                        popupAnchor: [0, -40]
                      });
    var marker = L.marker([lat, lng], {icon});
    marker.id = id;
    //On click, it will use a service to get the carehome info and set the popup
    marker.on('click', function(){
      if (!marker._popup) {
        this.setPopupText(marker);
      }
    }.bind(this));
    //Add marker to the clustering layer
    markers.addLayer(marker);
  }
  addMarkers(carehomes) : void {
    console.log('Adding markers');
    //Clustering settings
    var markers = L.markerClusterGroup({
      //disableClusteringAtZoom: 13,
      //spiderfyOnMaxZoom: true,
      chunkedLoading: true,
      //
      maxClusterRadius: function (zoom) {
        return (zoom < 13) ? 100 : 1; // radius in pixels
      }
    });
    //Add a marker for each carehome
    carehomes.forEach(carehome => {
      var color;
      switch (carehome[3]) {
        case 0:
          color = 'f43311';
          break;
        case 1:
          color = 'd1e24a';
          break;
        case 2:
          color = '33821d';
          break;
        case 3:
          color = '58e231';
          break;
        case -1:
          color = 'a3a3a3';
      }
      this.addMarker(carehome[1], carehome[2], carehome[0], color, markers);
    });

    //Add the clustering to the map
    this.mymap.addLayer(markers);
    console.log('Finished adding markers');
  }

  getCarehomes() {
    //Gets carehomes, saves them and sends them to the addMarkers function.
    this.carehomesService.get()
      .subscribe(
        carehomes => this.carehomes = carehomes,
        error => console.error('Error:', error),
        () => {
          this.addMarkers(this.carehomes);
          this.mymap.invalidateSize();
        }
      );
  }

  setPopupText(marker) {
    //Gets a specific carehome, calls a styling function and then binds that text to the given marker
    var carehome;
    this.popupService.get(marker.id)
      .subscribe(
        data => carehome = data,
        error => console.error('Error:', error),
        () => {
          marker.bindPopup(this.style(carehome)).openPopup();
        }
      );
  }

  style(carehome) {
    //makes html string out of a carehome object
    if (!carehome.grading.Overall || !carehome.grading.Caring || !carehome.grading.Effective || !carehome.grading.Responsive || !carehome.grading.Safe || !carehome.grading['Well-led']) {
      return `
        <div class="carehome-detail">
          <h3><strong>${carehome.name}</strong></h3>
          ${carehome.address1+'\n'}<br />
          ${carehome.address2}<br />
          ${carehome.postcode}<br />
          ${carehome.city}<br /><br />
          <h4><a href="${carehome.url}" target="_blank">More details here</a></h4>
        </div>
          `
    }
    return `
      <div class="carehome-detail">
        <h3><strong>${carehome.name}</strong></h3>
        ${carehome.address1+'\n'}<br />
        ${carehome.address2}<br />
        ${carehome.postcode}<br />
        ${carehome.city}<br /><br />
        <ul style="list-style: none;">
          <li style="background: url(assets/imgs/${carehome.grading.Caring.replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Caring: ${carehome.grading.Caring}</li>
          <li style="background: url(assets/imgs/${carehome.grading.Effective.replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Effective: ${carehome.grading.Effective}</li>
          <li style="background: url(assets/imgs/${carehome.grading.Responsive.replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Responsive: ${carehome.grading.Responsive}</li>
          <li style="background: url(assets/imgs/${carehome.grading.Safe.replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Safe: ${carehome.grading.Safe}</li>
          <li style="background: url(assets/imgs/${carehome.grading['Well-led'].replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Well-led: ${carehome.grading['Well-led']}</li>
          <li style="background: url(assets/imgs/${carehome.grading.Overall.replace(' ','').toLowerCase()}.png) no-repeat right center transparent;">Overall: ${carehome.grading.Overall}</li>
        </ul>
        <h4><a href="${carehome.url}" target="_blank">More details here</a></h4>
      </div>
        `;
  }
}
