import { BookModel } from "@/types";
import { slugify } from "@/utils/slugify";
// import data from "../mock/data.json";

export let allBooks: BookModel[] = [];

// export function getAllBooksMock(): BookModel[] {
//   allBooks = data.books as BookModel[];
//   return data.books;
// }

export async function getAllBooks() : Promise<BookModel[]> {
  try {
    const data = await fetch(process.env.BOOKS_URL!);
    const jsonData = await data.json();
    const books = jsonData.books;
    allBooks = books as BookModel[];
    return books as Promise<BookModel[]>
  }catch(error){
    console.error("Failed to fetch data !", error);
    return [] as unknown as Promise<BookModel[]>
  }
}

export function getOneBook(title:string): BookModel {
  return allBooks.findLast(book=>slugify(book.title) === title) as BookModel;
}


