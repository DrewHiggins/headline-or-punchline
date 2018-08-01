/**
 * Represents a news story posted on reddit, either from 
 * r/TheOnion or r/NotTheOnion
 */

export interface INewsStory {
    title: string;
    url: string;
    // true if the story is fake, false if it's real
    isSatire: boolean;
};