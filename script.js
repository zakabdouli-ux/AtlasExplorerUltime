const map = L.map('map').setView([31, 5], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const maroc = L.polygon(
  [
    [27, -13],
    [32, -9],
    [35, -6],
    [35, -2],
    [30, -1],
    [28, -7]
  ],
  {
    color: '#22c55e',
    fillColor: '#22c55e',
    fillOpacity: 0.5,
    weight: 2
  }
).addTo(map);

const algerie = L.polygon(
  [
    [19, -8],
    [28, -2],
    [35, 3],
    [36, 8],
    [30, 11],
    [22, 4]
  ],
  {
    color: '#22c55e',
    fillColor: '#22c55e',
    fillOpacity: 0.5,
    weight: 2
  }
).addTo(map);

const tunisie = L.polygon(
  [
    [30, 7],
    [33, 9],
    [37, 10],
    [34, 11],
    [31, 10]
  ],
  {
    color: '#22c55e',
    fillColor: '#22c55e',
    fillOpacity: 0.5,
    weight: 2
  }
).addTo(map);

[maroc, algerie, tunisie].forEach((layer) => {
  layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.8 }));
  layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.5 }));
});
