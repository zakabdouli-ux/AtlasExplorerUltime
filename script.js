
const map=L.map('map').setView([30,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

function showCountry(name){
const c=countries[name];

map.flyTo([30,5],5);

document.getElementById("info").innerHTML=`
<h2>${c.name}</h2>
<img src="${c.image}">
<div class="card">${c.desc}</div>
<div class="card"><strong>Villes :</strong> ${c.cities.join(", ")}</div>
`;
}

// frontières
const maroc=L.polygon([[27,-13],[32,-9],[35,-6],[35,-2],[30,-1],[28,-7]]);
const algerie=L.polygon([[19,-8],[28,-2],[35,3],[36,8],[30,11],[22,4]]);
const tunisie=L.polygon([[30,7],[33,9],[37,10],[34,11],[31,10]]);

[maroc,algerie,tunisie].forEach(p=>{
p.setStyle({color:"#22c55e",fillOpacity:0.5}).addTo(map);
p.on("mouseover",()=>p.setStyle({fillOpacity:0.8}));
p.on("mouseout",()=>p.setStyle({fillOpacity:0.5}));
});

maroc.on("click",()=>showCountry("Morocco"));
algerie.on("click",()=>showCountry("Algeria"));
tunisie.on("click",()=>showCountry("Tunisia"));

// villes
const markers=[
["Marrakech",31.63,-8],["Fès",34.02,-5],["Casablanca",33.57,-7.58],["Chefchaouen",35.17,-5.26],
["Alger",36.75,3.06],["Oran",35.7,-0.6],["Constantine",36.36,6.61],["Ghardaïa",32.49,3.67],
["Tunis",36.8,10.18],["Sousse",35.83,10.64],["Djerba",33.8,10.8],["Hammamet",36.4,10.6]
];

markers.forEach(c=>{
let m=L.marker([c[1],c[2]]).addTo(map);
m.on("click",()=>{
map.flyTo([c[1],c[2]],7);
document.getElementById("info").innerHTML=`
<h2>${c[0]}</h2>
<div class="card">${cities[c[0]].desc}</div>
`;
});
});
