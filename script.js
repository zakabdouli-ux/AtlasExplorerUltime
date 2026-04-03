// ================= CARTE =================
const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: "© OpenStreetMap & Carto"
}).addTo(map);
// ================= DONNÉES =================
const countries = {

"Maroc":{
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200",
desc:"Le Maroc est une destination emblématique d’Afrique du Nord, offrant une diversité exceptionnelle de paysages et de cultures. Entre les médinas animées, les montagnes de l’Atlas, les plages de l’Atlantique et les dunes du Sahara, le pays séduit par son authenticité et sa richesse.",

infos:`
📍 Capitale : Rabat  
👥 Population : ~37 millions  
💰 Monnaie : Dirham marocain (MAD)  
🗣️ Langues : Arabe, Français  
🕌 Religion : Islam  

☀️ Climat :
- Nord : méditerranéen  
- Sud : désertique  
- Étés chauds, hivers doux  

📅 Meilleure période :
✔ Mars à mai  
✔ Septembre à novembre  

✈️ Accès :
- Aéroports : Casablanca, Marrakech  
- Bon réseau ferroviaire  

🍽️ Gastronomie :
- Couscous  
- Tajine  
- Pastilla  

🎯 Activités :
- Explorer Marrakech  
- Visiter Fès  
- Nuit dans le désert  
- Chefchaouen (ville bleue)  

⚠️ Conseils :
- Négocier dans les souks  
- Respecter les traditions  
`
},

"Algérie":{
name:"Algérie 🇩🇿",
image:"https://www.okvoyage.com/wp-content/uploads/2023/12/les-paysages-dalgerie.jpg",
desc:"L’Algérie est le plus grand pays d’Afrique et possède une richesse naturelle et culturelle impressionnante. Encore peu touristique, elle offre une expérience authentique entre mer Méditerranée, montagnes et désert du Sahara.",

infos:`
📍 Capitale : Alger  
👥 Population : ~45 millions  
💰 Monnaie : Dinar algérien (DZD)  
🗣️ Langues : Arabe, Français  
🕌 Religion : Islam  

☀️ Climat :
- Nord : méditerranéen  
- Sud : désertique  

📅 Meilleure période :
✔ Avril à juin  
✔ Septembre à novembre  

✈️ Accès :
- Aéroport d’Alger  
- Réseau routier important  

🍽️ Gastronomie :
- Couscous  
- Chorba  
- Rechta  

🎯 Activités :
- Casbah d’Alger  
- Constantine (ponts)  
- Sahara (Tamanrasset)  
- Plages méditerranéennes  

⚠️ Conseils :
- Préparer son voyage  
- Respect des coutumes  
`
},

"Tunisie":{
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
desc:"La Tunisie est une destination touristique majeure combinant plages, patrimoine historique et culture riche. Accessible et ensoleillée, elle offre une grande variété d’expériences entre détente et découverte.",

infos:`
📍 Capitale : Tunis  
👥 Population : ~12 millions  
💰 Monnaie : Dinar tunisien (TND)  
🗣️ Langues : Arabe, Français  
🕌 Religion : Islam  

☀️ Climat :
- Méditerranéen  
- Étés chauds  
- Hivers doux  

📅 Meilleure période :
✔ Avril à octobre  

✈️ Accès :
- Aéroport de Tunis  
- Destination touristique facile  

🍽️ Gastronomie :
- Couscous tunisien  
- Brik  
- Ojja  

🎯 Activités :
- Carthage  
- Djerba  
- Sousse  
- Médina de Tunis  

⚠️ Conseils :
- Crème solaire  
- Zones touristiques sûres  
`
}

};

// ================= AFFICHAGE =================
function showCountry(name){
const c = countries[name];

map.flyTo([31,5],6);

document.getElementById("info").innerHTML =
"<h2>"+c.name+"</h2>" +
"<img src='"+c.image+"'>" +
"<div class='card'>"+c.desc+"</div>" +
"<div class='card'>"+c.infos+"</div>";
}

// ================= FRONTIÈRES =================
const maroc = L.polygon([[27,-13],[32,-9],[35,-6],[35,-2],[30,-1],[28,-7]], {color:"#22c55e"}).addTo(map);
const algerie = L.polygon([[19,-8],[28,-2],[35,3],[36,8],[30,11],[22,4]], {color:"#22c55e"}).addTo(map);
const tunisie = L.polygon([[30,7],[33,9],[37,10],[34,11],[31,10]], {color:"#22c55e"}).addTo(map);

// effet hover sur pays
[maroc, algerie, tunisie].forEach(p=>{
p.on("mouseover",()=>p.setStyle({fillOpacity:0.8}));
p.on("mouseout",()=>p.setStyle({fillOpacity:0.5}));
});

// clic pays
maroc.on("click",()=>showCountry("Maroc"));
algerie.on("click",()=>showCountry("Algérie"));
tunisie.on("click",()=>showCountry("Tunisie"));

// ================= VILLES =================

// données des villes
const cityData = {

"Marrakech":{
image:"https://images.unsplash.com/photo-1597211684563-9d7c1b3c8c2c?w=800",
desc:"Marrakech est une ville emblématique du Maroc, connue pour ses souks, ses palais et sa place Jemaa el-Fna."
},

"Fès":{
image:"https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800",
desc:"Fès est une ville historique avec une médina classée à l’UNESCO."
},

"Alger":{
image:"https://images.unsplash.com/photo-1587653263995-422546a7a569?w=800",
desc:"Alger est une capitale méditerranéenne avec une riche histoire."
},

"Oran":{
image:"https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800",
desc:"Oran est une ville dynamique connue pour la musique raï."
},

"Tunis":{
image:"https://images.unsplash.com/photo-1577086664693-894d8405334a?w=800",
desc:"Tunis est une capitale historique proche de Carthage."
},

"Djerba":{
image:"https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
desc:"Djerba est une île paradisiaque idéale pour les vacances."
}

};

// liste des villes (nom, latitude, longitude, pays)
const cities = [
["Marrakech",31.63,-8,"Maroc"],
["Fès",34.02,-5,"Maroc"],
["Alger",36.75,3.06,"Algérie"],
["Oran",35.7,-0.6,"Algérie"],
["Tunis",36.8,10.18,"Tunisie"],
["Djerba",33.8,10.8,"Tunisie"]
];

// création des markers
cities.forEach(function(city){

let marker = L.marker([city[1], city[2]]).addTo(map);

// clic sur une ville
marker.on("click", function(){

let data = cityData[city[0]];

map.flyTo([city[1], city[2]], 8);

document.getElementById("info").innerHTML =
"<h2>" + city[0] + "</h2>" +
"<img src='" + data.image + "'>" +
"<div class='card'>" + data.desc + "</div>" +
"<p><strong>Pays :</strong> " + city[3] + "</p>";

});

});
