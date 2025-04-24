import { OneBookContainer } from "@/components/books/OneBookContainer";
import {
  getAllBooks,
  getOneBook,
} from "@/services/lib.service";
import { BookModel } from "@/types";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { slugify } from "@/utils/slugify";
import { Metadata } from "next";


export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({ title: slugify(book.title) }));
}
export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const title = params.title;
  const book = getOneBook(title);
  return calculateMetadata(
    book?.title ?? "Pas de titre",
    `/livre/${book?.title}`,
    book?.cover as string,
    book?.catch_phrase.slice(0, 100) + "..."
  );
}
const OneBookPage = async ({ params }: { params: { title: string } }) => {
  const { title } = params;
  const book: BookModel | undefined = getOneBook(title);

  return <OneBookContainer book={book} />;
};

export default OneBookPage;
