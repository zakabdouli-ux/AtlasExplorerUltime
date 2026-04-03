const map = L.map('map').setView([31,5],5);

// fond de carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// FRONTIÈRES RÉELLES (serveur obligatoire)
fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
.then(res=>res.json())
.then(data=>{
let selected = data.features.filter(f =>
["Morocco","Algeria","Tunisia"].includes(f.properties.ADMIN)
);

L.geoJSON(selected,{
style:{color:"#22c55e",fillColor:"#22c55e",fillOpacity:0.4},
onEachFeature:(feature,layer)=>{
layer.on('mouseover',()=>layer.setStyle({fillOpacity:0.7}));
layer.on('mouseout',()=>layer.setStyle({fillOpacity:0.4}));

layer.on('click',()=>{
showCountry(feature.properties.ADMIN);
});
}
}).addTo(map);
});

// afficher pays
function showCountry(name){
const d = countries[name];

document.getElementById("info").innerHTML = `
<h2>${d.name}</h2>
<img src="${d.image}">
<div class="card">${d.infos}</div>
<div class="card">${d.desc}</div>
`;
}

// villes
const cityList = [
["Marrakech",31.63,-8],
["Fès",34.02,-5],
["Alger",36.75,3.06],
["Oran",35.7,-0.6],
["Tunis",36.8,10.18],
["Djerba",33.8,10.8]
];

cityList.forEach(c=>{
let marker = L.marker([c[1],c[2]]).addTo(map);

marker.on('click',()=>{
let d = cities[c[0]];
document.getElementById("info").innerHTML = `
<h2>${c[0]}</h2>
<img src="${d.img}">
<div class="card">${d.desc}</div>
`;
});
});
