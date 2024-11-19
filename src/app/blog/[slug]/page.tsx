import { Fragment } from "react";
import { getAllBlogs, getOneBlogArticle } from "@/services/blog.service";
import { BlogArticleModel } from "@/models/models";
import BlogArticleContainer from "@/components/blog-article-container/blog-article-container";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { METADATA_INFOS } from "@/utils/constants";
import { Metadata } from "next";
// import { calculateMetadata } from "@/utils/calculateMetadata";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const slug = params.slug
//     const blogArticle = getOneBlogArticle(slug);
//     const data = {
//         title: blogArticle?.title,
//         slug: blogArticle?.slug,
//         og: blogArticle?.cover
//     }
//     return calculateMetadata(data.title ?? "Pas de titre", `/blog/${data.slug}`, data.og)
// }

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: {params:{slug:string}}): Promise<Metadata> {
  const slug = params.slug
  const article = getOneBlogArticle(slug);
  return calculateMetadata(article?.title ?? "Pas de titre", `/blog/${article?.slug}`, article?.cover as string, article?.content.slice(0,100)+'...')
}
export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article: BlogArticleModel | undefined = getOneBlogArticle(slug);

  return <BlogArticleContainer blogArticle={article} slug={slug} />;
}
