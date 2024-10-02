
import { BookModel } from "@/models/models";
// import data from "../mock/data.json";
import { URLS_CONSTANTS } from "@/utils/constants";

export function setHeaders(): HeadersInit {
  const headers = {
    "X-Master-Key": process.env.X_MASTER_KEY!,
    "X-Access-Key": process.env.READONLY_KEY!,
  };
  return headers;
}

// export function getAllBooksMock(): BookModel[] {
//   return data.books;
// }

export async function getAllBooks() : Promise<BookModel[]> {
  const binId = process.env.POETRY_BIN_ID;
  const url = URLS_CONSTANTS.JSON_BIN_URL + binId;
  const data = await fetch(url, {headers: setHeaders()});
  const jsonData = await data.json();
  const books = jsonData.record.books ;
  return books as Promise<BookModel[]>
}
