import { notOnionJson } from '../data/notonion';
import { onionJson } from '../data/theonion';
import { INewsStory } from "../INewsStory";

class StoriesService {
    private onionStories: INewsStory[];
    private notOnionStories: INewsStory[];
    private selectedIndices: number[];

    constructor() {
        this.onionStories = onionJson
                .filter(s => s.data.title.indexOf('The Onion') === -1 && s.data.url.indexOf('theonion') > -1)
                .map((p: any) => {
                    return {
                        title: p.data.title,
                        url: p.data.url,
                        isSatire: true
                    };
                }),
        this.notOnionStories = notOnionJson
                .map((p: any) => {
                    return {
                        title: p.data.title,
                        url: p.data.url,
                        isSatire: false
                    };
                }),
        this.selectedIndices = [-1];
    }

    /**
     * Get a combined array of all stories, real and fake
     */
    public getAllStories(): INewsStory[] {
        return [
            ...this.onionStories,
            ...this.notOnionStories
        ];
    }

    public getRandomStory(): INewsStory {
        const storyTypeRand: number = Math.random();
        const selectedStoryList = storyTypeRand > 0.5 ? this.notOnionStories : this.onionStories;
        let indexRand: number = -1;
        // make sure this isn't a story they've seen before
        while (this.selectedIndices.indexOf(indexRand) > -1) {
            indexRand = Math.floor(Math.random() * selectedStoryList.length);
        }
        this.selectedIndices.push(indexRand);
        return selectedStoryList[indexRand];
    }
}

export default StoriesService;
