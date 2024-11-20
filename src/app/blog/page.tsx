import { Suspense } from "react";
import { getAllBlogs } from "@/services/blog.service";
import BlogPanel from "@/components/blog/blog-panel/blog-panel";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { Metadata } from "next";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { METADATA_INFOS } from "@/utils/constants";

const DESCRIPTION = `Ici, vous trouverez des articles sur l'écriture, l'autoédition, les livres autoédités, des conseils en tous genres... ! C'est aussi un espace participatif. Vous aussi, vous pouvez avoir votre article dans cette section.`
export const metadata: Metadata = calculateMetadata(METADATA_INFOS.TITLE + ": le blog", '/blog','images/og.webp', DESCRIPTION)

export default async function Blog() {
  const articles = getAllBlogs();

  return (
    <div className="my-10">
      <div className=" flex flex-col items-center mt-6 mb-14 ">
        <div className="prose flex flex-col items-center max-w-[800px] px-4 lg:px-0">
          <h1>Le blog </h1>
          <p>
            Ici, vous trouverez des articles sur{" "}
            <strong>l&apos;écriture</strong>,{" "}
            <strong>l&apos;autoédition</strong>, les livres autoédités,{" "}
            <strong>des conseils</strong> en tous genres... !
          </p>
          <p className="text-justify">
            C&apos;est aussi un <strong>espace participatif</strong>. Vous
            aussi, <strong>vous pouvez avoir votre article dans cette section</strong>. Pour
            cela, rien de plus simple, <strong>cliquez sur le bouton ci-dessous</strong> et remplissez le
            formulaire. Si vous avez des questions ou des remarques,
            contactez-moi via l&apos;adresse{" "}
            <a href="mailto:ducafeetdesrimes@proton.me">
              ducafeetdesrimes@proton.me
            </a>{" "}
            ou sur Instagram sur le compte{" "}
            <a
              target="_blank"
              href="https://instagram.com/du_cafe_et_des_rimes"
            >
              @du_cafe_et_des_rimes
            </a>
          </p>

        </div>
        <Link
            target="_blank"
            className="btn btn-primary text-neutral mt-10"
            href={"https://tally.so/r/3yq8Ed"}
          >
            Soumettre un article{" "}
            <TbExternalLink/>
          </Link>
      </div>
      <Suspense>
        <BlogPanel articles={articles} />
      </Suspense>
    </div>
  );
}
