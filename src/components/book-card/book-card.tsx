import { BookModel } from "@/models/models";
import { TbExternalLink } from "react-icons/tb";

function BookCard(props: BookModel) {
  return (
    <div className="card bg-base-100  shadow-xl ">
      <figure className="w-full ">
        <img className="object-contain h-80" src={props.cover} alt={'Couverture de ' + props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <h3>{props.author_name}</h3>
        <div className="card-actions justify-start wrap">
          {props.tags.map((tag:string,index:number) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
        <p>{props.catch_phrase}</p>

        <div className="card-actions justify-end">

        <a target="_blank" href={props.social_link} className="btn">
              Découvrir l&apos;auteurice <TbExternalLink />
            </a>
            <a target="_blank" href={props.link} className="btn btn-primary">
              Acheter <TbExternalLink />
            </a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
