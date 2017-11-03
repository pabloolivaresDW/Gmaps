import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
/*import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
 HtmlInfoWindow,
 GoogleMapOptions
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps
  ) {}

  ionViewDidLoad(){
    this.obtenerPosicion();
  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}).then(response => {
      this.loadMap(response);
    })

    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(postion: Geoposition){
    let latitude = postion.coords.latitude;
    let longitud = postion.coords.longitude;

    

    console.log(latitude, longitud);
   
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
    //let style: 

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 43.0741904,
        lng: -89.3809802
      },
      zoom: 18,
      tilt: 30
    }
  };
    let map: GoogleMap = this.googleMaps.create(element, mapOptions);
   
    let myPosition: LatLng = new LatLng(latitude,longitud);
    let campusSalud: LatLng = new LatLng(-32.971225,-71.537937);
    
    let position: CameraPosition = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };

    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      map.moveCamera(position);

      var image = 'https://lh3.googleusercontent.com/orqXIYjLX2IZztrcltW6H9gjLzn3wmqUoWzlfW_hde7bLpUy51i2wkryDHm2FRgoqSM0zGHrej6Kdyc=w1116-h590';
      // create new marker
      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'Estás aquí!!!!!....con marcador creado',
        icon: 'www/assets/imgs/flecha.png'
      };

     let campusSaludMarcador: MarkerOptions = {
        position: campusSalud,
        title: 'Campus de la Salud UV',
        icon: 'www/assets/imgs/salud.png'
      };

        map.addMarker(campusSaludMarcador);
        map.addMarker(markerOptions);
    
    });

  }

}*/

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 //import { Component } from "@angular/core/";
 
 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage {
   map: GoogleMap;
   mapElement: HTMLElement;
   constructor(private googleMaps: GoogleMaps) { }
 
   ionViewDidLoad() {
    this.loadMap();
   }
 
  loadMap() {
     this.mapElement = document.getElementById('map');
 
     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
     };
 
     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 
     // Wait the MAP_READY before using any methods.
     this.map.one(GoogleMapsEvent.MAP_READY)
       .then(() => {
         console.log('Map is ready!');
 
         // Now you can use all methods safely.
         this.map.addMarker({
             title: 'Ionic',
             icon: 'blue',
             animation: 'DROP',
             position: {
               lat: 43.0741904,
               lng: -89.3809802
             }
           })
           .then(marker => {
             marker.on(GoogleMapsEvent.MARKER_CLICK)
               .subscribe(() => {
                 alert('clicked');
               });
           });
 
       });
   }
 }