document.addEventListener("DOMContentLoaded", () => {
  const mapObject = document.getElementById("map");

  mapObject.addEventListener("load", () => {
    const svgDoc = mapObject.contentDocument;

    const countries = ["maroc", "algerie", "tunisie", "libye", "mauritanie", "egypte"];

    countries.forEach(c => {
      const el = svgDoc.getElementById(c);
      if (!el) return;
      el.style.cursor = "pointer";
      el.addEventListener("click", () => loadCountryData(c));
      el.addEventListener("mouseover", () => el.setAttribute("fill", "#00b4d8"));
      el.addEventListener("mouseout", () => el.setAttribute("fill", "#dcdcdc"));
    });
  });
});

async function loadCountryData(country) {
  const res = await fetch(`data/${country}.json`);
  const data = await res.json();

  document.getElementById("country-name").textContent = data.name;
  document.getElementById("country-description").textContent = data.description;

  const cityList = document.getElementById("city-list");
  cityList.innerHTML = "";
  data.cities.forEach(city => {
    const li = document.createElement("li");
    li.textContent = `${city.name} — ${city.info}`;
    cityList.appendChild(li);
  });

  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = "";
  data.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.alt = data.name;
    gallery.appendChild(image);
  });
}
