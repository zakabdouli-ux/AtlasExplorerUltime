alert("script OK");

const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
