const map=L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// Chargement frontières réelles
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

L.geoJSON(geoData,{
style:{color:"#22c55e",fillColor:"#22c55e",fillOpacity:0.4},
onEachFeature:(feature,layer)=>{
layer.on('click',()=>{
showCountry(feature.properties.ADMIN);
});
}
}).addTo(map);

// affichage pays
function showCountry(name){
const d=countries[name];
if(!d)return;
document.getElementById("info").innerHTML=
`<h2>${d.name}</h2>
<img src="${d.image}">
<div class="card">${d.infos}</div>
<div class="card">${d.desc}</div>`;
}

// villes
const cityList=[
["Marrakech",31.63,-8],
["Fès",34.02,-5],
["Alger",36.75,3.06],
["Oran",35.7,-0.6],
["Tunis",36.8,10.18],
["Djerba",33.8,10.8]
];

cityList.forEach(c=>{
let m=L.marker([c[1],c[2]]).addTo(map);
m.on('click',()=>{
let d=cities[c[0]];
document.getElementById("info").innerHTML=
`<h2>${c[0]}</h2>
<img src="${d.img}">
<div class="card">${d.desc}</div>`;
});
});
