import { getAllBooksMock, getOneBook } from "@/services/lib.service";
import { BookModel } from "@/types";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { slugify } from "@/utils/slugify";
import { Metadata } from "next";
import { Fragment } from "react";
import { FaCartPlus } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export async function generateStaticParams() {
  const books = getAllBooksMock();
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

  return (
    <Fragment>
      <div className="hero bg-base-200 min-h-screen py-4 px-[2rem]">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={book?.cover} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{book?.title}</h1>
            <h2 className="text-2xl font-bold">{book?.author_name}</h2>
            <p className="py-6">{book?.catch_phrase}</p>
            <div className="flex items-center gap-2">
              <a
                role="link"
                aria-label="En savoir plus sur l'auteur ou l'autrice"
                target="_blank"
                href={book?.social_link}
                className="btn md:btn-sm border-1 border-primary"
              >
                L&apos;auteur.ice <TbExternalLink />
              </a>
              <a
                className="flex btn md:btn-sm btn-primary text-neutral "
                role="link"
                aria-label="Acheter - ouvre la page dans un nouvel onglet"
                target="_blank"
                href={book?.link}
              >
                <FaCartPlus /> Acheter
              </a>
              <a
                className=" font-semibold link "
                role="link"
                href="#reviews"
              >
                 Voir les avis
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
      <h2 id="reviews" className="text-2xl font-bold text-center">💡Avis des lecteurs et lectrices</h2>

      </div>
    </Fragment>
  );
};

export default OneBookPage;
