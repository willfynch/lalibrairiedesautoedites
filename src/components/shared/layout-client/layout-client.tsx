'use client'
import { COOKIE_CONSENT } from "@/utils/constants";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { Suspense, useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Image from "next/image";

function LayoutClient({children}:Readonly<{
    children: React.ReactNode;
  }>) {
  const [cookieConsent, setCookieConsent] = useState<
    COOKIE_CONSENT.DENIED | COOKIE_CONSENT.GRANTED | null
  >(null);

  useEffect(() => {
    const cookie = getLocalStorage("cookie_consent");
    if (cookie) {
      return;
    }

    //@ts-expect-error
    if (document) document.getElementById("my_modal_5")!.showModal();
  }, []);

  useEffect(() => {
    if (!cookieConsent) {
      return;
    }
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: cookieConsent,
      });
    }
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  function acceptCookies() {
    setCookieConsent(COOKIE_CONSENT.GRANTED);
  }

  function denyCookies() {
    setCookieConsent(COOKIE_CONSENT.DENIED);
  }

  return (
    <body className={``}>
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
      <Footer />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex gap-4">
            <Image
              height={75}
              width={75}
              src={"/images/cookies.webp"}
              alt={""}
            ></Image>
            <h3 className="font-bold text-lg">
              Quelques cookies avec ton café ?
            </h3>
          </div>

          <a
            className="text-xs opacity-30"
            target="_blank"
            href="https://www.flaticon.com/free-icons/coffee"
            title="coffee icons"
          >
            Coffee icons created by Nikita Golubev - Flaticon
          </a>
          <p className="py-4">
            J'utilise Google Analytics afin de savoir quels livres, articles,
            ont du succès.{" "}
            <strong>
              Les données sont utilisées uniquement pour améliorer le site
            </strong>{" "}
            et vous pouvez me solliciter pour en savoir plus à tout moment.
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex flex-row gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={(e) => denyCookies()}
                className="btn btn-sm btn-error"
              >
                Je refuse
              </button>
              <button
                onClick={(e) => acceptCookies()}
                className="btn btn-sm btn-success"
              >
                J'adore les cookies
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </body>
  );
}

export default LayoutClient;
