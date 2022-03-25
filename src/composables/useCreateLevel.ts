import { reactive } from 'vue'
import { levelObj }from '@/types/global'
export default function useCreateLevel(){
    const levelListData = reactive<levelObj[]>([])
    const leveCardNumList = [10,10,12,12,14,14,16,16,16,16]
    const levelTimeCountList = [0,0,0,0,30,30,30,30,25,25]
    function createLevelData(){
        for(let i=0 ; i<10 ; i++){
            levelListData.push({
                level:i,
                cardNum:leveCardNumList[i],
                timeCount:levelTimeCountList[i],
            })
        }
    }
    createLevelData()
    return {
        levelListData
    }
}