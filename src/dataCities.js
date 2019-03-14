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
        kanji: "東京",
        content: [
          `Tokyo est la capitale du Japon. Il y a tellement de choses à faire là-bas, chaque quartier est différent l'un de l'autre.`
        ],
        photosNum: 14
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
        kanji: "大阪",
        content: [
          `Osaka est la 3ème plus grande ville du Japon. A seulement quelques kilomètres de Kyoto, de Kobe et de Nara, elle est l'une des villes les plus attrayantes pour les touristes.`
        ],
        photosNum: 11
      },
      kyoto: {
        path: require("@/assets/cities/kyoto.jpg"),
        kanji: "京都",
        content: [
          `Kyoto est l'ancienne capitale du Japon (avant Tokyo). Contrairement à Tokyo, la ville de Kyoto a gardée une architecture beaucoup plus traditionelle dans encore beaucoup de ces quartiers. C'est aussi dans cette ville que se trouve le quartier de Gion, l'un des derniers repères où l'on peut croiser encore quelques Gaisha japonaises.`
        ],
        photosNum: 10
      },
      hiroshima: {
        path: require("@/assets/cities/hiroshima.jpg"),
        kanji: "広島",
        content: [
          `Hiroshima est tristement célèbre pour avoir été la cible de la 1ère bombe nucléaire jamais lancée dans l'histoire. La ville a été entièrement reconstruite mais garde un lourd souvenir de cette évènement. Les vestiges du batiment ciblé par la bombe ont été gardés et plusieurs monuments voulant rendre hommage aux victimes et à la paix sont visibles dans le centre de la ville.`
        ],
        photosNum: 13
      },
      miyajima: {
        path: require("@/assets/cities/miyajima.jpg"),
        kanji: "宮島",
        content: [
          `Miyajima est l'un des endroits les plus beaux du Japon. C'est une île située à quelques kilomètres de Hiroshima. C'est litéralement un paradis accéssible par ferry où, tout comme à Nara, on peut y croiser des daims en libértés.`
        ],
        photosNum: 25
      },
      nara: {
        path: require("@/assets/cities/nara.jpg"),
        kanji: "奈良",
        content: [
          `Nara est une ville proche de Kyoto. Elle est connu pour son fameux temple Fushimi Inari Taisha et le fait que des daims sauvages soit en libertés dans toute la ville.`
        ],
        photosNum: 4
      },
      matsumoto: {
        path: require("@/assets/cities/matsumoto.jpg"),
        kanji: "松本",
        content: [
          `Situé dans la préfécture de Nagano, Matsumoto abrite un chateau au nom terrifiant de "corbeau noir".`
        ],
        photosNum: 5
      },
      yugawara: {
        path: require("@/assets/cities/yugawara.jpg"),
        kanji: "湯河原",
        content: [
          `Yugawara est une toute petite ville méconnue des touristes. Il y a très peu de choses à faire là bas mais la ville, située près de la mer est tout de même magnifique. Les habitants sur places sont très surpris, et très intrigués lorsqu'ils croisent des étrangers.`
        ],
        photosNum: 6
      },
      nagoya: {
        path: require("@/assets/cities/nagoya.jpg"),
        kanji: "名古屋",
        content: [
          `Nagoya est la 4ème ville la plus peuplée du Japon. C'est là-bas qu'est né le fameux Pachinko, le jeu d'argent le plus populaire au Japon.`
        ],
        photosNum: 7
      }
    }
  }
});

export default dataCities;
