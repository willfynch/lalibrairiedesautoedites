import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { slugify } from "../utils/slugify";
import { BlogArticleModel, MatterResult } from "@/models/models";

export enum UTILITIES {
    ARTICLES_PATH = "public/blog",
}
const blogFolder = join(process.cwd(), UTILITIES.ARTICLES_PATH);
const blogFiles = fs.readdirSync(blogFolder);
const blogArticlesMarkdown: string[] = blogFiles.filter((file) => file.endsWith(".md"));

export function getMatterResult(markdownFiles: string[], path:string): MatterResult[]{
    return markdownFiles.map(fileName => {
        const fileContent = fs.readFileSync(`${path}/${fileName}`, "utf8");
        return matter(fileContent);
    })
}

export function getAllBlogs(): BlogArticleModel[]{
    const matterResult = getMatterResult(blogArticlesMarkdown, UTILITIES.ARTICLES_PATH);

    return matterResult.map(matter => {
        return {
            title: matter.data.title,
            slug: slugify(matter.data.title),
            tags: matter.data.tags,
            content: matter.content,
            date: matter.data.date,
            cover: matter.data.cover,
            author: {
                author_name:  matter.data.author_name,
                author_pic:  matter.data.author_pic,
                author_description:  matter.data.author_description,
                author_link:  matter.data.author_link,
                author_title: matter.data.author_title
            },
            category: matter.data.category
        }
    })
} 

export function getOneBlogArticle(slug:string): BlogArticleModel | undefined {
    return getAllBlogs().find(item => item.slug === slug)
} 
