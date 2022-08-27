export interface Game<T> { //遊戲<泛型> T是哪一款遊戲
    gameid: number,
    gameName: string,
    gameDescript : string,
    gameType: GameTypeEnum,
    currentGameDifficulty:GameDifficulty,
    levels:Levels<T>
}
export interface Levels <T>{  //(使用indexProperty)全部都是LevelItemBase[]型態的東西，但屬性、名稱可以自訂義
    [properties:string]:T[],   
}
export interface LevelItemBase {  //這一個應該是在Game裡面的東西
    level: number, //第幾關
    unlock: boolean,
}
export enum GameTypeEnum {
    other,
    memoryCard,
    mathGame
}
export enum GameThemeEnum { //通用的遊戲主題，每款遊戲可以自由選擇要不要使用
    pokemon,
    ghostSlayer,
    sumikkoGurashi,
}
export enum GameDifficulty {
    SUPEREASY,
    EASY,
    MEDIUM,
    HARD,
    SUPERHARD
}