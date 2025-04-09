import { BookModel } from "@/types"



interface OneBookProps {
    book: BookModel 
}

export const OneBook = (props: OneBookProps) => {
return <h1>{props.book.title}</h1>
}