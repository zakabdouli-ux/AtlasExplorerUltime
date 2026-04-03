<script>
const map = L.map("map").setView([31.5, 4.5], 5);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png").addTo(map);

// ==================== DATA ====================

const countries = {
"Maroc":{
center:[31.5,-7],
zoom:6,
title:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
text:`Le Maroc est une destination incontournable mêlant traditions, modernité et paysages variés.
Des médinas animées aux dunes du Sahara, en passant par les montagnes de l’Atlas et les plages atlantiques, le pays offre une diversité exceptionnelle.
La gastronomie marocaine, riche et parfumée, ainsi que l’accueil chaleureux des habitants en font une expérience unique pour les voyageurs.`
},

"Algérie":{
center:[28,2],
zoom:5,
title:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
text:`L’Algérie est le plus grand pays d’Afrique et possède une richesse naturelle et culturelle impressionnante.
Entre la mer Méditerranée, les montagnes kabyles et l’immensité du Sahara, elle offre des paysages spectaculaires.
Encore peu touristique, elle représente une destination authentique et préservée.`
},

"Tunisie":{
center:[34,10],
zoom:6,
title:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
text:`La Tunisie séduit par son climat, ses plages et son patrimoine historique.
Des ruines de Carthage aux médinas animées, en passant par les stations balnéaires, elle propose une expérience complète entre détente et culture.`
}
};

// ==================== VILLES ====================

const cities = [
["Marrakech",31.63,-8,"Ville mythique avec souks, palais et ambiance unique.","Maroc"],
["Fès",34.02,-5,"Capitale culturelle avec médina classée UNESCO.","Maroc"],
["Casablanca",33.57,-7.58,"Ville moderne avec la grande mosquée Hassan II.","Maroc"],

["Alger",36.75,3.06,"Capitale avec vue mer et Casbah historique.","Algérie"],
["Oran",35.7,-0.6,"Ville dynamique connue pour le raï.","Algérie"],
["Constantine",36.36,6.61,"Ville des ponts suspendus spectaculaire.","Algérie"],

["Tunis",36.8,10.18,"Capitale proche de Carthage.","Tunisie"],
["Sousse",35.83,10.64,"Ville balnéaire très touristique.","Tunisie"],
["Djerba",33.8,10.8,"Île paradisiaque pour se détendre.","Tunisie"]
];

// ==================== AFFICHAGE ====================

function showCountry(name){
const d = countries[name];

map.setView(d.center, d.zoom);

document.getElementById("info").innerHTML = `
<h2>${d.title}</h2>
<div class="card">
<img src="${d.image}">
<p>${d.text}</p>
</div>
`;
}

// ==================== FRONTIÈRES ====================

const morocco = L.polygon([[27,-13],[32,-9],[35,-6],[35,-2],[30,-1],[28,-7]],{color:"#22c55e"}).addTo(map);
const algeria = L.polygon([[19,-8],[28,-2],[35,3],[36,8],[30,11],[22,4]],{color:"#22c55e"}).addTo(map);
const tunisia = L.polygon([[30,7],[33,9],[37,10],[34,11],[31,10]],{color:"#22c55e"}).addTo(map);

// clic pays
morocco.on("click",()=>showCountry("Maroc"));
algeria.on("click",()=>showCountry("Algérie"));
tunisia.on("click",()=>showCountry("Tunisie"));

// ==================== VILLES ====================

cities.forEach(city=>{
let marker = L.marker([city[1],city[2]]).addTo(map);

marker.on("click",()=>{
document.getElementById("info").innerHTML = `
<h2>${city[0]}</h2>
<div class="card">
<p>${city[3]}</p>
<p><strong>Pays :</strong> ${city[4]}</p>
</div>
`;
});
});
</script>
