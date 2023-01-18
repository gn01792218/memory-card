export default function useUtil (){
    function random(min:number=0,max:number=10){
        return Math.floor(Math.random()*(max-min)+min)
    }
    function getAssetsFileURL(url:string){
        return new URL(`../../assets/${url}`,import.meta.url).href
    }
    function getEnumValueList<T>(enumType:T){
        return Object.keys(enumType).filter(key=>isNaN(Number(key)))
    }
    return {
        random,
        getAssetsFileURL,
        getEnumValueList,
    }
}