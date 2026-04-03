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

const countries = {

"Maroc":{
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
desc:"Le Maroc est une destination incontournable d’Afrique du Nord, réputée pour sa richesse culturelle, ses paysages variés et son hospitalité. Entre les médinas historiques, les montagnes de l’Atlas, les plages atlantiques et les dunes du Sahara, le pays offre une expérience unique mêlant tradition et modernité.",

infos:`
📍 Capitale : Rabat  
👥 Population : ~37 millions  
💰 Monnaie : Dirham marocain (MAD)  
🗣️ Langues : Arabe, Français (très utilisé)  
🕌 Religion : Islam (majoritaire)  

☀️ Climat :
- Nord : méditerranéen  
- Sud : désertique  
- Étés chauds, hivers doux  

📅 Meilleure période :
✔ Mars à mai (printemps)  
✔ Septembre à novembre  

✈️ Accès :
- Aéroports principaux : Casablanca, Marrakech  
- Bon réseau de transport (train + bus)  

🍽️ Gastronomie :
- Couscous  
- Tajine  
- Pastilla  

🎯 À faire absolument :
- Explorer Marrakech (souks, place Jemaa el-Fna)  
- Visiter Fès et sa médina  
- Dormir dans le désert du Sahara  
- Découvrir Chefchaouen (ville bleue)  

⚠️ Conseils :
- Négocier dans les souks  
- Respecter les coutumes locales  
`
},

"Algérie":{
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
desc:"L’Algérie est le plus grand pays d’Afrique et offre une richesse naturelle exceptionnelle. Entre la mer Méditerranée, les montagnes et l’immensité du Sahara, elle propose une expérience authentique encore préservée du tourisme de masse.",

infos:`
📍 Capitale : Alger  
👥 Population : ~45 millions  
💰 Monnaie : Dinar algérien (DZD)  
🗣️ Langues : Arabe, Français  
🕌 Religion : Islam (majoritaire)  

☀️ Climat :
- Nord : méditerranéen  
- Sud : désertique (Sahara)  

📅 Meilleure période :
✔ Avril à juin  
✔ Septembre à novembre  

✈️ Accès :
- Aéroport d’Alger principal  
- Réseau routier important  

🍽️ Gastronomie :
- Couscous  
- Chorba  
- Rechta  

🎯 À faire absolument :
- Visiter la Casbah d’Alger  
- Découvrir Constantine (ponts spectaculaires)  
- Explorer le désert du Sahara  
- Profiter des plages méditerranéennes  

⚠️ Conseils :
- Préparer son voyage à l’avance  
- Respecter les traditions locales  
`
},

"Tunisie":{
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
desc:"La Tunisie est une destination idéale pour combiner détente et découverte. Avec ses plages, ses médinas, ses sites antiques comme Carthage et son climat ensoleillé, elle attire des visiteurs du monde entier.",

infos:`
📍 Capitale : Tunis  
👥 Population : ~12 millions  
💰 Monnaie : Dinar tunisien (TND)  
🗣️ Langues : Arabe, Français  
🕌 Religion : Islam (majoritaire)  

☀️ Climat :
- Méditerranéen  
- Étés chauds et secs  
- Hivers doux  

📅 Meilleure période :
✔ Avril à octobre  

✈️ Accès :
- Aéroport de Tunis  
- Très touristique (facile d’accès)  

🍽️ Gastronomie :
- Couscous tunisien  
- Brik  
- Ojja  

🎯 À faire absolument :
- Visiter Carthage  
- Explorer la médina de Tunis  
- Se détendre à Djerba  
- Profiter des plages de Sousse  

⚠️ Conseils :
- Crème solaire indispensable ☀️  
- Zones touristiques très sécurisées  
`
}

};
// ================= AFFICHAGE =================

function showCountry(name){
const c = countries[name];

document.getElementById("info").innerHTML =
"<h2>" + c.name + "</h2>" +
"<img src='" + c.image + "'>" +
"<div class='card'>" + c.desc + "</div>" +
"<div class='card'>" + c.infos + "</div>";
}
