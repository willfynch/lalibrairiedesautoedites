import { BookModel } from "@/types";
import { slugify } from "@/utils/slugify";
// import data from "../mock/data.json";

export let allBooks: BookModel[] = [];

// export function getAllBooksMock(): BookModel[] {
//   return data.books;
// }

export async function getAllBooks() : Promise<BookModel[]> {
  try {
    const data = await fetch(process.env.BOOKS_URL!);
    const jsonData = await data.json();
    const books = jsonData.books;
    allBooks = books as BookModel[];
    console.log("all books", allBooks[0])
    return books as Promise<BookModel[]>
  }catch(error){
    console.error("Failed to fetch data !", error);
    return [] as unknown as Promise<BookModel[]>
  }
}

export function getOneBook(title:string): BookModel {
  return allBooks.filter(book=>slugify(book.title) === title)[0];
}


