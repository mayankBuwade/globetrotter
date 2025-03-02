import { useState } from "react";
import Box from "../components/BasicComponents/Box";
import styles from "./QuizPage.module.css";

const QuizPage = () => {
  const [gamePlayButtonText, setGamePlayButtonText] = useState("Next");

  return (
    <div className={styles.base_cntnr}>
      <div className={styles.main_cntnr}>
        <div className={styles.top_cntnr}>
          <Box customClass={styles.card}>
            <h2 className={styles.card_title}>City Clue</h2>
            <div className={styles.card_text_cntnr}>
              <span className={styles.card_text}>
                Clue 1: This is the clue 1
              </span>
              <span className={styles.card_text}>
                Clue 2: This is the clue 2
              </span>
            </div>
          </Box>
          <Box customClass={styles.card}>
            <h2 className={styles.card_title}>Choose Your Destination</h2>
            <div className={styles.btn_cntnr}>
              <button className={styles.city_btn}>City 1</button>
              <button className={styles.city_btn}>City 2</button>
              <button className={styles.city_btn}>City 3</button>
              <button className={styles.city_btn}>City 4</button>
            </div>
          </Box>
          <Box customClass={styles.card}>
            <h2 className={styles.card_title}>Fun Fact</h2>
            <span className={styles.card_text}>
              Sydney is home to the world's largest natural harbor.
            </span>
          </Box>
          <button className={styles.game_play_option_btn} disabled>
            {gamePlayButtonText}
          </button>
        </div>
        <Box customClass={`${styles.card} ${styles.btm_card}`}>
          <h2 className={styles.btm_card_title}>Your Score:- 0</h2>
          <div className={styles.card_text_cntnr}>
            <span className={styles.card_text}>Correct Answers: 0</span>
            <span className={styles.card_text}>Incorrect Answers: 0</span>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default QuizPage;
