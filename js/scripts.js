function initMap() {
var uluru = {lat: 34.0717487, lng: -117.5925061};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center: uluru
});
var infowindow = new google.maps.InfoWindow({
    content: '<p>Huck Finn Jubilee</p>'
  });
    
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
    {name: 'Styled Map'});

    map.mapTypes.set('styled_map', styledMapType);
    
    
    map.setMapTypeId('styled_map');

        var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Huck Finn Jubilee'
    });
    infowindow.open(map, marker);
}






$(document).ready(function () {
    
    
    $('.slider-init').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
         infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 700
    });
    
    $('.click-modal-xs').click(function(){
        $('#modal-menu').modal('show');
        
    });
    
    $('.close-menu').click(function(){
        $('#modal-menu').modal('hide');
    });
    
    $('.xs-open-close-icon').click(function(){
        
        if(!$(this).parents('.xs-open-close').hasClass('opened')){
            $(this).parents('.xs-open-close').addClass('opened');
            
        }
        else{
            $(this).parents('.xs-open-close').removeClass('opened');
        }
    });
    
    

});





