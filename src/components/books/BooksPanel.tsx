"use client";
import { BookCategoryTabItemModel, BookModel } from "@/types/models";
import {
  BOOK_CATEGORIES_TAB_ITEMS,
} from "@/utils/constants";
import { useEffect, useState } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import { Hero } from "@/components/books/Hero";
import { BookCategory } from "@/types";
import { useBooks } from "@/hooks/useBooks";
import { BookSearchMenu } from "./BookSearchMenu";
import { BooksContainer } from "./BooksContainer";

function BooksPanel(props: { books: BookModel[] }) {
  const { filteredBooks, filterBooks, bookCategory } = useBooks(props.books);

  const [searchedValue, setSearchedValue] = useState("");
  const tabItems: BookCategoryTabItemModel[] = BOOK_CATEGORIES_TAB_ITEMS;

  const { scrollY, scrollDirection } = useScrollPosition();

  const handleFilterBooks = (
    type?: BookCategory,
    searchedValue?: string
  ): void => {
    setSearchedValue(searchedValue || "");
    filterBooks(type || bookCategory, searchedValue || "");
  };

  useEffect(() => {
    filterBooks("novel", "");
  }, []);

  return (
    <div className="relative ">
      <Hero />
      <BookSearchMenu
        scrollDirection={scrollDirection}
        scrollY={scrollY}
        tabItems={tabItems}
        handleFilterBooks={handleFilterBooks}
        bookCategory={bookCategory}
      />      
      <BooksContainer filteredBooks={filteredBooks} searchedValue={searchedValue}/>
    </div>
  );
}

export default BooksPanel;
