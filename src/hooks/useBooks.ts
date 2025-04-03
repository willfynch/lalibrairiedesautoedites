import { BookCategory } from "@/types";
import { BookModel } from "@/types/models";
import { Dispatch, SetStateAction, useState } from "react";

export interface UseBooks {
  allBooks: BookModel[];
  setAllBooks: Dispatch<SetStateAction<BookModel[]>>;
  filteredBooks: BookModel[];
  filterBooks: (type: BookCategory, searchedValue: string) => void;
  bookCategory: BookCategory;
  setBookCategory: Dispatch<SetStateAction<BookCategory>>;
}

export const useBooks = (books: BookModel[]): UseBooks => {
  const [allBooks, setAllBooks] = useState<BookModel[]>(books);
  const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([]);
  const [bookCategory, setBookCategory] = useState<BookCategory>("novel");

  const filterBooksBySearchedValue = (
    books: BookModel[],
    searchedValue: string
  ) => {
    return books.filter(
      (book: BookModel) =>
        book.title.toLowerCase().includes(searchedValue) ||
        book.author_name.toLowerCase().includes(searchedValue) ||
        book.catch_phrase.toLowerCase().includes(searchedValue) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchedValue))
    );
  };

  const filterBooksByType = (books: BookModel[], type: BookCategory) => {
    setBookCategory(type);
    return books.filter((book) => book.type === type);
  };

  const filterBooks = (type: BookCategory, searchedValue: string) => {
    const books = allBooks;
    const booksByType = filterBooksByType(books, type);
    const booksBySearchedValue = filterBooksBySearchedValue(
      booksByType,
      searchedValue
    );
    setFilteredBooks(booksBySearchedValue);
  };

  return {
    allBooks,
    setAllBooks,
    filterBooks,
    filteredBooks,
    bookCategory,
    setBookCategory,
  };
};
