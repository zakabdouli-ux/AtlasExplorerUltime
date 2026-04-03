// ================= CARTE =================
const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// ================= DONNÉES =================
const countries = {
"Maroc":{
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
desc:"Le Maroc est une destination exceptionnelle entre désert, montagnes et villes impériales."
},
"Algérie":{
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
desc:"L’Algérie offre des paysages incroyables entre mer et Sahara."
},
"Tunisie":{
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
desc:"La Tunisie combine plages et patrimoine."
}
};

// ================= AFFICHAGE =================
function showCountry(name){
const c = countries[name];

document.getElementById("info").innerHTML = `
<h2>${c.name}</h2>
<img src="${c.image}">
<div class="card">${c.desc}</div>
`;
}

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

maroc.on("click", ()=> showCountry("Maroc"));
algerie.on("click", ()=> showCountry("Algérie"));
tunisie.on("click", ()=> showCountry("Tunisie"));
