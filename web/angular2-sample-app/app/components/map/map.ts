import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {PostcodeService} from '../../services/postcode';
import {CarehomesService} from '../../services/carehomes';

declare let L: any;
@Component({
  selector: 'map',
  templateUrl: './components/map/map.html',
  styleUrls: ['./components/map/map.css']
})

export class MapCmp implements OnInit, AfterViewInit {
  constructor(public postcodeService: PostcodeService, public carehomesService: CarehomesService) {}
  postcodes : any;
  carehomes : any;
  mymap: any;
  apikey: 'pk.eyJ1IjoianVhbmNhcmxvc2hnIiwiYSI6ImNpdnIzN2R4dzAwMTEyeW1ubTI2aXJ1bG0ifQ.nY1oVZ6HN3Vg4sSwbOy2Vw';
  ngOnInit() {
    //Gets the coordinates for each outer postcode in the UK and saves it in this.postcodes
    this.getPostcodes();
  }
  //Map loads after the view
  ngAfterViewInit() {



    //Load the map
    this.initMap();

    //Add markers
    //this.addMarker(51.5186,-0.0859,'Skillsmatter','23842a');

    //Gets carehomes json and adds the markers
    this.getCarehomes();
  
  }

  initMap() : void {
    this.mymap = L.map('mapid').setView([54, -2], 6);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token='+this.apikey, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/'+
    'licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    }).addTo(this.mymap);
  }

  addMarker(lat: number , lng : number, text : string, color : string, markers) : void {
    var size = 'l';
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
    marker.bindPopup(text);
    markers.addLayer(marker);
  }

  addMarkers(carehomes) : void {
    var markers = L.markerClusterGroup({
      disableClusteringAtZoom: 11,
      spiderfyOnMaxZoom: false,
      chunkedLoading: true
    });
    console.log(carehomes[0])
    carehomes.forEach(carehome => {
      if (carehome.coordinates) {
        var color;
        var text = `
        <strong>${carehome.home}</strong><br /><br />
        ${carehome.address}<br />
        ${carehome.postcode}<br />
        ${carehome.city}<br /><br />
        <ul>
          <li>Caring: ${carehome.grades.Caring}</li>
          <li>Effective: ${carehome.grades.Effective}</li>
          <li>Responsive: ${carehome.grades.Responsive}</li>
          <li>Safe: ${carehome.grades.Safe}</li>
          <li>Well-led: ${carehome.grades["Well-led"]}</li>
          <li>Overall: ${carehome.grades.Overall}</li>
        </ul>
        `;
        if (carehome.grades.Overall === 'Outstanding') color = '58e231';
        else if (carehome.grades.Overall === 'Good') color = '33821d';
        else if (carehome.grades.Overall === 'Requires improvement') color = 'd1e24a';
        else if (carehome.grades.Overall === 'Inadequate') color = 'f43311';
        this.addMarker(carehome.coordinates[0], carehome.coordinates[1], text, color, markers);
      }
    });
    this.mymap.addLayer(markers);

  //Need json!
  }

  getPostcodes() {
    this.postcodeService.get()
      .subscribe(
        postcodes => this.postcodes = postcodes,
        error => console.error('Error:', error),
        //() => console.log(this.postcodes)
      );
  }

  getCarehomes() {
    this.carehomesService.get()
      .subscribe(
        carehomes => this.carehomes = carehomes,
        error => console.error('Error:', error),
        () => {
          this.addMarkers(this.carehomes);
        }
      );
  }

  setView(postcode : string) {
    postcode = postcode.toUpperCase();
    this.mymap.setView([this.postcodes[postcode].lat, this.postcodes[postcode].lng], 12);
  }
}
