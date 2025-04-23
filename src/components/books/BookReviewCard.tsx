interface BookReviewCardProps {
  image?: string;
  title: string;
  link: string;
  reviewer: string;
}

export const BookReviewCard = (props: BookReviewCardProps) => {
  return (
    <div className="rounded-[1rem]  overflow-hidden rounded-lg shadow-md h-24 group cursor-pointer hover:shadow-lg transition-all duration-300 border-1 border-primary" >
      {/* Content */}
      <div className="relative flex flex-col justify-between h-full p-3 z-20 text-base-100">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg  max-w-xs">{props.title}</h3>
          <div className="flex text-yellow-300">
            {/* Example for 4/5 stars */}
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-base-100/50">★</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-sm italic ">blablaa</p>
          <p className="text-xs font-medium">By {props.reviewer}</p>
        </div>
      </div>
    </div>
  );
};
