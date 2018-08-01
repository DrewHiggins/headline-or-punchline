import 'font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { INewsStory } from '../INewsStory';

export interface IGameOverModalProps {
    isShown: boolean;
    onPlayAgain: () => void;
    score: number;
    story: INewsStory;
}


export const GameOverModal = (props: IGameOverModalProps): React.ReactElement<IGameOverModalProps> => {
    const openTweetWindow = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=I%20scored%20${props.score}%20points%20on%20headlineorpunchline.com.%20Give%20it%20a%20try%20yourself!%20%23fakenews%3F`,
            "_blank", 
            "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
    };

    return (
        <Modal
            isOpen={props.isShown}
        >
            <ModalHeader>
                Game Over!
            </ModalHeader>
            <ModalBody>
                <p>
                    Nope! That one was {props.story.isSatire ? 'satire' : 'real'}!
                    Don't believe it?&nbsp;
                    <strong>
                        <a target="blank" href={props.story.url}>Here's</a>
                    </strong>&nbsp;the story.
                </p>
                <p>However, you managed to get <strong>{props.score}</strong> points!</p>
                <Button 
                    color="primary"
                    onClick={openTweetWindow}
                >
                    <i className="fa fa-twitter" />&nbsp;
                    Share your score on Twitter
                </Button>
            </ModalBody>
            <ModalFooter>
                <Button 
                    color='success'
                    onClick={props.onPlayAgain}
                >
                    Play Again
                </Button>
            </ModalFooter>
        </Modal>
    );
};