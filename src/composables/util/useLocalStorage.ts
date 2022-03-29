export default function useLocalStorage(){
    const localStorage = window.localStorage
    function setLocalItem(key:string,value:string){
        localStorage.setItem(key,value)
    }
    function getLocalItem(key:string):string | null{
        return localStorage.getItem(key)
    }
    return {
        setLocalItem,
        getLocalItem,
    }
}