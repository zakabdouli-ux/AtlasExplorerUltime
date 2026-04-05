// ================= CARTE =================
const map = L.map('map').setView([31,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: "© OpenStreetMap & Carto"
}).addTo(map);
// ================= DONNÉES =================
const countries = {

"Maroc":{
name:"Maroc 🇲🇦",
image:"paysage maroc.webp",
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
image:"paysage.webp",
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
image:"paysage tunis.webp",
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
fetch('./countries.geo.json')
  .then(res => res.json())
  .then(data => {

    console.log("GeoJSON chargé :", data); // debug

    L.geoJSON(data, {

      style: function () {
        return {
          color: "#22c55e",
          fillColor: "#22c55e",
          fillOpacity: 0.35,
          weight: 2
        };
      },

      onEachFeature: function (feature, layer) {

        // HOVER
        layer.on("mouseover", function () {
          this.setStyle({ fillOpacity: 0.7 });
        });

        layer.on("mouseout", function () {
          this.setStyle({ fillOpacity: 0.35 });
        });

        // CLICK
        layer.on("click", function () {

          console.log("CLICK PROPERTIES :", feature.properties);

          // récupère le bon nom (robuste)
          const rawName =
            feature.properties.ADMIN ||
            feature.properties.name ||
            feature.properties.NAME ||
            feature.properties.admin;

          // mapping anglais -> français
          const mapping = {
            "Morocco": "Maroc",
            "Algeria": "Algérie",
            "Tunisia": "Tunisie"
          };

          const name = mapping[rawName];

          if (name) {
            showCountry(name);
          } else {
            console.log("Pays non reconnu :", rawName);
          }

        });

      }

    }).addTo(map);

  })
  .catch(err => {
    console.error("Erreur GeoJSON :", err);
  });
// ================= VILLES =================

// données des villes
const cityData = {

"Marrakech":{
image:"marrakech.webp",
desc:"Marrakech est une ville emblématique du Maroc, connue pour ses souks, ses palais et sa place Jemaa el-Fna."
},

"Fès":{
image:"meknes.webp",
desc:"Fès est une ville historique avec une médina classée à l’UNESCO."
},

"Alger":{
image:"paysage alger.webp",
desc:"Alger est une capitale méditerranéenne avec une riche histoire."
},

"Oran":{
image:"oran.webp",
desc:"Oran est une ville dynamique connue pour la musique raï."
},

"Tunis":{
image:"paysage tunisie.webp",
desc:"Tunis est une capitale historique proche de Carthage."
},

"Djerba":{
image:"djerba.webp",
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
