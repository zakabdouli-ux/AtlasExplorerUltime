const map = L.map('map').setView([31,5],5);

// fond de carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

// données pays
const countries = {
"Maroc":{
name:"Maroc",
desc:"Pays riche entre désert, montagnes et villes impériales.",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
},
"Algérie":{
name:"Algérie",
desc:"Pays immense avec Sahara, mer et patrimoine historique.",
image:"https://images.unsplash.com/photo-1606820871165-4c6cb0a6a53f?w=800"
},
"Tunisie":{
name:"Tunisie",
desc:"Destination idéale entre plages et culture.",
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
}
};

// 🔥 SOLUTION STABLE → PAS DE GEOJSON BUG
const zones = [
{
name:"Maroc",
coords:[[27,-13],[30,-10],[34,-7],[35,-2],[31,-3],[28,-7],[27,-13]]
},
{
name:"Algérie",
coords:[[19,-8],[28,-2],[35,3],[35,9],[28,10],[22,4],[19,-3],[19,-8]]
},
{
name:"Tunisie",
coords:[[30,7],[33,9],[36,10],[34,11],[30,9],[30,7]]
}
];

// afficher pays
function showCountry(name){
const d = countries[name];

document.getElementById("info").innerHTML = `
<h2>${d.name}</h2>
<img src="${d.image}">
<p>${d.desc}</p>
`;
}

// afficher sur carte
zones.forEach(zone=>{
let polygon = L.polygon(zone.coords,{
color:"#22c55e",
fillOpacity:0.5
}).addTo(map);

polygon.on('mouseover',()=>polygon.setStyle({fillOpacity:0.8}));
polygon.on('mouseout',()=>polygon.setStyle({fillOpacity:0.5}));

polygon.on('click',()=>{
showCountry(zone.name);
});
});
