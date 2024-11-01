
import { Fragment } from "react";
import { getAllBlogs, getOneBlogArticle } from "@/services/blog.service";
import { BlogArticleModel } from "@/models/models";
import BlogArticleContainer from "@/components/blog-article-container/blog-article-container";
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
   console.log(getAllBlogs().map(blog => ({ slug: blog.slug })))
   return getAllBlogs().map(blog => ({ slug: blog.slug }))
}


export default async function Article({ params }: { params: { slug: string } }) {

    const { slug } = params;
    const article: BlogArticleModel | undefined = getOneBlogArticle(slug)

    return (
        <Fragment>
            <BlogArticleContainer blogArticle={article} slug={slug} />
        </Fragment>

    )
}
