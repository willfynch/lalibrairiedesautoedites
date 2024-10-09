

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

export interface CategoryModel {
    label: string;
    name: string;
  }

  export interface NavItemModel {
    label: string;
    type: string;
  }