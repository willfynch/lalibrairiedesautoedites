import { BookReviewCard } from "@/components/books/BookReviewCard";
import { UpWaves } from "@/components/shared";
import {
  getAllBooks,
  getAllBooksMock,
  getOneBook,
  getOneBookMock,
} from "@/services/lib.service";
import { BookModel } from "@/types";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { slugify } from "@/utils/slugify";
import { Metadata } from "next";
import { Fragment } from "react";
import { FaCartPlus } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export async function generateStaticParams() {
  const books = await getAllBooksMock();
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
  const book: BookModel | undefined = getOneBookMock();

  return (
    <main>
      <section className="hero bg-base-200 min-h-screen py-4  relative">
        <div className="hero-content flex-col lg:flex-row px-[2rem] mb-24">
          <img
            alt={"Couverture de " + book.title}
            src={book?.cover}
            className="w-3/4 md:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{book?.title}</h1>
            <h2 className="text-2xl font-bold">{book?.author_name}</h2>
            <p className="py-6">{book?.catch_phrase}</p>
            <div className=" flex flex-col md:flex-row items-center gap-2">
              <a
                role="link"
                aria-label="En savoir plus sur l'auteur ou l'autrice"
                target="_blank"
                href={book?.social_link}
                className="btn md:btn-sm border-1 border-primary w-full md:w-fit"
              >
                L&apos;auteur.ice <TbExternalLink />
              </a>
              <a
                className="flex btn md:btn-sm btn-primary text-neutral w-full md:w-fit"
                role="link"
                aria-label="Acheter - ouvre la page dans un nouvel onglet"
                target="_blank"
                href={book?.link}
              >
                <FaCartPlus /> Acheter
              </a>

              <a
                className=" font-semibold link w-full text-center md:w-fit"
                role="link"
                href="#reviews"
              >
                Voir les avis 🌟
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-0 absolute w-full">
          <UpWaves />
        </div>
      </section>

      <section className="w-screen flex flex-col items-center justify-center px-2 mt-4 md:mt-10">
        <div className="prose">
          <h2 className="text-center subtitle" id="reviews">
            💡Avis des lecteurs et lectrices
          </h2>

          <div
            role="alert"
            className="alert alert-info text-base-100 font-semibold my-6"
          >
            ✨
            <span>
              Vous avez écrit un avis sur ce livre ? Vous pouvez me le proposer
              en m'envoyant un mail {""}
              <a
                className="text-base-100 font-bold hover:text-warning"
                href="mailto:ducafeetdesrimes@proton.me"
              >
                ICI 📧
              </a>{" "}
              et je l'ajouterai à cette page !
            </span>
          </div>

          <div className="flex flex-col mb-10">
            {book.reviews &&
              book?.reviews?.length > 0 &&
              book?.reviews.map((review, index) => {
                return (
                  <BookReviewCard
                    title={review.title}
                    link={review.link}
                    reviewer={review.reviewer}
                    image={review.image}
                  ></BookReviewCard>
                );
              })}
            <BookReviewCard
              title={"Ceci est une fausse review"}
              link={""}
              reviewer={"Moi-même"}
              image={"https://picsum.photos/200/300"}
            ></BookReviewCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OneBookPage;
