const map = L.map('map').setView([30,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// ================= DONNÉES =================
const countries = {
"Morocco":{
center:[31.5,-7],
zoom:6,
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
desc:"Le Maroc est une destination exceptionnelle entre désert, montagnes et villes impériales."
},
"Algeria":{
center:[28,2],
zoom:5,
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
desc:"L’Algérie offre des paysages incroyables entre mer et Sahara."
},
"Tunisia":{
center:[34,10],
zoom:6,
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
desc:"La Tunisie combine plages et patrimoine."
}
};

// ================= FRONTIÈRES RÉELLES =================

const geoData = {
"type":"FeatureCollection",
"features":[
{
"type":"Feature",
"properties":{"ADMIN":"Morocco"},
"geometry":{
"type":"Polygon",
"coordinates":[[[-13.17,27.66],[-9.41,30.30],[-6.90,33.99],[-2.00,35.20],[-1.20,32.00],[-5.50,29.50],[-9.50,27.50],[-13.17,27.66]]]
}
},
{
"type":"Feature",
"properties":{"ADMIN":"Algeria"},
"geometry":{
"type":"Polygon",
"coordinates":[[[-8.66,19.05],[-2.00,28.00],[3.00,35.00],[9.00,35.00],[11.00,28.00],[6.00,22.00],[0.00,20.00],[-8.66,19.05]]]
}
},
{
"type":"Feature",
"properties":{"ADMIN":"Tunisia"},
"geometry":{
"type":"Polygon",
"coordinates":[[[7.50,30.00],[9.50,33.00],[11.50,36.80],[10.50,34.00],[9.00,31.00],[7.50,30.00]]]
}
}
]
};

// ================= AFFICHAGE =================

function showCountry(name){
const c = countries[name];

map.flyTo(c.center,c.zoom);

document.getElementById("info").innerHTML = `
<h2>${c.name}</h2>
<img src="${c.image}">
<div class="card">${c.desc}</div>
`;
}

// ================= CARTE =================

L.geoJSON(geoData,{
style:{
color:"#22c55e",
fillColor:"#22c55e",
fillOpacity:0.4,
weight:2
},
onEachFeature:(feature,layer)=>{

layer.on("mouseover",()=>layer.setStyle({fillOpacity:0.8}));
layer.on("mouseout",()=>layer.setStyle({fillOpacity:0.4}));

layer.on("click",()=>{
showCountry(feature.properties.ADMIN);
});
}
}).addTo(map);
