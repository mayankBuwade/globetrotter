import Box from "../components/BasicComponents/Box";
import GameLogo from "../assets/images/HomePage/game_logo.png";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  return (
    <div className={styles.main_cntnr}>
      <Box customClass={styles.result_card}>
        <h2 className={styles.card_title}>Your Result</h2>
        <div className={styles.top_cntnr}>
          <div className={styles.card_text_cntnr}>
            <span className={styles.card_text}>Correct Answers: 0</span>
            <span className={styles.card_text}>Incorrect Answers: 0</span>
            <span className={styles.card_text}>Score: 0</span>
          </div>
          <div className={styles.logo_cntnr}>
            <img src={GameLogo} alt="game logo" />
          </div>
        </div>
        <div className={styles.btm_cntnr}>
          <button className={styles.play_again_btn}>Play Again</button>
          <button className={styles.share_btn}>Share with Friends</button>
        </div>
      </Box>
    </div>
  );
};
export default ResultPage;
