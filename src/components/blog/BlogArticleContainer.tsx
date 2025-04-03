"use client";
import Link from "next/link";
import { Suspense } from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { BlogArticleModel } from "@/types/models";
import { formatDate } from "@/utils/formatDate";
import { TbExternalLink } from "react-icons/tb";
import useScrollPercentage from "@/hooks/useScrollPercentage";

export interface BlogArticleContainerProps {
  blogArticle: BlogArticleModel | undefined;
  slug: string;
}
export default function BlogArticleContainer(props: BlogArticleContainerProps) {
  const scrollPercentage = useScrollPercentage();

  return (
    <div className="-mt-6">
      <progress
        className="h-[4px] top-[65px] -mb-[5px] z-50 sticky progress-[rgb(111,112,23)] progress w-full"
        value={scrollPercentage}
        max="100"
      ></progress>
      <div className={"relative h-[300px] w-screen overflow-hidden"}>
        <div className="breadcrumbs text-sm absolute top-4 left-10 z-40 text-base-200">
          <ul>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/blog/" + props.blogArticle?.slug}>
                {props.blogArticle?.title}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col  justify-center items-center gap-4 text-center text-base-200  absolute z-60 top-1/2 left-1/2 text-my-white -translate-y-1/2 -translate-x-1/2 z-30 text-center">
          <h1 className="text-2xl  font-bold">{props.blogArticle?.title}</h1>
          <span className="text-center text-base-200">
            <span className="flex flex-col md:flex-row justify-center gap-2 items-center text-sm">
              

              <div className="flex justify-center gap-2 items-center text-sm">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <img
                      alt="Photo de l'auteur ou de l'autrice"
                      src={props.blogArticle?.author.author_pic as string}
                    />
                  </div>
                </div>
                {props.blogArticle?.author.author_name}
              </div>
              <span className="hidden md:block">•</span>
              <span>{formatDate(props.blogArticle?.date ?? "")}</span>
            </span>
          </span>
          <div className="badge">{props.blogArticle?.category}</div>
        </div>

        <div className="backdrop-blur-md z-20 bg-[rgba(0,0,0,.5)] absolute top-0 left-0  h-screen w-screen"></div>
        <Image
          style={{ objectFit: "cover" }}
          className="bg-fixed absolute top-0"
          fill
          src={
            props.blogArticle?.cover ??
            "/images/la_nuit_quand_je_me_dissimule.webp"
          }
          alt={"Photo de couverture de " + props.blogArticle?.title}
        ></Image>
      </div>

      <Suspense>
        {/* <div className="flex gap-2 justify-center text-white my-10">
          {props.writing?.tags.map((tag: string, index: number) => (
            <Link key={index} tag={tag} basePath={"rimes"} />
          ))}
        </div> */}
      </Suspense>

      <div className="flex justify-center my-20">
        <article className="px-4 prose">
          {props.blogArticle ? (
            <Markdown>{props.blogArticle?.content}</Markdown>
          ) : (
            <span>Il n&apos;y a pas d&apos;article ici pour le moment...</span>
          )}

          <div className="flex justify-center w-full">
            <div className="card bg-white shadow-xl w-full">
              <div className="card-body">
                <h2 className="card-title">
                  <div className="avatar">
                    <div className="m-0 p-0 w-14 rounded-full">
                      <img
                        alt={
                          "Photo de " + props.blogArticle?.author.author_name
                        }
                        className="m-0"
                        src={props.blogArticle?.author.author_pic as string}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                      {props.blogArticle?.author.author_name}
                    </span>
                    <span className="text-black/50 text-sm">
                      {props.blogArticle?.author.author_title}
                    </span>
                  </div>
                </h2>
                <p className="text-justify">
                  {props.blogArticle?.author.author_description}
                </p>
                <div className="card-actions justify-start">
                  <Link
                    target="_blank"
                    className="btn no-underline"
                    href={props.blogArticle?.author.author_link as string}
                  >
                    En savoir plus sur moi <TbExternalLink />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
