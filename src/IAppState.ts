import { INewsStory } from "./INewsStory";

export interface IAppState {
    betweenStories: boolean;
    currentStory: INewsStory;
    gameOver: boolean;
    streak: number;
}