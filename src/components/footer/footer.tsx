import { FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { FaBookBookmark, FaThreads } from "react-icons/fa6";
import { URLS_CONSTANTS } from "@/utils/constants";
function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        
        <FaBookBookmark className="text-4xl" />
        
        <p className="font-bold">
          La librairie des auto-édité(e)s
          <br />
          Un projet{" "}
          <a
            className="link font-semibold"
            role="link"
            target="_blank"
            href="https://ducafeetdesrimes.com"
          >
            @ducaféetdesrimes
          </a>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-2">
          <a className="btn btn-square  text-xl" target="_blank" href={URLS_CONSTANTS.INSTA_URL}>
            <FaInstagram />
          </a>
          <a className="btn btn-square text-xl" target="_blank" href={URLS_CONSTANTS.SUBSTACK_URL}>
            <BsSubstack />
          </a>
          <a className="btn btn-square text-xl" target="_blank" href={URLS_CONSTANTS.THREADS_URL}>
            <FaThreads />
          </a>
        </div>
      </nav>
      <span>

        Réalisé avec ❤️‍🔥, NextJS et DaisyUI.
      </span>
      <small>
      En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
      </small>
    </footer>
  );
}

export default Footer;
