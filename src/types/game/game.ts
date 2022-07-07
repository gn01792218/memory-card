export interface Game {
    gameType: number,
    gameTheme: number,
}
export interface LevelObj extends Game {
    level: number,
    unlock: boolean,
}

export enum GameTypeEnum {
    other,
    memoryCard,
    mathGame
}
export enum GameThemeEnum {
    pokemon,
    ghostSlayer,
    sumikkoGurashi,
}