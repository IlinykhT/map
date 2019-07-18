import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component ({
  selector: 'app-map',
  templateUrl: './leafmap.component.html',
  styleUrls: ['./leafmap.component.css']
})

export class LeafmapComponent {

  lat = 0;
  lng = 0;
  a=10;

  ngOnInit() {
    var map 	   = L.map('map').setView([56.007, 92.870], 15),
        marker 	   = L.marker([56.007, 92.870]).addTo(map),
        onMapClick = (e) => {
	  marker.setLatLng(e.latlng);
          this.lat = e.latlng.lat;
          this.lng = e.latlng.lng;
        }
	
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

    map.on('click',onMapClick);

  }

}