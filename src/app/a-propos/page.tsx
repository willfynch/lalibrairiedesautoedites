import { URLS_CONSTANTS } from "@/utils/constants";
import Link from "next/link";

function About() {
  return (
    <section className="flex justify-center my-10">
      <article className="prose">
        <h1 id="quest-ce-que-cette-librairie">
          Qu'est-ce que cette librairie ?
        </h1>
        <h2 id="dune-idée-jusquau-web">D'une idée jusqu'au web</h2>
        <p>
          Quand on est à la fois développeur et{" "}
          <Link target="_blank" href={URLS_CONSTANTS.WEBSITE_URL}>
            poète
          </Link>
          , on se demande comment{" "}
          <strong>joindre deux mondes si différents</strong>. J'avais envie de
          coder un projet pour les gens comme moi, les gens qui aiment les mots.
          Et puis une idée a commencé à germer en moi, alors que je griffonais
          dans une maison de la poésie au bord de l'eau... Une{" "}
          <strong>librairie pour les auto-édité(e)s...</strong>
        </p>
        <h2 id="pourquoi-les-auto-éditées">Pourquoi les auto-édité(e)s ?</h2>
        <p>
          Parce que je compte auto-éditer mon premier recueil, par envie de
          tenter cette aventure après avoir suivi les péripéties de{" "}
          <Link href={"https://www.instagram.com/margot.vincent.poesie/"}>
            Margot Vincent
          </Link>{" "}
          sur son compte Instagram. Alors je me suis demandé :{" "}
          <strong>comment donner plus de poids à l'auto-édition</strong> ?
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
          <strong>simple</strong>. Quelque chose qui s'apparente plus à un
          media, ou à une communauté.
        </p>
        <h2 id="et-cette-librairie-était-née">Et cette librairie était née</h2>
        <p>
          J'ai produit une première version pour tester, voir si les gens
          aimaient. J'ai eu plus d'une centaine de soumissions de livres et au
          regard de ma petite communauté sur Threads, c'est très bien !
        </p>
        <p>
          Maintenant, <strong>j'aimerais que cet espace grandisse</strong>. Des
          livres, des <Link href={"/blog"}>articles de blog</Link>, d'autres
          choses viendront sans doute après :
        </p>
        <ul>
          <li>
            Espace commentaire modéré pour que les gens puissent laisser des
            avis sur des livres
          </li>
          <li>Espace « à la une »</li>
          <li>Concours ou tips d'écriture</li>
        </ul>
        <p>
          <strong>On verra ce que la vie nous réserve.</strong>
        </p>
        <h2 id="et-comment-ça-marche-alors">Et comment ça marche, alors ?</h2>
        <p>Voici quelques explications.</p>
        <h3 id="la-librairie">La librairie</h3>
        <p>
          C'est un portail, une vitrine, qui met en avant vos livres. On peut
          les acheter en cliquant sur le lien (je ne les vends pas directement
          et votre prix de vente est donc préservé), ou consulter les réseaux
          sociaux de la personne qui a écrit le livre.
        </p>
        <h4 id="soumettre-un-livre">Soumettre un livre</h4>
        <p>
          Il suffit de remplir le formulaire accesible via les boutons «
          Soumettre un livre » présents dans la barre de navigation ou sur{" "}
          <Link href={"/"}>la page d'accueil</Link>.
        </p>
        <h4 id="quand-est-ce-que-mon-livre-apparaitra">
          Quand est-ce que mon livre apparaitra ?
        </h4>
        <p>
          S'il correspond aux critères (pas d'incitations à la haine et autres
          joyeusetés, et un formulaire dûment rempli), il sera ajouté au
          catalogue.{" "}
          <strong>
            Le catalogue est mis à jour environ une fois par mois.
          </strong>{" "}
          Tout dépend de mon avancée sur le projet car j'accompagne le nouveau
          catalogue de noueautés sur le portail, ce qui me demande du temps.
        </p>
        <h3 id="le-blog">Le blog</h3>
        <p>
          C'est un blog autour de l'écriture, des livres et de l'auto-édition.
        </p>
        <h4 id="proposer-un-article">Proposer un article</h4>
        <p>
          Il suffit de remplir le formulaire accesible via le boutons «
          Soumettre un article » présents sur la page{" "}
          <Link href={"/blog"}>blog</Link>. Ici aussi, la mise à jour de la
          liste des articles c'est une fois par mois environ.
        </p>
        <p>
          En tout cas, j'espère que cet espace vous plaira. Venez le peupler !
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