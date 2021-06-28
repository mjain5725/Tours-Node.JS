/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibWphaW41NzI1IiwiYSI6ImNrcWgwdm9qazBjd3oyb3BmcmJlZzMwY3QifQ.VpK6Ka-zshL2_RZdK-L9YQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mjain5725/ckqh1pc24520117qk1jn00wsy',
  scrollZoom: false,
  //   center: [-118.113491, 34.111745],
  //   zoom: 4,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //Create and Add Marker
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extends the map bounds to include the current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
