/** @format */

import BodyContainer from '@@components/layouts/BodyContainer';
import FlipCard from './FlipCard';
import styles from './GameScreen.module.scss';

const GameScreen = () => {
    return (
        <div className={styles.game_screen}>
            <BodyContainer className={styles.game_screen__cards}>
                {Array.from({ length: 30 }).map(() => {
                    return <FlipCard key={null} />;
                })}
            </BodyContainer>
        </div>
    );
};

export default GameScreen;
