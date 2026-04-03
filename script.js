// création carte
const map = L.map('map').setView([31,5],5);

// fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// ================= FRONTIÈRES =================

// Maroc
const maroc = L.polygon([
[27,-13],[32,-9],[35,-6],[35,-2],[30,-1],[28,-7]
]).addTo(map);

// Algérie
const algerie = L.polygon([
[19,-8],[28,-2],[35,3],[36,8],[30,11],[22,4]
]).addTo(map);

// Tunisie
const tunisie = L.polygon([
[30,7],[33,9],[37,10],[34,11],[31,10]
]).addTo(map);

// ================= INTERACTIONS =================

maroc.on("click", ()=> alert("Maroc 🇲🇦"));
algerie.on("click", ()=> alert("Algérie 🇩🇿"));
tunisie.on("click", ()=> alert("Tunisie 🇹🇳"));
