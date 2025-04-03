import matter from "gray-matter";
import { StaticImageData } from "next/image";
import { BlogArticleCategory, BookCategory } from "./commons";


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
    type: BookCategory;
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
    category: BlogArticleCategory;
}

export interface BlogArticleAuthorModel {
  author_name: string;
  author_pic: string | StaticImageData;
  author_description: string;
  author_link: string;
  author_title: string;
}


export type MatterResult = ReturnType<typeof matter>;

export type InstaFeed = {
  posts: InstaCard[],
  account: InstaAccount;
};
export type InstaAccount ={
  link: string;
  name: string;
}
export interface InstaCard {
  image: string | StaticImageData;
  link: string;
  alt: string;
}
