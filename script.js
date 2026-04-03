const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// données pays
const countries = {
"Morocco":{
name:"Maroc",
desc:"Le Maroc est une destination riche entre désert, montagnes et villes impériales.",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
},
"Algeria":{
name:"Algérie",
desc:"L’Algérie offre une grande diversité de paysages entre mer et Sahara.",
image:"https://images.unsplash.com/photo-1606820871165-4c6cb0a6a53f?w=800"
},
"Tunisia":{
name:"Tunisie",
desc:"La Tunisie combine plages, culture et patrimoine historique.",
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
}
};

// 🔥 FRONTIÈRES (VERSION SIMPLIFIÉE MAIS FIABLE)
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

// affichage info
function showCountry(name){
const d = countries[name];
if(!d) return;

document.getElementById("info").innerHTML = `
<h2>${d.name}</h2>
<img src="${d.image}">
<p>${d.desc}</p>
`;
}

// carte interactive
L.geoJSON(geoData,{
style:{
color:"#22c55e",
fillColor:"#22c55e",
fillOpacity:0.5
},
onEachFeature:(feature,layer)=>{
layer.on('mouseover',()=>layer.setStyle({fillOpacity:0.8}));
layer.on('mouseout',()=>layer.setStyle({fillOpacity:0.5}));

layer.on('click',()=>{
showCountry(feature.properties.ADMIN);
});
}
}).addTo(map);
