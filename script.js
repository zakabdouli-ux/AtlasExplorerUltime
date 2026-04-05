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
desc:"Marrakech est l’une des destinations les plus emblématiques du Maroc et sans doute l’une des villes les plus fascinantes d’Afrique du Nord. Surnommée la ville rouge, elle séduit immédiatement par ses couleurs chaudes, son ambiance vibrante et son patrimoine exceptionnel. Son cœur historique, la médina, est un véritable labyrinthe de ruelles animées où se mêlent artisans, marchands, senteurs d’épices et architecture traditionnelle. La célèbre place Jemaa el-Fna constitue le centre névralgique de la ville, animée du matin jusqu’à la nuit par des artistes de rue, des conteurs et une cuisine locale riche et variée. Marrakech est également réputée pour ses palais, ses jardins comme le Jardin Majorelle, et ses riads traditionnels. C’est une destination idéale pour vivre une expérience sensorielle complète entre culture, gastronomie et dépaysement."
},

"Fès":{
image:"meknes.webp",
desc:"Fès est l’une des plus anciennes villes impériales du Maroc et un véritable trésor culturel. Elle est particulièrement connue pour sa médina, Fès el-Bali, classée au patrimoine mondial de l’UNESCO, qui constitue l’une des plus grandes zones piétonnes du monde. En parcourant ses ruelles étroites, le visiteur découvre un univers authentique où le temps semble suspendu : ateliers d’artisans, mosquées, médersas et marchés traditionnels se succèdent dans une atmosphère unique. La ville est également réputée pour ses tanneries emblématiques et son savoir-faire artisanal. Fès offre une immersion profonde dans l’histoire et les traditions marocaines, ce qui en fait une destination incontournable pour les passionnés de culture et de patrimoine."
},

"Alger":{
image:"paysage alger.webp",
desc:"Alger, capitale de l’Algérie, est une ville qui domine majestueusement la mer Méditerranée. Surnommée Alger la Blanche en raison de ses façades claires qui reflètent la lumière, elle offre un paysage urbain spectaculaire entre collines et littoral. Son quartier le plus emblématique, la Casbah, classé au patrimoine mondial de l’UNESCO, est un dédale de ruelles historiques où l’on découvre l’architecture traditionnelle et l’histoire riche de la ville. Alger est également marquée par son héritage colonial visible dans ses bâtiments et ses grandes avenues. Entre modernité et tradition, elle propose une expérience urbaine complète mêlant culture, histoire et vues panoramiques sur la mer."
},

"Oran":{
image:"oran.webp",
desc:"Oran est une grande ville côtière dynamique et moderne, connue pour son ambiance vivante et son importance culturelle. Située à l’ouest de l’Algérie, elle est fortement liée à la musique raï, qui a contribué à sa renommée internationale. Oran offre un mélange intéressant entre architecture historique, quartiers modernes et front de mer animé. La ville est réputée pour son ouverture, sa convivialité et son énergie, ce qui en fait une destination attractive pour les voyageurs en quête d’une expérience urbaine différente. Son littoral et ses points de vue sur la mer Méditerranée renforcent encore son attrait touristique."
},

"Tunis":{
image:"paysage tunisie.webp",
desc:"Tunis est une capitale qui allie parfaitement modernité et patrimoine historique. Sa médina, classée au patrimoine mondial de l’UNESCO, est un lieu incontournable pour découvrir l’architecture traditionnelle, les souks et l’ambiance authentique de la ville. À côté de cette richesse historique, Tunis offre également des quartiers modernes, des avenues animées et une vie culturelle dynamique. Sa situation géographique permet de visiter facilement des sites majeurs comme Carthage ou le village de Sidi Bou Saïd. Tunis constitue ainsi une destination idéale pour un séjour équilibré entre découverte culturelle, vie urbaine et proximité avec la mer."
},

"Djerba":{
image:"djerba.webp",
desc:"Djerba est une île réputée pour son cadre paisible, ses plages et son climat agréable. C’est l’une des destinations touristiques les plus prisées de Tunisie, notamment pour les séjours balnéaires. L’île se distingue par son atmosphère calme, ses paysages lumineux et son architecture typique. Elle offre un parfait équilibre entre détente et découverte, avec ses marchés locaux, ses villages traditionnels et ses sites culturels. Djerba est idéale pour les voyageurs qui recherchent le repos, le soleil et une ambiance plus douce que dans les grandes villes."
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
