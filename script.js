const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map'
}).addTo(map);
