import { allBooks } from "@/services/lib.service";
import { slugify } from "markdown-to-jsx";
import { Fragment } from "react";

export const dynamic = "force-dynamic";

const OneBookPage = async ({ params }: { params: { title: string } }) => {
  const book = allBooks.findLast(
    (book) => slugify(book.title) === params.title.toLowerCase()
  );

  return (
    <Fragment>
      <p>{book?.title}</p>
    </Fragment>
  );
};

export default OneBookPage;
