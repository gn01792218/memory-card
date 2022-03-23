export default function useRandom (min:number=0,max:number=10){
    let minNum = min
    let maxNum = max
    let outputNum = Math.floor(Math.random()*(max-min)+min)
    return {
        outputNum
    }
}