import {Component, AfterViewInit} from 'angular2/core';

declare let L: any;
@Component({
  selector: 'map',
  templateUrl: './components/map/map.html',
  styleUrls: ['./components/map/leaflet.css', './components/map/map.css']
})
export class MapCmp implements AfterViewInit {
  mymap: any;
  //Map loads after the view
  ngAfterViewInit() {
    this.mymap = L.map('mapid').setView([51.518, -0.086], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVhbmNhcmxvc2hnIiwiYSI6ImNpdnIzN2R4dzAwMTEyeW1ubTI2aXJ1bG0ifQ.nY1oVZ6HN3Vg4sSwbOy2Vw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
    }).addTo(this.mymap);
  }
}
