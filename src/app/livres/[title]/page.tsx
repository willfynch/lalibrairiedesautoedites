import { allBooks } from "@/services/lib.service";
import { BookModel } from "@/types";
import { slugify } from "markdown-to-jsx";
import { Fragment } from "react";

export const dynamic = "force-dynamic";

const OneBookPage = async ({ params }: { params: { title: string } }) => {
  let book: BookModel | undefined;
  book = allBooks.findLast(
    (book) => slugify(book.title) === params.title.toLowerCase()
  );

  return (
    <Fragment>
      <p>{params.title}</p>
    </Fragment>
  );
};

export default OneBookPage;
