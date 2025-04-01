import { BookModel } from "@/models/models";
// import data from "../mock/data.json";

// export function getAllBooksMock(): BookModel[] {
//   return data.books;
// }

export async function getAllBooks() : Promise<BookModel[]> {
  try {
    const data = await fetch(process.env.BOOKS_URL!);
    const jsonData = await data.json();
    const books = jsonData.books ;
    return books as Promise<BookModel[]>
  }catch(error){
    console.error("Failed to fetch jsonbin data !", error);
    return [] as unknown as Promise<BookModel[]>
  }
}


