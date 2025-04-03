import Link from "next/link";
import { EmptySvg } from "../shared";
import { URLS_CONSTANTS } from "@/utils/constants";
import { BookModel } from "@/types";
import BookCard from "./BookCard";

interface BooksContainerProps {
    filteredBooks: BookModel[];
    searchedValue: string;
}

export const BooksContainer = (props: BooksContainerProps) => {
  return (
    <div className="py-10 px-4 md:px-10 mt-10 h-content grid grid-cols-books gap-4 place-content-center">
      {props.filteredBooks.map((book: BookModel, index: number) => {
        return (
          <BookCard
            key={index}
            title={book.title}
            ISBN={book.ISBN}
            author_name={book.author_name}
            year={book.year}
            link={book.link}
            tags={book.tags}
            cover={book.cover}
            catch_phrase={book.catch_phrase}
            id={book.id}
            social_link={book.social_link}
            type={book.type}
          />
        );
      })}
      {props.filteredBooks.length === 0 && (
        <div className="my-8 w-screen px-10 flex flex-col gap-4 justify-center items-center">
          <h2 className="z-30 text-primary-content text-3xl font-bold">
            Chargement...
          </h2>
          <h3 className="z-30 text-primary-content text-md">
            <span className="loading loading-bars loading-lg"></span>
          </h3>
          <div className="w-80 z-20 h-80 flex flex-cols justify-center items-center">
            <EmptySvg />
          </div>
        </div>
      )}
      {props.filteredBooks.length === 0 && props.searchedValue.length > 0 && (
        <div className="my-8 w-screen px-10 flex flex-col gap-4 justify-center items-center">
          <h2 className="z-30 text-primary-content text-3xl font-bold">
            Il n&apos;y a pas encore de livre ici !
          </h2>
          <h3 className="z-30 text-primary-content text-md">
            Vite, vite, on en rajoute dans le formulaire (ou on le partage avec
            ses potos) :
          </h3>
          <Link
            target="_blank"
            href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
            className="btn btn-primary text-neutral z-30"
          >
            Soumettre mon livre
          </Link>
          <div className="w-80 z-20 h-80 flex flex-cols justify-center items-center">
            <EmptySvg />
          </div>
        </div>
      )}
    </div>
  );
};
