const map = L.map('map').setView([31,5],5);

// fond de carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// données pays (IMPORTANT)
const countries = {
"Morocco":{
name:"Maroc",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
desc:"Le Maroc est une destination touristique riche entre désert, montagnes et villes impériales.",
infos:"Capitale : Rabat | Monnaie : Dirham"
},
"Algeria":{
name:"Algérie",
image:"https://images.unsplash.com/photo-1606820871165-4c6cb0a6a53f?w=800",
desc:"L’Algérie offre une diversité de paysages entre Méditerranée et Sahara.",
infos:"Capitale : Alger | Monnaie : Dinar"
},
"Tunisia":{
name:"Tunisie",
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
desc:"La Tunisie combine plages, culture et patrimoine historique.",
infos:"Capitale : Tunis | Monnaie : Dinar"
}
};

// 🔥 FRONTIÈRES INTÉGRÉES (fonctionne partout)
const geoData = {
"type":"FeatureCollection",
"features":[
{
"type":"Feature",
"properties":{"ADMIN":"Morocco"},
"geometry":{"type":"Polygon","coordinates":[[[-13,27],[-10,30],[-7,34],[-2,35],[-3,31],[-7,28],[-13,27]]]}
},
{
"type":"Feature",
"properties":{"ADMIN":"Algeria"},
"geometry":{"type":"Polygon","coordinates":[[[-8,19],[-2,28],[3,35],[9,35],[10,28],[4,22],[-3,19],[-8,19]]]}
},
{
"type":"Feature",
"properties":{"ADMIN":"Tunisia"},
"geometry":{"type":"Polygon","coordinates":[[[7,30],[9,33],[10,36],[11,34],[9,30],[7,30]]]}
}
]
};

// affichage pays
function showCountry(name){
const d = countries[name];
if(!d) return;

document.getElementById("info").innerHTML = `
<h2>${d.name}</h2>
<img src="${d.image}">
<div class="card">${d.infos}</div>
<div class="card">${d.desc}</div>
`;
}

// carte interactive
L.geoJSON(geoData,{
style:{color:"#22c55e",fillColor:"#22c55e",fillOpacity:0.5},
onEachFeature:(feature,layer)=>{
layer.on('mouseover',()=>layer.setStyle({fillOpacity:0.8}));
layer.on('mouseout',()=>layer.setStyle({fillOpacity:0.5}));
layer.on('click',()=>{
showCountry(feature.properties.ADMIN);
});
}
}).addTo(map);
