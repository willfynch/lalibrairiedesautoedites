export function formatDate(date: string): string{
    if(!date) {return ''}

    const theDate = new Date(date);

    if(!theDate){return ''}

    let day: string = (theDate.getUTCDate()).toString();
    const fullYear = theDate.getUTCFullYear();
    const monthNumber = theDate.getUTCMonth() +1;

    if(~~day < 10){day = `0${day}`}
    const monthString = getMonthName(monthNumber)

    return [day, monthString, fullYear].join(' ')

}
export enum MONTHS {
    'janvier' = 1,
    'février' = 2,
    'mars' = 3,
    'avril' = 4,
    'mai' = 5,
    'juin' = 6,
    'juillet' = 7,
    'août' = 8,
    'septembre' = 9,
    'octobre' = 10,
    'novembre' = 11,
    'décembre' = 12,
}
export function getEnumKeyByValue(enumObject: typeof MONTHS, value: number): string | undefined {
    return Object.keys(enumObject).find(key => enumObject[key as keyof typeof MONTHS] === value);
}
export function getMonthName(month: number): string{
    return getEnumKeyByValue(MONTHS, month) ?? ''
}
