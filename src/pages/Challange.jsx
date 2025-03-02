import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../api/api";
import GameLogo from "../assets/images/HomePage/game_logo.png";
import styles from "./ResultPage.module.css";
import Box from "../components/BasicComponents/Box";

const Challange = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchUserData(id);
      setUserData(resp);
    };
    if (id) {
      fetchData();
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className={styles.main_cntnr}>
      <Box customClass={styles.result_card}>
        <h2 className={styles.card_title}>{userData?.username} Result</h2>
        <div className={styles.top_cntnr}>
          <div className={styles.card_text_cntnr}>
            <span className={styles.card_text}>
              Correct Answers: {userData?.correctAnswers}
            </span>
            <span className={styles.card_text}>
              Incorrect Answers: {userData?.incorrectAnswers}
            </span>
            <span className={styles.card_text}>
              Score: {userData?.totalScore}
            </span>
          </div>
          <div className={styles.logo_cntnr}>
            <img src={GameLogo} alt="game logo" />
          </div>
        </div>
        <div className={styles.btm_cntnr}>
          <button
            className={styles.play_again_btn}
            onClick={() => navigate("/quiz")}
          >
            Play
          </button>
        </div>
      </Box>
    </div>
  );
};
export default Challange;
