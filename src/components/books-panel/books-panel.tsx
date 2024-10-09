"use client";
import { BookModel } from "@/models/models";
import { URLS_CONSTANTS } from "@/utils/constants";
import BookCard from "../book-card/book-card";
import EmptySvg from "../svgs/empty";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function BooksPanel(props: { books: BookModel[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("type");
  const [displayedBooks, setDisplayedBooks] = useState<BookModel[]>(
    props.books
  );
  const [filteredDisplayedBooks, setFilteredDisplayedBooks] = useState<
    BookModel[]
  >([]);
  const [searchedValue, setSearchedValue] = useState("");

  function filterBooksByType(type: string) {
    const booksFilteredByType = props.books.filter(
      (book) => book.type === type
    );
    setDisplayedBooks(booksFilteredByType);
    setFilteredDisplayedBooks(booksFilteredByType);
  }

  function resetFilteredBooks() {
    setFilteredDisplayedBooks(displayedBooks);
  }

  function filterBooksBySearchedString(e: ChangeEvent<HTMLInputElement>) {
    const searchedValue = e.target.value.toString().toLowerCase();
    if (!searchedValue) {
      setSearchedValue("");
      resetFilteredBooks();
      return;
    }
    setSearchedValue(searchedValue);
    const futureDisplayedBooks = displayedBooks.filter(
      (book: BookModel) =>
        book.title.toLowerCase().includes(searchedValue) ||
        book.author_name.toLowerCase().includes(searchedValue) ||
        book.catch_phrase.toLowerCase().includes(searchedValue) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchedValue))
    );
    setFilteredDisplayedBooks(futureDisplayedBooks);
  }

  useEffect(() => {
    filterBooksByType("novel");
  }, []);

  useEffect(() => {
    if (!query) return;
    filterBooksByType(query);
  }, [query]);

  return (
    <div className="py-10 overflow-x-hidden">
      <div
        className="hero min-h-screen/50"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold text-base-100">
              La librairie des auto-édité(e)s{" "}
            </h1>
            <p className="mb-5 text-base-100">
              Pour les hors-pistes de l&apos;édition. Les pirates du verbe. 🏴‍☠️
              <br />
              <small>
                Un projet{" "}
                <a
                  className="link font-semibold"
                  role="link"
                  target="_blank"
                  href="https://ducafeetdesrimes.com"
                >
                  @ducaféetdesrimes
                </a>
              </small>
            </p>
            <div
              className="tooltip tooltip-primary tooltip-bottom"
              data-tip="Ouvrir le formulaire"
            >
              <a
                target="_blank"
                href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
                className="btn btn-primary"
              >
                Soumettre mon livre
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-10 py-4 m-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => filterBooksBySearchedString(e)}
            type="text"
            className="grow"
            placeholder="Chercher un livre par titre, auteurice, thématique..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="px-4 md:px-10 h-content grid grid-cols-books gap-4 place-content-center">
        {filteredDisplayedBooks.map((book: BookModel, index: number) => {
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
        {filteredDisplayedBooks.length === 0 && searchedValue.length === 0 && (
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
        {filteredDisplayedBooks.length === 0 && searchedValue.length > 0 && (
          <div className="my-8 w-screen px-10 flex flex-col gap-4 justify-center items-center">
            <h2 className="z-30 text-primary-content text-3xl font-bold">
              Il n&apos;y a pas encore de livre ici !
            </h2>
            <h3 className="z-30 text-primary-content text-md">
            Vite, vite, on en rajoute dans le formulaire (ou on le partage avec ses potos) :
            </h3>
            <a
              target="_blank"
              href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
              className="btn btn-primary z-30"
            >
              Soumettre mon livre
            </a>
            <div className="w-80 z-20 h-80 flex flex-cols justify-center items-center">
              <EmptySvg />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BooksPanel;
