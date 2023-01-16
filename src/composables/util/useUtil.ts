export default function useUtil (){
    function random(min:number=0,max:number=10){
        return Math.floor(Math.random()*(max-min)+min)
    }
    function getAssetsFileURL(url:string){
        let Url = new URL(`../../assets/${url}`,import.meta.url).href
        console.log('傳入url字串',url)
        console.log('meta.url',import.meta.url)
        console.log('最終輸出的URL',Url)
        return Url
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