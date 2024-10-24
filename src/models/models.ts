

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

  