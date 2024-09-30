
export interface BookModel {
  title?:string;
}
export default async function Home() {
  const binId = "66f86374e41b4d34e439acf3";
  const url = 'https://api.jsonbin.io/v3/b/' + binId;
  const headers = {
    'X-Master-Key': process.env.X_MASTER_KEY!,
    'X-Access-Key': process.env.READONLY_KEY!
  }
  console.log(headers)
  const res = await fetch(url,  {headers: headers});
  console.log(res)
  const data = await res.json();
  console.log(data)
  return (
  <div>
    {data.record.books.map((book:BookModel,index:number)=>{
      return (
        <div key={index}>
          {book.title}
        </div>
      )
    })}
  </div>
);
}
