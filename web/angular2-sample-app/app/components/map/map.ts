import {Component, AfterViewInit} from 'angular2/core';

declare let L: any;
@Component({
  selector: 'map',
  templateUrl: './components/map/map.html',
  styleUrls: ['./components/map/map.css']
})
export class MapCmp implements AfterViewInit {
  mymap: any;
  apikey: 'pk.eyJ1IjoianVhbmNhcmxvc2hnIiwiYSI6ImNpdnIzN2R4dzAwMTEyeW1ubTI2aXJ1bG0ifQ.nY1oVZ6HN3Vg4sSwbOy2Vw';
  //Map loads after the view
  ngAfterViewInit() {
    //Load the map
    this.initMap();
    //Add markers
    this.addMarker(51.5186,-0.0859,'Skillsmatter','23842a');
  }

  initMap() : void {
    this.mymap = L.map('mapid').setView([51.518, -0.086], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token='+this.apikey, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/'+
    'licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    }).addTo(this.mymap);
  }

  addMarker(lat: number , lng : number, text : string, color : string) : void {
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
    var marker = L.marker([lat, lng], {icon}).addTo(this.mymap);
    marker.bindPopup(text).openPopup();
  }

}
