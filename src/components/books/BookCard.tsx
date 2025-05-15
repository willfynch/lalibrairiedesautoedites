"use client";
import { BookModel } from "@/types/models";
import { sendGAEvent } from "@next/third-parties/google";
import { Fragment } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

function BookCard(props: BookModel) {
  function showModal() {
    if (document)
      //@ts-expect-error because there is a virtual dom
      document.getElementById("synopsis_modal_" + props.id)!.showModal();
  }

  function handleClickOnBuyBook(event: React.MouseEvent, link: string) {
    event.preventDefault();
    sendGAEvent("event", "buttonClicked", { value: props.title });
    window.open(link, "_blank");
  }

  return (
    <Fragment>
      
      <div className="card bg-white shadow-xl hover:shadow-sm hover:bg-info/50 duration-300 group">
                  <Link href={`/livres/${slugify(props.title)}`}>

        <figure className="w-full ">
          <img
            className="object-contain h-80"
            src={props.cover}
            alt={"Couverture de " + props.title}
          />
        </figure>
        <div className="card-body">
          <Link href={`/livres/${slugify(props.title)}`}>
            <h2  className="card-title group-hover:drop-shadow-[0_1.2px_2px_rgba(250,214,137,1)] duration-300">{props.title}</h2>
          </Link>
          <h3>{props.author_name}</h3>
          <div className="card-actions justify-start wrap">
            {props.tags.slice(0, 3).map((tag: string, index: number) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
          {/* <p>{props.catch_phrase}</p> */}
{/* 
          <div className=" card-actions justify-end">
            <a
              role="link"
              aria-label="En savoir plus sur l'auteur ou l'autrice"
              target="_blank"
              href={props.social_link}
              className="btn md:btn-sm"
            >
              L&apos;auteur.ice <TbExternalLink />
            </a>

            <button
              aria-label="Lire le résumé"
              onClick={showModal}
              className="btn md:btn-sm tooltip  tooltip-neutral tooltip-top"
              data-tip="Lire le résumé"
            >
              <FaInfoCircle />
            </button>

            <a
              role="link"
              aria-label="Acheter - ouvre la page dans un nouvel onglet"
              target="_blank"
              onClick={(e) => handleClickOnBuyBook(e, props.link)}
              href={props.link}
            >
              <button
                data-tip="Acheter"
                className=" btn md:btn-sm btn-primary text-neutral tooltip tooltip-neutral tooltip-center"
              >
                <FaCartPlus />
              </button>
            </a>
          </div> */}
        </div>
        </Link>
      </div>

      <dialog
        id={"synopsis_modal_" + props.id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="flex gap-4">
            <h3 className="font-bold text-lg">Résumé</h3>
          </div>

          <p className="py-4">{props.catch_phrase}</p>
          <div className="modal-action">
            <form method="dialog" className="flex flex-row gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-primary text-neutral">
                Fermer
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </Fragment>
  );
}

export default BookCard;
