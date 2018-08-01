import * as React from 'react';
import { Button, Col, Row } from 'reactstrap';

export interface IGameButtonsProps {
    onButtonPress: (selection: string) => void;
}

export const GameButtons = (props: IGameButtonsProps): React.ReactElement<IGameButtonsProps> => {
    return (
        <div>
            <p className='info-text'>
                Is this a headline from a real news story or <em>The Onion</em>?
            </p>
            <Row>
                <Col size={6} sizes="md">
                    <Button 
                        className='option-button' 
                        color="success"
                        size="lg"
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => props.onButtonPress('NOT ONION')}
                    >
                        🗞 Yes! This is a real headline!
                    </Button>
                </Col>
                <Col size={6} sizes="md">
                    <Button 
                        className='option-button'
                        color="dark"
                        size="lg"
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => props.onButtonPress('ONION')}
                    >
                        🚫 No way! This has to be satire
                    </Button>
                </Col>
            </Row>
        </div>
    );
};