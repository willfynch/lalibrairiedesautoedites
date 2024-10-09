import BooksPanel from "@/components/books-panel/books-panel";
import { BookModel } from "@/models/models";
import { getAllBooks } from "@/services/lib.service";
import { Suspense  } from "react";
import type { Metadata } from 'next'
import { METADATA_INFOS } from "@/utils/constants";

export const metadata: Metadata = {
  title: METADATA_INFOS.TITLE,
  description: METADATA_INFOS.DESCRIPTION,
  keywords: ['auto-édition', 'livres auto-édités', 'librairie pour auto-édités'],
  metadataBase: new URL('https://la-librairie-des-autoedites.ducafeetdesrimes.com'),
  openGraph: {
    images: ['/images/og.webp']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og.webp'],
    description: METADATA_INFOS.DESCRIPTION,
    title: METADATA_INFOS.TITLE
  },
}

export default async function Home() {

  let books: BookModel[] = [];
  books = await getAllBooks();

  return (
    <Suspense>
      <BooksPanel books={books}/>
    </Suspense>
  );
}
