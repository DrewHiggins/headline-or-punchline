import * as React from 'react';
import { Button } from 'reactstrap';

export interface IStorySourceProps {
    onKeepPlayingPress: () => void;
    title: string;
    url: string;
    wasSatire: boolean;
}

export const StorySource = (props: IStorySourceProps): React.ReactElement<IStorySourceProps> => {
    const realStorySourceInfo = (
        <p className='info-text'>
            Yes! It's real! Click for the story:
            <br />
            <strong>
                <a href={props.url} target="blank">{props.title}</a>
            </strong>
        </p>
    );
    const satireStorySourceInfo = (
        <p className='info-text'>
            Obviously, that was satire. Here's the <em>The Onion</em> article:
            <br/>
            <strong>
                <a href={props.url} target="blank">{props.title}</a>
            </strong>
        </p>
    );
    return (
        <div className='source-container'>
            {props.wasSatire ? satireStorySourceInfo : realStorySourceInfo}
            <Button
                className='keep-playing-button'
                color='dark' 
                onClick={props.onKeepPlayingPress}
                size="lg"
            >
                ➡️ Keep Playing
            </Button>
        </div>
    );
}