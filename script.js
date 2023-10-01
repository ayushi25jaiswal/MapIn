'use strict';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`
      );

      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      // L.marker(coords).addTo(map).bindPopup('').openPopup();

      map.on('click', function (mapEvent) {
        //show marker
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Work')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your location');
    }
  );
}
