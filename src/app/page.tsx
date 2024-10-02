import BooksPanel from "@/components/books-panel/books-panel";
import { BookModel } from "@/models/models";
import { getAllBooks } from "@/services/lib.service";
import { Suspense  } from "react";

export default async function Home() {

  let books: BookModel[] = [];
  books = await getAllBooks();

  return (
    <Suspense>
      <BooksPanel books={books}/>
    </Suspense>
  );
}
