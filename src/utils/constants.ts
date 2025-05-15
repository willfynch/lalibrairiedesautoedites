import {
  BookCategoryTabItemModel,
  InstaFeed,
  NavBarItemModel,
} from "@/types/models";
import insta1 from "../../public/images/instafeed/insta1.webp";
import insta2 from "../../public/images/instafeed/insta2.webp";
import insta6 from "../../public/images/instafeed/insta6.webp";
import insta7 from "../../public/images/instafeed/insta7.webp";
import insta8 from "../../public/images/instafeed/insta8.webp";
import insta9 from "../../public/images/instafeed/insta9.webp";

export enum URLS_CONSTANTS {
  BOOK_SUBMISSION_FORM = "https://tally.so/r/w2vY6j",
  INSTA_URL = "https://www.instagram.com/librairiedesautoedites/",
  INSTA_MY_URL = "https://www.instagram.com/du_cafe_et_des_rimes/",
  THREADS_URL = "https://www.threads.net/@du_cafe_et_des_rimes",
  SUBSTACK_URL = "https://substack.com/@ducafeetdesrimes",
  WEBSITE_URL = "https://ducafeetdesrimes.com",
}

export enum METADATA_INFOS {
  TITLE = "La librairie des auto-édité(e)s 🏴‍☠️",
  DESCRIPTION = "Le meilleur portail du web pour chiner des livres auto-édités ou proposer les vôtres !",
  BASE_URL = "https://la-librairie-des-autoedites.ducafeetdesrimes.com",
}
export const METADATA_KEYWORDS = [
  "auto-édition",
  "auteurs auto-édités",
  "autrices auto-éditées",
  "librairie auto-édités",
  "livres auto-édités",
  "auto-publication",
  "auteurs indépendants",
  "autrices indépendantes",
  "littérature indépendante",
  "écrivains auto-édités",
  "découverte livres",
  "pirates de l'édition",
  "perles auto-édition",
  "portail auto-édition",
  "auteurs émergents",
  "librairie indépendante",
  "communauté auto-édition",
  "promotion auteurs auto-édités",
  "livres indépendants",
  "écriture indépendante",
  "pirates du verbe",
  "librairie autoédités",
  "librairie pour auteurs autoédités",
  "librairie pour les autoédités",
];
export const NAVBAR_ITEMS: NavBarItemModel[] = [
  {
    label: "Accueil",
    value: "",
  },
  {
    label: "Blog",
    value: "blog",
  },
  {
    label: "Portail auto-édition",
    value: "portail-ae",
  },
  {
    label: "À propos",
    value: "a-propos",
  },
];

export const BOOK_CATEGORIES_TAB_ITEMS: BookCategoryTabItemModel[] = [
  {
    label: "Romans",
    type: "novel",
  },
  {
    label: "Poésie",
    type: "poetry",
  },
  {
    label: "Essais",
    type: "essay",
  },
  {
    label: "Jeunesse",
    type: "youth",
  },
  {
    label: "Humour",
    type: "humour",
  },
  {
    label: "+18",
    type: "erotism",
  },
];

export const ACTIVE_CLASS = "border-primary border-[1px]";

export enum COOKIE_CONSENT {
  GRANTED = "granted",
  DENIED = "denied",
}

export const INSTAFEED: InstaFeed = {
  account: {
    name: "portailautoedition",
    link: "https://www.instagram.com/portailautoedition/",
  },
  posts: [
    {
      image: insta1,
      link: "https://www.instagram.com/p/DADO4GgNBuG/",
      alt: "Projet Pandore : Science-fiction, paranormal",
    },
    {
      image: insta2,
      link: "https://www.instagram.com/p/DAA_xootUZK/",
      alt: "Alfur SÖgur : heroic fantasy",
    },
    {
      image: insta6,
      link: "https://www.instagram.com/p/DAJf9INtZDq/",
      alt: "Le bruit des anges : roman",
    },
    {
      image: insta7,
      link: "https://www.instagram.com/p/C__E15mNRmm/",
      alt: "Let's dance : romance fantastique",
    },
    {
      image: insta8,
      link: "https://www.instagram.com/p/C_sS0n9t8_6/",
      alt: "Podcast : dédicacer en librairie",
    },
    {
      image: insta9,
      link: "https://www.instagram.com/p/DAd_jtZNGVq/",
      alt: "Concours des parutions trimestrielles",
    },
  ],
};
