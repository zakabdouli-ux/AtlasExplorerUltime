const map = L.map('map').setView([30,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// ================= DATA =================

const countries = {
"Morocco":{
center:[31.5,-7],
zoom:6,
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
desc:`Destination incontournable entre désert, montagnes et villes impériales.
Idéal pour culture, gastronomie et aventure.`,
type:"culture"
},

"Algeria":{
center:[28,2],
zoom:5,
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
desc:`Pays immense avec Sahara, montagnes et Méditerranée.
Destination authentique encore peu touristique.`,
type:"nature"
},

"Tunisia":{
center:[34,10],
zoom:6,
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
desc:`Destination idéale pour plages et culture.
Parfait pour vacances accessibles.`,
type:"plage"
}
};

// ================= FRONTIÈRES RÉELLES =================

fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
.then(res=>res.json())
.then(data=>{

let selected = data.features.filter(f =>
["Morocco","Algeria","Tunisia"].includes(f.properties.ADMIN)
);

L.geoJSON(selected,{
style:{
color:"#22c55e",
fillColor:"#22c55e",
fillOpacity:0.4
},
onEachFeature:(feature,layer)=>{

layer.on("mouseover",()=>layer.setStyle({fillOpacity:0.8}));
layer.on("mouseout",()=>layer.setStyle({fillOpacity:0.4}));

layer.on("click",()=>{
showCountry(feature.properties.ADMIN);
});

}
}).addTo(map);

});

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

// ================= VILLES =================

const cities = [
["Marrakech",31.63,-8,"Souks, palais et ambiance unique","Morocco"],
["Fès",34.02,-5,"Ville historique UNESCO","Morocco"],
["Casablanca",33.57,-7.58,"Ville moderne","Morocco"],

["Alger",36.75,3.06,"Capitale méditerranéenne","Algeria"],
["Oran",35.7,-0.6,"Ville du raï","Algeria"],
["Constantine",36.36,6.61,"Ville des ponts","Algeria"],

["Tunis",36.8,10.18,"Capitale historique","Tunisia"],
["Sousse",35.83,10.64,"Station balnéaire","Tunisia"],
["Djerba",33.8,10.8,"Île paradisiaque","Tunisia"]
];

cities.forEach(c=>{
let marker = L.marker([c[1],c[2]]).addTo(map);

marker.on("click",()=>{
map.flyTo([c[1],c[2]],8);

document.getElementById("info").innerHTML = `
<h2>${c[0]}</h2>
<div class="card">${c[3]}</div>
<p><strong>Pays :</strong> ${c[4]}</p>
`;
});
});
