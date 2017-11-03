import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Component } from "@angular/core/";
 import { NavController } from 'ionic-angular';
 import { Geolocation, Geoposition } from '@ionic-native/geolocation';

 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage {
   map: GoogleMap;
   mapElement: HTMLElement;
   constructor(private googleMaps: GoogleMaps, public navCtrl: NavController,
    public geolocation: Geolocation) { }
 
   ionViewDidLoad() {
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

  loadMap(postion: Geoposition) {
     this.mapElement = document.getElementById('map');
     let latitude = postion.coords.latitude;
     let longitud = postion.coords.longitude;

     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: latitude,
           lng: longitud
         },
         zoom: 18,
         tilt: 30
       },
       styles:[
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#008eff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#3d4c5a"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [
                {
                    "saturation": "100"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "0"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "11"
                },
                {
                    "lightness": "0"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-43"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#2400ff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#0a223c"
                },
                {
                    "weight": "1"
                },
                {
                    "saturation": "1"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#0b58aa"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": "12"
                },
                {
                    "weight": "1.22"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "-17"
                },
                {
                    "lightness": "-50"
                },
                {
                    "weight": "1.00"
                },
                {
                    "color": "#0b58aa"
                }
            ]
        }
    ]
    };
 
     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 
     // Wait the MAP_READY before using any methods.
     this.map.one(GoogleMapsEvent.MAP_READY)
       .then(() => {
         alert('Map is ready!');
         let ingenieria;
         ingenieria=this.map.addMarker({
             title:'facultad de ingenieria',
             icon:'red',
             position:{
                 lat:-33.0458713,
                 lng:-71.6136807
             }
         });

         let FACEA;
         ingenieria=this.map.addMarker({
            title:'Texto de ejemplo 1....',
            icon:'green',
            position:{
                lat:-33.043834,
                lng:-71.616929
            }
        });

         // Now you can use all methods safely.
         this.map.addMarker({
             title: 'Ionic',
             icon: 'blue',
             animation: 'DROP',
             position: {
               lat: latitude,
               lng: longitud
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