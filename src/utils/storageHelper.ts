import "client-only";

export function getLocalStorage(key: string) : string {
    const currentValue = localStorage.getItem(key);
    if(currentValue){
        return JSON.parse(currentValue)
    } else {
        return ''
    }
    
}

export function setLocalStorage(key: string, value:string|number){
    localStorage.setItem(key, JSON.stringify(value));
}