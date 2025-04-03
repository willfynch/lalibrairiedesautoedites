import { URLS_CONSTANTS } from "@/utils/constants";
import style from './Hero.module.scss';
import Link from "next/link";
import { UpWaves } from "../shared";

export const Hero = () => {
    return (       <div
            className="hero h-96 relative"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content  text-center">
              <div className="">
                <h1 className={"mb-5 text-4xl lg:text-6xl font-bold text-base-100" + " " + style.title}>
                  La librairie des auto-édité(e)s{" "}
                </h1>
                <p className="mb-5 text-base-100">
                  Pour les hors-pistes de l&apos;édition. Les pirates du verbe. 🏴‍☠️
                  <br />
                  <small>
                    Un projet{" "}
                    <a
                      className="link font-semibold"
                      role="link"
                      target="_blank"
                      href={URLS_CONSTANTS.WEBSITE_URL}
                    >
                      @ducaféetdesrimes
                    </a>
                  </small>
                </p>
                <div
                  className=" tooltip  tooltip-primary tooltip-top before:text-neutral"
                  data-tip="Ouvrir le formulaire"
                >
                  <Link
                    target="_blank"
                    href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
                    className="btn btn-base-100"
                  >
                    Soumettre mon livre
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-0 absolute w-full"><UpWaves/></div>
          </div> );
}
