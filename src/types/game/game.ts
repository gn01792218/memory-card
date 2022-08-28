export interface Game { 
    gameid: number,
    gameName: string,
    gameDescript : string,
    gameType: GameTypeEnum,
    
}

export interface Diffcutable { //難度區分
    currentGameDifficulty:GameDifficulty,
}

export interface DiffcutableLeves <T> extends Diffcutable{ //有難度分級的關卡
    difficultyLeves:{
        superEasy:T[],
        easy:T[],
        medium:T[],
        hard:T[],
        superHard:T[] 
    }
}

export interface LevelItemBase {  //基本關卡屬性
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