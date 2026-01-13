"use client";
import { MdOutlineEmail } from "react-icons/md";
import { BookModel } from "@/types";
import { FaCartPlus, FaInstagram } from "react-icons/fa";
import { BookReviewCard } from "./BookReviewCard";
import { TbExternalLink } from "react-icons/tb";
import { UpWaves } from "../shared";
import { MouseEvent } from "react";
import { URLS_CONSTANTS } from "@/utils/constants";
import { IoChevronBackOutline } from "react-icons/io5";
interface OneBookContainerProps {
  book: BookModel;
}
export const OneBookContainer = ({ book }: OneBookContainerProps) => {
  const scrollHandle = (e: MouseEvent, path: string) => {
    e.preventDefault();
    const target = document.getElementById(path);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <section className="hero bg-base-200 min-h-screen py-4  relative">
        <div className="px-[1rem]">
          <a
            role="link"
            aria-label="Retour à la liste des livres"
            href={"/"}
            className="mx-[1rem] btn md:btn-sm border-1 border-primary w-fit"
          >◀️
            Retour aux livres 
          </a>

          <div className="hero-content flex-col items-start lg:flex-row mb-28 gap-12">
            <img
              alt={"Couverture de " + book.title}
              src={book?.cover}
              className="w-full sm:w-[20rem] sm:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="max-w-[700px]">
              <h1 className="text-4xl md:text-5xl font-bold">{book?.title}</h1>
              <h2 className="text-2xl font-bold mt-4">{book?.author_name}</h2>
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
                  <FaCartPlus /> Acheter <TbExternalLink />
                </a>

                <a
                  className="group font-semibold btn md:btn-sm border-1 border-warning bg-warning/30 w-full text-center md:w-fit text-primary hover:border-warning hover:bg-warning/30 hover:shadow-[0px_0px_15px_-1px_rgba(251,_191,_36,_1)]"
                  role="link"
                  href="#reviews"
                  onClick={(e) => scrollHandle(e, "reviews")}
                >
                  Voir les avis ⬇️
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-0 absolute w-full">
          <UpWaves />
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center px-2 mt-4 md:mt-10">
        <div className="md:w-1/2">
          <h2 className="text-center subtitle scroll-mt-[100px] " id="reviews">
            💡Avis des lecteurs et lectrices
          </h2>

          <div
            role="alert"
            className="rounded-[1rem] p-2 bg-info text-base my-6 p-4 flex flex-col items-center gap-2"
          >
            <span className="text-center">
              Vous avez écrit un avis sur ce livre ? <br />
              Contactez-moi ⬇️ pour qu&apos;il figure sur cette page.
            </span>

            <div className="flex justify-between items-center gap-2">
              <MdOutlineEmail />
              <span>
                <a
                  className="text-base font-bold no-underline"
                  href="mailto:ducafeetdesrimes@proton.me"
                >
                  ducafeetdesrimes@proton.me
                </a>
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FaInstagram />
              <span>
                <a
                  className="text-base font-bold no-underline"
                  target="_blank"
                  href={URLS_CONSTANTS.INSTA_MY_URL}
                >
                  @du_cafe_et_des_rimes
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col mb-10">
            {book.reviews &&
              book?.reviews?.length > 0 &&
              book?.reviews.map((review) => {
                return (
                    <BookReviewCard
                    key={review.title}
                    title={review.title}
                    link={review.link}
                    reviewer={review.reviewer}
                    image={review.image}
                    mark={review.mark}
                    content={review.content || ""}
                    ></BookReviewCard>
                );
              })}
            <BookReviewCard
              title={"Ceci est une fausse review"}
              link={"https://ducafeetdesrimes.com"}
              reviewer={"Moi-même"}
              image={"https://picsum.photos/200/300"}
              mark={3}
              content="J'ai apprécié ce livre car il est bien. On suit l'histoire d'un type qui connait une meuf qui mange des chips. C'est poignant et édifiant."
            ></BookReviewCard>
          </div>
        </div>
      </section>
    </main>
  );
};
