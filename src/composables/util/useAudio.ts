import { computed } from "vue"
import { useStore } from "vuex"

export default function useAudio(){
    //store
    const store = useStore()
    const gameSound = store.state.gameSound
    const gameSoundControlEle = computed<HTMLElement>(()=>{
        return gameSound.audioConTrolEle
    })
    const hoverSoundEle = computed<HTMLAudioElement>(()=>{
        return gameSound.hoverSoundEle
    })
    const turnSoundEle = computed<HTMLAudioElement>(()=>{
        return gameSound.turnSoundEle
    })
    const matchSoundEle = computed<HTMLAudioElement>(()=>{
        return gameSound.matchSoundEle
    })
    const passSoundEle = computed<HTMLAudioElement>(()=>{
        return gameSound.passSoundEle
    })
    //方法
    //所有方法都必須在mounted後才可以使用
    function loadAudioControlElement(ele:HTMLElement){
        store.commit('gameSound/getaudioControlEle',ele)
    }
    function loadHoverSoundEle(ele:HTMLElement){
        store.commit('gameSound/getHoverSoundEle',ele)
    }
    function loadTurnSoundEle(ele:HTMLAudioElement){
        store.commit('gameSound/getTurnSoundEle',ele)
    }
    function loadMatchSoundEle(ele:HTMLAudioElement){
        store.commit('gameSound/getMatchSoundEle',ele)
    }
    function loadPassSoundEle(ele:HTMLAudioElement){
        store.commit('gameSound/getPassSoundEle',ele)
    }
    function playAudio(audio:HTMLAudioElement){
        audio.play()
    }
    function pauseAudio(audio:HTMLAudioElement){
        audio.pause()
    }
    function stopAudio(audio:HTMLAudioElement){
        pauseAudio(audio)
        audio.currentTime = 0
    }
    function rePlayAudio(audio:HTMLAudioElement){
        audio.currentTime = 0
        playAudio(audio)
    }
    function setAudioVolume(audio:HTMLAudioElement,volume:number){
        playAudio(audio)
        audio.volume = volume
    }
    function loopPlay(audio:HTMLAudioElement){
        audio.loop = true
        playAudio(audio)
    }
    function isAudioPlayed(audio:HTMLAudioElement){
        return audio.played.length>1
    }
    function setAudiomouted(audio:HTMLAudioElement,mouted:boolean){
        audio.muted = mouted
    }
    function setAllAudiomouted(audioControlEle:HTMLElement,mouted:boolean){
        audioControlEle?.childNodes.forEach((audio:any)=>{
           let audioElement = document.getElementById(audio.id) as HTMLAudioElement
           stopAudio(audioElement)
           setAudiomouted( audioElement,mouted)
        })
        store.commit('game/setGameSoundMouted',mouted)
    }
    return {
        //data
        gameSoundControlEle,
        hoverSoundEle,
        turnSoundEle,
        matchSoundEle,
        passSoundEle,
        //methods
        loadAudioControlElement,
        loadHoverSoundEle,
        loadTurnSoundEle,
        loadMatchSoundEle,
        loadPassSoundEle,
        playAudio,
        pauseAudio,
        stopAudio,
        rePlayAudio,
        setAudioVolume,
        loopPlay,
        isAudioPlayed,
        setAudiomouted,
        setAllAudiomouted,
    }
}