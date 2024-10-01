import { getAllBooksMock } from "@/services/lib.service";

export interface BookModel {
  title?:string;
}
export default async function Home() {

  const books = getAllBooksMock();
 
  return (
  <div>
    {books.map((book:BookModel,index:number)=>{
      return (
        <div className="text-bold font-bold bg-red-200" key={index}>
          {book.title}
        </div>
      )
    })}
  </div>
);
}
