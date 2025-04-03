import { InstaCard } from "@/types/models";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export interface InstaCardProps {
    card:InstaCard;
}

function Instacard(props:InstaCardProps) {
    return ( 
    <a target="_blank" className=" group p-0 relative h-[150px] w-[150px] md:h-[200px] md:w-[200px] " href={props.card.link}>
        <div className="duration-200 rounded-lg group-hover:bg-black/50  absolute z-20 h-[150px] w-[150px] md:h-[200px] md:w-[200px] "></div>
        <FaInstagram className="text-4xl text-white hidden group-hover:flex z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
        <Image fill className="m-0 rounded-lg" src={props.card.image} alt={props.card.alt} />

    </a> 
    
);
}

export default Instacard;