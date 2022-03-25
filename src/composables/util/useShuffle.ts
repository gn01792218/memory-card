import useSwitch from '@/composables/util/useSwitch'
export default function useShuffle<T>(targetArr:T[]):T[]{
    const temp:T[] = targetArr
    for(let i=targetArr.length-1 ; i>0 ; i--){
        let r = Math.floor(Math.random()*(i+1))
        useSwitch(temp,i,r)
    }
    return temp
}