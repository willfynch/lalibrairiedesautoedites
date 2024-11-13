import matter from "gray-matter";
import { StaticImageData } from "next/image";


export interface BookModel {
    title: string;
    ISBN: string;
    author_name: string;
    year: number;
    link: string;
    tags: string[];
    cover: string;
    catch_phrase: string;
    id: string;
    social_link?: string;
    type: string;
}

  export interface BookCategoryTabItemModel {
    label: string;
    type: string;
    selected?:boolean;
  }

  export interface NavBarItemModel {
    label: string;
    value: string;
  }

  export interface BlogArticleModel {
    slug: string;
    title: string;
    content: string;
    tags: string[];
    cover: string | StaticImageData | undefined;
    date: string;
    author: BlogArticleAuthorModel;
    category: BlogArticleCategoryType;
}

export interface BlogArticleAuthorModel {
  author_name: string;
  author_pic: string | StaticImageData;
  author_description: string;
  author_link: string;
  author_title: string;
}

export type BlogArticleCategoryType = 'auto-édition' | 'écriture' | 'promotion'

export type MatterResult = ReturnType<typeof matter>;