import { getAllBlogs, getOneBlogArticle } from "@/services/blog.service";
import { BlogArticleModel } from "@/models/models";
import BlogArticleContainer from "@/components/blog-article-container/blog-article-container";
import { calculateMetadata } from "@/utils/calculateMetadata";
import { Metadata } from "next";

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
