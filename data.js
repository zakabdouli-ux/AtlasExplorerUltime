// data.js — Contient toutes les données touristiques du Maghreb

const MAGHREB_DATA = {
  maroc: {
    name: "Maroc",
    description:
      "Entre montagnes, déserts et plages, le Maroc offre une richesse naturelle et culturelle exceptionnelle.",
    cities: [
      { name: "Marrakech", info: "Ville impériale célèbre pour sa médina et la place Jemaa El-Fna." },
      { name: "Fès", info: "Ancienne capitale culturelle, connue pour sa médina classée à l'UNESCO." },
      { name: "Casablanca", info: "Grande métropole moderne et centre économique du pays." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1519074002996-a69e7ac46a42)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1533655439480-2d428af23d34)"
    ]
  },

  algerie: {
    name: "Algérie",
    description:
      "L’Algérie, plus grand pays d’Afrique, mêle dunes du Sahara, montagnes, et richesse historique méditerranéenne.",
    cities: [
      { name: "Alger", info: "Capitale blanche sur la Méditerranée." },
      { name: "Oran", info: "Ville côtière dynamique et musicale." },
      { name: "Constantine", info: "Ville suspendue surnommée la ville des ponts." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1620927417997-0c52a5ea0745)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1620172049181-39eaf8b82b46)"
    ]
  },

  tunisie: {
    name: "Tunisie",
    description:
      "Soleil, histoire et hospitalité : la Tunisie charme par ses plages, ses ruines antiques et sa culture méditerranéenne.",
    cities: [
      { name: "Tunis", info: "Capitale aux influences arabes et andalouses." },
      { name: "Sousse", info: "Station balnéaire populaire au bord du Sahel." },
      { name: "Djerba", info: "Île paisible connue pour ses plages et son artisanat." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1579165460028-585a972b6553)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1620222039390-859c45312db3)"
    ]
  },

  libye: {
    name: "Libye",
    description:
      "La Libye offre des paysages désertiques spectaculaires et un riche patrimoine gréco-romain.",
    cities: [
      { name: "Tripoli", info: "Capitale sur la Méditerranée avec un port historique." },
      { name: "Benghazi", info: "Ville côtière de Cyrénaïque." },
      { name: "Ghadamès", info: "Perle du désert inscrite à l’UNESCO." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1573497491208-6b1acb260507)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1619441096425-8b4923df51ef)"
    ]
  },

  mauritanie: {
    name: "Mauritanie",
    description:
      "Des dunes de l’Adrar à la ville bleue de Chinguetti, la Mauritanie séduit les aventuriers du désert.",
    cities: [
      { name: "Nouakchott", info: "Capitale sur l’océan Atlantique." },
      { name: "Atar", info: "Porte du désert du Sahara." },
      { name: "Chinguetti", info: "Ancienne cité caravanière classée à l’UNESCO." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1594123494540-933c0354c1ce)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1611095565733-d7f68960f58a)"
    ]
  },

  egypte: {
    name: "Égypte",
    description:
      "Terre des pharaons et du Nil, l’Égypte fascine par son histoire millénaire et ses paysages majestueux.",
    cities: [
      { name: "Le Caire", info: "Capitale vibrante dominée par les pyramides de Gizeh." },
      { name: "Louxor", info: "Musée à ciel ouvert au bord du Nil." },
      { name: "Alexandrie", info: "Ville antique fondée par Alexandre le Grand." }
    ],
    images: [
      "[images.unsplash.com](https://images.unsplash.com/photo-1605032659338-5d3b07eda7cf)",
      "[images.unsplash.com](https://images.unsplash.com/photo-1588011939077-a14e5d1b044f)"
    ]
  }
};

