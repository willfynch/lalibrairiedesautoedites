import { BlogArticleModel } from "@/models/models";
import BlogArticleCard from "../blog-article-card/blog-article-card";
import { FIELDS, sortBy } from "@/utils/sortBy";

function BlogPanel(props: { articles: BlogArticleModel[] }) {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="flex flex-col items-center gap-4 max-w-[800px]">
        {props.articles.sort(sortBy(FIELDS.DATE)).map((article: BlogArticleModel, index: number) => {
          return (
            <BlogArticleCard
              key={index}
              slug={article.slug}
              title={article.title}
              content={article.content}
              tags={article.tags}
              cover={article.cover}
              date={article.date} author={article.author} category={"auto-édition"}            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogPanel;
