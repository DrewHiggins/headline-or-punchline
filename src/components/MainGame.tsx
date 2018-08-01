import * as React from 'react';
import { Container } from 'reactstrap';
import { INewsStory } from '../INewsStory';
import { StorySource } from './StorySource';

import '../assets/styles/MainGame.css';
import { GameButtons } from './GameButtons';

export interface IMainGameProps {
    betweenStories: boolean;
    story: INewsStory;
    onButtonPress: (selection: string) => void;
    onKeepPlayingPress: () => void;
}

export const MainGame = (props: IMainGameProps): React.ReactElement<IMainGameProps> => {
    return (
        <Container className="main-game-container">
            <h1 className='headline'>
                "{props.story.title}"
            </h1>
            {
                props.betweenStories ?
                <StorySource
                    onKeepPlayingPress={props.onKeepPlayingPress}
                    title={props.story.title}
                    url={props.story.url}
                    wasSatire={props.story.isSatire}
                />
                :
                <GameButtons onButtonPress={props.onButtonPress} />
            }
        </Container>
    );
};