import UpWaves from "@/components/shared/svgs/UpWaves";
import style from "./page.module.scss";
import { TbExternalLink } from "react-icons/tb";
import Instafeed from "@/components/portail-ae/instafeed/instafeed";
import { INSTAFEED } from "@/utils/constants";

function PortailAE() {
  return (
    <section className="flex flex-col items-center justify-center mb-10">
      {/** HERO SECTION */}
      <div
        className="hero h-96 relative"
        style={{
          backgroundImage:
            "url(https://api.tipeee.com/uploads/media/image/png/20230614/202306146489a749132a8.png)",
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
              Le portail de l'auto-édition
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

      {/** SECTION */}
      <article className="prose my-20 px-10 md:px-4">
        <p>
          Leçon numéro 1 : à plusieurs, on va plus loin. <br /> Je vous présente donc
          le Portail de l'auto-édition fondé par{" "}
          <a
            href="https://www.instagram.com/portailautoedition"
            target="_blank"
          >
            Abby
          </a>
          .
        </p>
        <div className="flex flex-col items-center">
          <img
            className={"w-[200px] rounded-full"}
            src="/images/portail-ae-logo.webp"
            alt="Logo du Portail AE"
          />
        </div>
        <h2>Quels sont les projets du Portail AE ?</h2>
        <p>Laissons la parole à la créatrice : </p>
        <blockquote>
          Aloha moi c'est Abby ! Je suis la fière et heureuse fondatrice du
          Portail de l&apos;auto-édition : le but étant entre autres de
          valoriser les auteurs et autrices de la littérature indépendante.
          Depuis 2017, je mène plusieurs projets pour ça via différents formats.
        </blockquote>
        <ul>
          <li>
            Présentations des nouveautés auto-édition trimestrielles | sur
            instagram
          </li>
          <li>
            Une émission en direct et trimestrielle avec Littlepurplebooks | sur
            youtube
          </li>
          <li>
            Lecture des 3ers chapitres d'un livre auto-édité | sur youtube et
            sur le podcast
          </li>
          <li>Éventail du portail | sur instagram</li>
          <li>Service presse </li>
          <li>
            Les actualités auto-édition et les besoins/services pour AE | sur
            instagram
          </li>
          <li>Première expérience d'AE | sur le podcast</li>
        </ul>

        <p>
          Pour en savoir plus, vous pouvez{" "}
          <a href="https://la-librairie-des-autoedites.ducafeetdesrimes.com/blog/le-portail-auto-edition">
            lire son article
          </a>{" "}
          sur le blog de la librairie des auto-édité(e)s ou consulter son compte
          Instagram. ⤵
        </p>

        <br />
        <div className="flex justify-center">
          <Instafeed instafeed={INSTAFEED} />
        </div>
        <br />
        <h2>Promouvoir son livre sur le Portail AE</h2>
        <p>
          Avec le Portail AE, vous pouvez promouvoir votre livre auto-édité.
          Pour cela il suffit de remplir le formulaire ci-dessous.
        </p>
        <p>
          <strong className="text-error font-bold">Attention !</strong> Le
          formulaire est ouvert uniquement durant les mois suivants :
        </p>
        <ul>
          <li>Février</li>
          <li>Mai</li>
          <li>Août</li>
          <li>Novembre</li>
        </ul>

        <br />
        <div className="flex flex-col items-center">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSexN-puLhZ1pKic1kXECqoN5lNf60NPkw5UiAoTXz0BcKgzKQ/viewform"
            className="btn btn-primary text-neutral no-underline font-semibold"
          >
            Proposer son livre au Portail AE <TbExternalLink />
          </a>
        </div>
      </article>
    </section>
  );
}

export default PortailAE;
