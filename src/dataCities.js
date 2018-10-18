import Vue from "vue";

const dataCities = new Vue({
  data: {
    cities: {
      yokohama: {
        path: require("@/assets/cities/yokohama.jpg"),
        kanji: "横浜",
        content: [
          "Yokohama, située à environ 30 minutes en train de la capitale Tokyo, est la 2ème ville la plus peuplé du Japon dérrière Tokyo. La ville est principalement connue pour son port, mais également pour son quartier chinois, le plus grand d'Asie."
        ],
        photosNum: 8
      },
      tokyo: {
        path: require("@/assets/cities/tokyo.jpg"),
        kanji: "東京"
      },
      hakuba: {
        path: require("@/assets/cities/hakuba.jpg"),
        kanji: "白馬",
        content: [
            `Hakuba est un petit village de 8 700 habitants situé dans la région
            montagneuse de Chūbu, au centre du Japon. Situé au coeur des
            alpes japonaise, le village est plutôt isolé et la ville la plus
            proche, Nagano, se trouve à 1h de bus. Le village est
            cependant une station de ski mondialement reconnu
            avec pas moins de 10 stations et plus de 200 pistes.
            Le village s’est notamment fait connaître en 1998
            lors des Jeux Olympiques d’hivers de Nagano
            durant lesquelles Hakuba à accueilli certaines
            des épreuves les plus populaires des J.O
            d’hivers comme le saut à ski ou encore le
            combiné nordique.`
        ],
        photosNum: 3
      },
      takayama: {
        path: require("@/assets/cities/takayama.jpg"),
        kanji: "高山",
        content: [
            `Takayama est un ville située en plein milieu de la préfécture de Gifu. C'est un endroit assez reposant car situé près de la campagne, même si la ville reste tout de même
            très touristique. Et pour cause, elle abrite de nombreux temples historique et des maisons à l'architecture typiquement japonaise. La ville est d'ailleur surnommée la "petite Kyoto".`
        ],
        photosNum: 21
      },
      kobe: {
        path: require("@/assets/cities/kobe.jpg"),
        kanji: "神戸",
        content: [
            `Kobe est l'une des principales villes du Japon. Elle se situe dans la fameuse région du Kansai, à environ 30 minutes en train d'Osaka. Comme Yokohama, elle possède un très grand
            port et un quarier chinois. Mais Kobe est surtout connue dans le monde pour son boeuf.`
        ],
        photosNum: 17
      },
      osaka: {
        path: require("@/assets/cities/osaka.jpg"),
        kanji: "大阪"
      },
      kyoto: {
        path: require("@/assets/cities/kyoto.jpg"),
        kanji: "京都"
      },
      hiroshima: {
        path: require("@/assets/cities/hiroshima.jpg"),
        kanji: "広島"
      },
      miyajima: {
        path: require("@/assets/cities/miyajima.jpg"),
        kanji: "宮島"
      },
      nara: {
        path: require("@/assets/cities/nara.jpg"),
        kanji: "奈良"
      },
      matsumoto: {
        path: require("@/assets/cities/matsumoto.jpg"),
        kanji: "松本"
      },
      yugawara: {
        path: require("@/assets/cities/yugawara.jpg"),
        kanji: "湯河原"
      },
      nagoya: {
        path: require("@/assets/cities/nagoya.jpg"),
        kanji: "名古屋"
      }
    }
  }
});

export default dataCities;
