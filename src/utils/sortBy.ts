import { BlogArticleModel } from "@/types/models";

export enum FIELDS {
    DATE = 'date'
}
export function sortBy(field:string){
    if(field === FIELDS.DATE){
        return function(a:BlogArticleModel, b:BlogArticleModel): number{
            const aDate = new Date(a[field]);
            const bDate = new Date(b[field]);
                if(aDate > bDate) return -1;
                else return 1
            }
    }

}

