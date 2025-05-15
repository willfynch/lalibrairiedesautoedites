"use client";
interface BookReviewCardProps {
  image?: string;
  title: string;
  link: string;
  reviewer: string;
  mark?: number;
}

export const BookReviewCard = (props: BookReviewCardProps) => {
  return (
    <div className="border-2 border-primary rounded-[1rem]  overflow-hidden rounded-lg shadow-md h-24 group cursor-pointer hover:shadow-lg transition-all duration-300 border-1 border-primary">
      {/* Content */}
      <div className=" flex flex-col  h-full p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold ">{props.title}</h3>
          {props.mark && (
            <div className="flex text-warning ">
              {new Array(props.mark).fill(0).map(() => {
                return <span style={{ textShadow: "#FC0 1px 0 5px" }}>★</span>;
              })}
              {new Array(5 - props.mark).fill(0).map(() => {
                return <span className="text-primary/50">★</span>;
              })}
            </div>
          )}
        </div>
        <p>Par {props.reviewer}</p>
      </div>
    </div>
  );
};
