import UpWaves from "@/components/shared/svgs/UpWaves";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { METADATA_INFOS, URLS_CONSTANTS } from "@/utils/constants";
import { Metadata } from "next";
import Link from "next/link";
import style from "./page.module.scss";

const DESCRIPTION = `Quand on est à la fois développeur et poète, on se demande comment joindre deux mondes si différents. J'avais envie de coder un projet pour les gens comme moi, les gens qui aiment les mots.`;
export const metadata: Metadata = calculateMetadata(
  METADATA_INFOS.TITLE + ": à propos",
  "/a-propos",
  "images/og.webp",
  DESCRIPTION
);

function About() {
  return (
    <section className="flex flex-col items-center mb-10">
      {/** HERO SECTION */}
      <div
        className="hero h-96 relative"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content  text-center">
          <div className="">
            <h1
              className={
                "mb-5 text-4xl lg:text-6xl font-bold text-base-100" +
                " " +
                style.title
              }
            >
              À propos de cette librairie
            </h1>
            <div
              className=" tooltip  tooltip-primary tooltip-top before:text-neutral"
              data-tip="Ouvrir le formulaire"
            ></div>
          </div>
        </div>
        <div className="bottom-0 absolute w-full">
          <UpWaves />
        </div>
      </div>

      <article className="prose my-20 px-10 md:px-4 text-justify">
        <h2 id="dune-idée-jusquau-web">D&apos;une idée jusqu&apos;au web</h2>
        <p>
          Quand on est à la fois développeur (un autre type d'écrivain qui, lui
          écrit du code informatique 😉) et{" "}
          <Link target="_blank" href={URLS_CONSTANTS.WEBSITE_URL}>
            poète
          </Link>
          , on se demande comment{" "}
          <strong>joindre deux mondes si différents</strong>.
        </p>
        <figure className="flex flex-col items-center justify-center">
          <img
            src="/images/picture_of_me.webp"
            className=" h-[200px] w-[200px] rounded-full"
            alt=""
          />
          <figcaption className="">
            Ce type est développeur et poète ⤴
          </figcaption>
        </figure>
        <p>
          J&apos;avais envie de coder un projet pour les gens comme moi, les
          gens qui aiment les mots. Et puis <strong>une idée a commencé à germer</strong>, alors
          que je griffonais dans une maison de la poésie au bord de
          l&apos;eau... Une{" "}
          <strong>librairie pour les auto-édité(e)s...</strong>
        </p>

        <h2 id="pourquoi-les-auto-éditées">Pourquoi les auto-édité(e)s ?</h2>
        <p>
          Parce que je compte auto-éditer mon premier recueil, par envie de
          tenter cette aventure après avoir suivi les péripéties de{" "}
          <Link target="_blank" href={"https://www.instagram.com/margot.vincent.poesie/"}>
            Margot Vincent
          </Link>{" "}
          sur son compte Instagram. Alors je me suis demandé :{" "}
          <strong>comment donner plus de poids à l&apos;auto-édition</strong> ?
        </p>
        <p>
          Il existe bien le{" "}
          <Link
            target="_blank"
            href={"https://www.instagram.com/portailautoedition/"}
          >
            Portail auto-édition
          </Link>{" "}
          ou encore la{" "}
          <Link target="_blank" href={"https://librairiejeunespousses.fr/"}>
            librairie Jeunes Pousses
          </Link>{" "}
          mais je voyais quelque chose de <strong>participatif</strong> et{" "}
          <strong>simple</strong>. Quelque chose qui s&apos;apparente plus à un
          media, ou à une communauté. Et qui pourrait s'articuler avec les
          autres projets.
        </p>
        <h2 id="et-cette-librairie-était-née">Et cette librairie était née</h2>
        <p>
          J&apos;ai produit une première version pour tester, voir si les gens
          aimaient. J&apos;ai eu plus d&apos;une centaine de soumissions de
          livres et au regard de ma petite communauté sur Threads, c&apos;est
          très bien !
        </p>
        <p>
          Maintenant, <strong>j&apos;aimerais que cet espace grandisse</strong>.
          Des livres, des <Link href={"/blog"}>articles de blog</Link>,
          d&apos;autres choses viendront sans doute après :
        </p>
        <ul>
          <li>
            Espace commentaire modéré pour que les gens puissent laisser des
            avis sur des livres
          </li>
          <li>Espace « à la une »</li>
          <li>Concours ou tips d&apos;écriture</li>
        </ul>
        <p>
          <strong>On verra ce que la vie nous réserve.</strong>
        </p>
        <h2 id="et-comment-ça-marche-alors">Et comment ça marche, alors ?</h2>
        <p>Voici quelques explications.</p>
        <h3 id="la-librairie">La librairie</h3>
        <p>
          C&apos;est un portail, une vitrine, qui met en avant vos livres. On
          peut les acheter en cliquant sur le lien (je ne les vends pas
          directement et votre prix de vente est donc préservé), ou consulter
          les réseaux sociaux de la personne qui a écrit le livre.
        </p>
        <h4 id="soumettre-un-livre">Soumettre un livre</h4>
        <p>
          Il suffit de remplir le formulaire accesible via les boutons «
          Soumettre un livre » présents dans la barre de navigation ou sur{" "}
          <Link href={"/"}>la page d&apos;accueil</Link>.
        </p>
        <h4 id="quand-est-ce-que-mon-livre-apparaitra">
          Quand est-ce que mon livre apparaitra ?
        </h4>
        <p>
          S&apos;il correspond aux critères (pas d&apos;incitations à la haine
          et autres joyeusetés, et un formulaire dûment rempli), il sera ajouté
          au catalogue.{" "}
          <strong>
            Le catalogue est mis à jour environ une fois par mois.
          </strong>{" "}
          Tout dépend de mon avancée sur le projet car j&apos;accompagne le
          nouveau catalogue de nouveautés sur le portail, ce qui me demande du
          temps.
        </p>
        <h3 id="le-blog">Le blog</h3>
        <p>
          C&apos;est un blog autour de l&apos;écriture, des livres et de
          l&apos;auto-édition.
        </p>
        <h4 id="proposer-un-article">Proposer un article</h4>
        <p>
          Il suffit de remplir le formulaire accesible via le boutons «
          Soumettre un article » présents sur la page{" "}
          <Link href={"/blog"}>blog</Link>. Ici aussi, la mise à jour de la
          liste des articles c&apos;est une fois par mois environ.
        </p>
        <p>
          En tout cas, j&apos;espère que cet espace vous plaira. À vous de le
          peupler maintenant !
        </p>
        <p>
          Will de{" "}
          <Link target="_blank" href={URLS_CONSTANTS.WEBSITE_URL}>
            <strong>Du Café et des Rimes</strong>
          </Link>
        </p>
      </article>
    </section>
  );
}

export default About;
