const map = L.map('map').setView([30,5],5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// ================= DATA =================
const countries = {
"Morocco":{
center:[31.5,-7],
zoom:6,
name:"Maroc 🇲🇦",
image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
desc:"Destination riche entre désert, montagnes et villes impériales."
},
"Algeria":{
center:[28,2],
zoom:5,
name:"Algérie 🇩🇿",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
desc:"Pays immense entre mer et Sahara."
},
"Tunisia":{
center:[34,10],
zoom:6,
name:"Tunisie 🇹🇳",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
desc:"Plages, culture et soleil."
}
};

// ================= FRONTIÈRES LOCALES =================
fetch('./countries.geojson')
.then(response => {
    if (!response.ok) {
        throw new Error("Erreur chargement GeoJSON");
    }
    return response.json();
})
.then(data => {

    L.geoJSON(data, {
        style: {
            color: "#22c55e",
            fillColor: "#22c55e",
            fillOpacity: 0.4
        },
        onEachFeature: (feature, layer) => {

            layer.on("mouseover", () => layer.setStyle({ fillOpacity: 0.8 }));
            layer.on("mouseout", () => layer.setStyle({ fillOpacity: 0.4 }));

            layer.on("click", () => {
                showCountry(feature.properties.ADMIN);
            });
        }
    }).addTo(map);

})
.catch(error => {
    console.error("Erreur GeoJSON :", error);
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
