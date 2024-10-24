import {BookCategoryTabItemModel, NavBarItemModel } from "@/models/models";

export enum URLS_CONSTANTS {
  JSON_BIN_URL = "https://api.jsonbin.io/v3/b/",
  BOOK_SUBMISSION_FORM = "https://tally.so/r/w2vY6j",
  INSTA_URL = "https://www.instagram.com/du_cafe_et_des_rimes/",
  THREADS_URL = "https://www.threads.net/@du_cafe_et_des_rimes",
  SUBSTACK_URL = "https://substack.com/@ducafeetdesrimes",
}
export enum BOOK_TYPES {
  POETRY = "poetry",
  NOVEL = "novel",
  ESSAY = "essay",
  YOUTH = "youth",
  EROTISM = "erotism",
}

export enum METADATA_INFOS {
  TITLE = "La librairie des auto-édité(e)s 🏴‍☠️",
  DESCRIPTION = "Le seul portail du web pour chiner des livres auto-édités ou proposer les vôtres !",
}

export const NAVBAR_ITEMS: NavBarItemModel[] = [
    {
        label: "Accueil",
        value: ""
    },
    {
        label: "Blog",
        value: "blog"
    }
]

export const BOOK_CATEGORIES_TAB_ITEMS: BookCategoryTabItemModel[] = [
  {
    label: "Romans",
    type: BOOK_TYPES.NOVEL,
    selected: true,
  },
  {
    label: "Poésie",
    type: BOOK_TYPES.POETRY,
    selected: false,
  },
  {
    label: "Essais",
    type: BOOK_TYPES.ESSAY,
    selected: false,
  },
  {
    label: "Jeunesse",
    type: BOOK_TYPES.YOUTH,
    selected: false,
  },
  {
    label: "Érotisme",
    type: BOOK_TYPES.EROTISM,
    selected: false,
  },
];

export const ACTIVE_CLASS = "border-primary border-2";
