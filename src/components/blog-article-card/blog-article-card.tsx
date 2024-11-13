import { BlogArticleModel } from "@/models/models";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

function BlogArticleCard(props: BlogArticleModel) {
  return (
    <div className="group  card lg:card-side bg-base-100 shadow-xl">
      <figure className="lg:w-4/6">
        <img
          className="duration-100 group-hover:scale-110"
          src={props.cover as string}
          alt="Album"
        />
      </figure>
      <div className="card-body lg:w-2/6">
        <Link href={`blog/${props.slug}`}><h2 className="card-title hover:text-primary">{props.title}</h2></Link>
        <small>{formatDate(props.date)} - {props.author.author_name}</small>
        <p>{props.content.slice(0,100)}...</p>
        <div className="card-actions justify-start">
          <Link className="btn btn-primary" href={`blog/${props.slug}`}>Lire l&apos;article</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogArticleCard;
