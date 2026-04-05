# 🌍 Atlas Explorer — Exploration Interactive du Maghreb

## 👥 Réalisé par

**Zak & Bouchaib**

---

## 🎯 Objectif du projet

Atlas Explorer est une application web interactive permettant de découvrir les principaux pays du Maghreb ainsi que leurs grandes villes à travers une carte dynamique.
Le projet a pour objectif de proposer une expérience immersive mêlant géographie, culture et tourisme à travers une interface moderne et intuitive.

---

## 🧠 Concept

L’utilisateur peut interagir directement avec une carte du Maghreb :

* 🗺️ Cliquer sur un **pays** pour afficher ses informations générales
* 📍 Cliquer sur une **ville** pour découvrir une description détaillée
* 🖼️ Visualiser des images représentatives de chaque lieu
* 🔍 Naviguer facilement grâce à une carte fluide et interactive

---

## 🚀 Fonctionnalités principales

### 🌍 Carte interactive

* Intégration de la bibliothèque **Leaflet**
* Affichage d’un fond de carte en mode sombre (design moderne)
* Chargement de **frontières réelles via GeoJSON**

### 🏳️ Pays cliquables

* Maroc 🇲🇦
* Algérie 🇩🇿
* Tunisie 🇹🇳

Chaque pays affiche :

* Informations générales (capitale, langue, climat, etc.)
* Description touristique détaillée
* Image représentative

---

### 🏙️ Villes interactives

Exemples :

* Marrakech
* Fès
* Alger
* Oran
* Tunis
* Djerba

Chaque ville propose :

* Une description approfondie
* Une image immersive
* Un recentrage automatique de la carte (zoom)

---

### 🎨 Design et expérience utilisateur

* Interface sombre moderne (dark mode)
* Effets visuels (hover, zoom, transitions)
* Sidebar dynamique avec affichage des informations
* Design inspiré des applications professionnelles

---

## 🛠️ Technologies utilisées

* **HTML** → structure du site
* **CSS** → design et mise en page
* **JavaScript** → logique et interactions
* **Leaflet.js** → carte interactive
* **GeoJSON** → frontières réelles des pays

---

## 📁 Structure du projet

```
AtlasExplorer/
│
├── index.html
├── script.js
├── countries.geojson
├── images/
│   ├── morocco.webp
│   ├── algeria.webp
│   ├── tunisia.webp
│   ├── marrakech.webp
│   ├── fes.webp
│   ├── alger.webp
│   ├── oran.webp
│   ├── tunis.webp
│   ├── djerba.webp
│   └── ...
```

---

## ⚙️ Déploiement

Le projet est hébergé via **GitHub Pages**.

### Étapes :

1. Création du repository GitHub
2. Ajout des fichiers (HTML, CSS, JS, GeoJSON, images)
3. Activation de GitHub Pages
4. Mise en ligne automatique du site

---

## 💡 Difficultés rencontrées

* Gestion des **frontières précises (GeoJSON)**
* Problèmes de **chargement des fichiers sur GitHub**
* Correspondance des noms entre GeoJSON et données JavaScript
* Gestion des chemins pour les images
* Optimisation de l’affichage de la carte

---

## 🧪 Solutions apportées

* Utilisation d’un fichier GeoJSON fiable
* Mapping des noms anglais → français
* Organisation claire des fichiers
* Tests et debug avec console JavaScript
* Amélioration progressive du design et des interactions

---

## 🔥 Améliorations possibles

* Ajout d’autres pays (Égypte, Libye, Mauritanie…)
* Système de filtres (culture, plage, désert…)
* Animations avancées
* Version mobile optimisée
* Intégration d’API tourisme

---

## 🏁 Conclusion

Atlas Explorer est un projet complet combinant :

* développement web
* cartographie interactive
* expérience utilisateur

Il met en avant une approche progressive de création d’une application web moderne, avec des fonctionnalités proches de solutions professionnelles.

---

💎 **Projet réalisé avec ambition pour atteindre un rendu professionnel.**

