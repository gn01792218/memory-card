export interface Game {
    gameType: GameTypeEnum,
    gameTheme: GameThemeEnum,
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
export enum GameDifficulty {
    SUPEREASY="SUPEREASY",
    EASY="EASY",
    MEDIUM="MEDIUM",
    HARD="HARD",
    SUPERHARD="SUPERHARD"
}