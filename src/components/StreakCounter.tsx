import * as React from 'react';

import '../assets/styles/StreakCounter.css';

export interface IStreakCounterProps {
    currentStreak: number;
}

export const StreakCounter = (props: IStreakCounterProps): React.ReactElement<IStreakCounterProps> => {
    return (
        <div className='counter-container'>
            <span className='counter-text'>
                Your Score: <strong>{props.currentStreak}</strong>
            </span>
        </div>
    );
}