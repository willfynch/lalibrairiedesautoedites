import Instacard from "../instacard/instacard";
import { InstaCard, InstaFeed } from "@/models/models";
import { FaInstagram } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export interface InstafeedProps {
  instafeed: InstaFeed;
}

function Instafeed(props: InstafeedProps) {
  return (
    <div className="w-[350px] md:w-[450px] lg:w-[600px] flex flex-wrap gap-2 justify-center items-center">
      {props.instafeed.posts.map((card: InstaCard, index: number) => {
        return <Instacard key={index} card={card} />;
      })}
      <a
        target="_blank"
        className="group font-bold flex items-center gap-[2px] no-underline text-primary hover:text-accent duration-100"
        href={props.instafeed.account.link}
      >
        <FaInstagram className="text-xl font-bold mt-[4px]" />{" "}
        {props.instafeed.account.name}
        <TbExternalLink className="w-0 group-hover:w-8 duration-200 -ml-2"/>
      </a>
    </div>
  );
}

export default Instafeed;
