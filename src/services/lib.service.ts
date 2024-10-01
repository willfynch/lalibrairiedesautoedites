import { BookModel } from "@/app/page";
import data from "../mock/data.json";
import { URLS_CONSTANTS } from "@/utils/constants";

export function setHeaders(): HeadersInit {
  const headers = {
    "X-Master-Key": process.env.X_MASTER_KEY!,
    "X-Access-Key": process.env.READONLY_KEY!,
  };
  return headers;
}

//@ts-ignore
export function getAllBooksMock(): BookModel[] {
  return data.books;
}

export async function getAllPoetryBooks() : Promise<Response> {
  const binId = process.env.POETRY_BIN_ID;
  const url = URLS_CONSTANTS.JSON_BIN_URL + binId;

  return fetch(url, {headers: setHeaders()})
}
