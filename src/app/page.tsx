import BooksPanel from "@/components/books/books-panel/books-panel";
import { BookModel } from "@/models/models";
import { getAllBooks } from "@/services/lib.service";
import { Suspense  } from "react";
import type { Metadata } from 'next'
import { METADATA_INFOS } from "@/utils/constants";
import { calculateMetadata } from "@/utils/calculateMetadata";

export const metadata: Metadata = calculateMetadata(METADATA_INFOS.TITLE, '/','images/og.webp')

export default async function Home() {

  let books: BookModel[] = [];
  books = await getAllBooks();

  return (
    <Suspense>
      <BooksPanel books={books}/>
    </Suspense>
  );
}
