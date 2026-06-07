# 🌍 Atlas Explorer — Exploration Interactive du Maghreb

## 👥 Réalisé par

**Zak Abdouli & Bouchaib Maach & Ali El Sheikh Ali**

---

## 🎯 Objectif du projet

Atlas Explorer est une application web interactive permettant de découvrir les principaux pays du Maghreb ainsi que leurs grandes villes à travers une carte dynamique.

Le projet a pour objectif de proposer une expérience immersive mêlant géographie, culture, tourisme et développement web moderne à travers une interface intuitive et interactive.

---

## 🧠 Concept

L’utilisateur peut interagir directement avec une carte du Maghreb :

* 🗺️ Cliquer sur un pays pour afficher ses informations générales
* 📍 Cliquer sur une ville pour découvrir une description détaillée
* 🖼️ Visualiser des images représentatives de chaque lieu
* 🔍 Naviguer facilement grâce à une carte fluide et interactive
* 📊 Consulter des statistiques générées à partir des données saisies
* 📁 Exporter les données collectées
* 🔐 Utiliser un générateur de mot de passe intégré

---

## 🚀 Fonctionnalités principales

### 🌍 Carte interactive

* Intégration de la bibliothèque Leaflet
* Fond de carte en mode sombre (Dark Mode)
* Chargement des frontières réelles via GeoJSON
* Navigation fluide et intuitive

### 🏳️ Pays cliquables

Pays disponibles :

* Maroc 🇲🇦
* Algérie 🇩🇿
* Tunisie 🇹🇳

Chaque pays affiche :

* Informations générales
* Capitale
* Population
* Langues
* Climat
* Conseils touristiques
* Image représentative

### 🏙️ Villes interactives

Villes disponibles :

* Marrakech
* Fès
* Alger
* Oran
* Tunis
* Djerba

Chaque ville propose :

* Une description détaillée
* Une image immersive
* Un zoom automatique sur la carte
* L’affichage du pays associé

---

## 📝 Formulaire interactif

L’utilisateur peut proposer une nouvelle destination touristique.

Fonctionnalités :

* Validation des champs obligatoires
* Vérification de la longueur minimale de la description
* Messages d’erreur et de confirmation dynamiques
* Manipulation du DOM en JavaScript

Les données sont stockées dans une structure JavaScript sous forme de tableau.

---

## 📊 Visualisation des données

Utilisation de la bibliothèque **Chart.js**.

Le graphique affiche :

* Le nombre de suggestions enregistrées par pays
* Une mise à jour automatique après chaque envoi du formulaire

Les données sont conservées grâce au **localStorage** du navigateur.

---

## 📁 Export des données

Utilisation de la bibliothèque **SheetJS**.

Fonctionnalités :

* Export des suggestions au format Excel (.xlsx)
* Génération automatique du fichier
* Téléchargement direct depuis l’interface

---

## 🔐 Générateur de mot de passe

Fonctionnalités :

* Longueur personnalisable
* Inclusion des chiffres
* Inclusion des caractères spéciaux
* Génération aléatoire instantanée

---

## 🎨 Design et expérience utilisateur

* Interface moderne en mode sombre
* Sidebar dynamique
* Effets visuels (hover, zoom, transitions)
* Mise en page responsive
* Navigation intuitive

---

## 🛠️ Technologies utilisées

* HTML5 → Structure du site
* CSS3 → Design et mise en page
* JavaScript → Logique et interactions
* Leaflet.js → Carte interactive
* GeoJSON → Frontières géographiques
* Chart.js → Graphiques statistiques
* SheetJS → Export Excel
* LocalStorage → Sauvegarde locale des données

---

## 📁 Structure du projet

AtlasExplorer/

├── index.html
├── script.js
├── countries.geojson
├── README.md
├── images/

│ ├── paysage.webp
│ ├── paysage maroc.webp
│ ├── paysage tunis.webp
│ ├── marrakech.webp
│ ├── fes.webp
│ ├── alger.webp
│ ├── oran.webp
│ ├── tunis.webp
│ ├── djerba.webp

---

## ⚙️ Déploiement

Le projet est hébergé grâce à **GitHub Pages**.

Étapes réalisées :

1. Création du dépôt GitHub
2. Développement du site
3. Ajout des ressources (images, GeoJSON)
4. Publication avec GitHub Pages
5. Mise en ligne automatique

---

## 💡 Difficultés rencontrées

* Gestion des frontières GeoJSON
* Correspondance entre les noms des pays et les données JavaScript
* Gestion des images
* Débogage JavaScript
* Mise à jour GitHub Pages
* Conservation des données utilisateur

---

## 🧪 Solutions apportées

* Utilisation d’un fichier GeoJSON fiable
* Mapping des noms de pays
* Utilisation de la console JavaScript pour le débogage
* Intégration du localStorage
* Organisation claire des données
* Optimisation progressive de l’interface

---

## 🔥 Améliorations possibles

* Ajout d’autres pays du Maghreb
* Ajout de filtres touristiques
* Version mobile avancée
* Intégration d’API touristiques
* Système de favoris
* Recherche multicritère

---

## 🏁 Conclusion

Atlas Explorer est un projet complet combinant :

* Développement web
* Cartographie interactive
* Manipulation du DOM
* Gestion de formulaires
* Visualisation de données
* Export de fichiers
* Algorithmes JavaScript

Ce projet met en œuvre l’ensemble des notions étudiées en développement web tout en proposant une expérience utilisateur moderne et interactive.

💎 Projet réalisé par Zak Abdouli et Bouchaib Maach et Ali El Sheikh Ali dans le cadre d’un projet de développement web.
