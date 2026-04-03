const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "Map"
}).addTo(map);
// ================= FRONTIÈRES =================

// Maroc
const maroc = L.polygon([
[27,-13],[32,-9],[35,-6],[35,-2],[30,-1],[28,-7]
]).addTo(map);

// Algérie
const algerie = L.polygon([
[19,-8],[28,-2],[35,3],[36,8],[30,11],[22,4]
]).addTo(map);

// Tunisie
const tunisie = L.polygon([
[30,7],[33,9],[37,10],[34,11],[31,10]
]).addTo(map);

// ================= DONNÉES =================
function showCountry(name){
const c = countries[name];

document.getElementById("info").innerHTML =
"<h2>" + c.name + "</h2>" +
"<img src='" + c.image + "'>" +
"<div class='card'>" + c.desc + "</div>" +
"<div class='card'>" + c.infos + "</div>";
}
const countries = {

"Maroc":{
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
desc:"Le Maroc est l’une des destinations les plus fascinantes d’Afrique du Nord. Entre les souks animés de Marrakech, les médinas historiques de Fès, les plages de l’Atlantique et les dunes du Sahara, le pays offre une diversité exceptionnelle. Les voyageurs apprécient particulièrement l’hospitalité marocaine, la richesse culturelle et les paysages spectaculaires.",

infos:`
📍 Capitale : Rabat  
💰 Monnaie : Dirham marocain (MAD)  
🗣️ Langues : Arabe, Français  
☀️ Climat : Méditerranéen au nord, désertique au sud  
📅 Meilleure période : Mars à mai / septembre à novembre  

🎯 À faire :
- Explorer les souks de Marrakech  
- Visiter la médina de Fès  
- Dormir dans le désert du Sahara  
- Découvrir Chefchaouen (ville bleue)
`
},

"Algérie":{
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
desc:"L’Algérie est le plus grand pays d’Afrique et offre une richesse naturelle impressionnante. Entre les plages de la Méditerranée, les montagnes de Kabylie et l’immensité du Sahara, elle propose une expérience authentique et encore préservée du tourisme de masse. Son patrimoine historique est également remarquable.",

infos:`
📍 Capitale : Alger  
💰 Monnaie : Dinar algérien (DZD)  
🗣️ Langues : Arabe, Français  
☀️ Climat : Méditerranéen au nord, désertique au sud  
📅 Meilleure période : Avril à juin / septembre  

🎯 À faire :
- Visiter la Casbah d’Alger  
- Explorer le désert du Sahara  
- Découvrir Constantine et ses ponts  
- Profiter des plages méditerranéennes
`
},

"Tunisie":{
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
desc:"La Tunisie est une destination idéale pour combiner détente et découverte. Avec ses plages, ses médinas, ses sites antiques comme Carthage et son climat ensoleillé, elle attire des millions de visiteurs chaque année. C’est un pays accessible et riche culturellement.",

infos:`
📍 Capitale : Tunis  
💰 Monnaie : Dinar tunisien (TND)  
🗣️ Langues : Arabe, Français  
☀️ Climat : Méditerranéen  
📅 Meilleure période : Avril à octobre  

🎯 À faire :
- Visiter Carthage  
- Se détendre à Djerba  
- Explorer la médina de Tunis  
- Profiter des stations balnéaires
`
}

};
