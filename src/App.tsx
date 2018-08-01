import * as React from 'react';
import { IAppState } from './IAppState';
import StoriesService from './services/stories';

import './assets/styles/App.css';

import { GameOverModal } from './components/GameOverModal';
import { MainGame } from './components/MainGame';
import { StreakCounter } from './components/StreakCounter';

class App extends React.Component<{}, IAppState> {
    private service: StoriesService;

    constructor(props: {}) {
        super(props);
        this.service = new StoriesService();
        this.state = {
            betweenStories: false,
            currentStory: this.service.getRandomStory(),
            gameOver: false,
            streak: 0
        };

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
        this.handleKeepPlayingPress = this.handleKeepPlayingPress.bind(this);
    }

    public handleButtonPress(selection: string): void {
        if (
            (selection === 'ONION' && this.state.currentStory.isSatire) ||
            (selection === 'NOT ONION' && !this.state.currentStory.isSatire)
        ) {
            this.setState({
                betweenStories: true,
                streak: this.state.streak + 1
            });
        }
        else {
            this.setState({ gameOver: true });
        }
    }

    public handleKeepPlayingPress(): void {
        this.setState({ 
            betweenStories: false,
            currentStory: this.service.getRandomStory()
        });
    }

    public handlePlayAgain(): void {
        this.setState({
            betweenStories: false,
            currentStory: this.service.getRandomStory(),
            gameOver: false,
            streak: 0
        });
    }

    public render() {
        return (
            <div className="main-container">
                <StreakCounter currentStreak={this.state.streak} />
                <MainGame 
                    betweenStories={this.state.betweenStories}
                    story={this.state.currentStory}
                    onButtonPress={this.handleButtonPress}
                    onKeepPlayingPress={this.handleKeepPlayingPress}
                />
                <GameOverModal
                    isShown={this.state.gameOver}
                    onPlayAgain={this.handlePlayAgain}
                    score={this.state.streak}
                    story={this.state.currentStory}
                />
            </div>
        );
    }
}

export default App;
