import IntroImage from "../assets/images/HomePage/game_home_img.png";
import GameLogo from "../assets/images/HomePage/game_logo.png";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.base_cntnr}>
      <div className={styles.main_cntnr}>
        <div className={styles.left_cntnr}>
          <div className={styles.img_cntnr}>
            <img src={IntroImage} alt="game intro image" />
          </div>
        </div>
        <div className={styles.right_cntnr}>
          <div className={styles.logo_cntnr}>
            <img src={GameLogo} alt="game logo" />
          </div>
          <h1 className={styles.game_title}>Globetrotter</h1>
          <span className={styles.game_sub_title}>Destination Challenge</span>
          <button className={styles.play_btn}>Play Game</button>
        </div>
      </div>
    </div>
  );
};
