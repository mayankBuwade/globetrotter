import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Box from "../components/BasicComponents/Box";
import GameLogo from "../assets/images/HomePage/game_logo.png";
import styles from "./ResultPage.module.css";
import { saveResult } from "../api/api";

const ResultPage = () => {
  const navigate = useNavigate();
  const { correctAnswers, incorrectAnswers, totalScore } = useSelector(
    (state) => state.quiz
  );
  const [shareableLink, setShareableLink] = useState("");

  const handleShare = async () => {
    let username = "";
    let isUnique = false;

    while (!isUnique) {
      username = prompt("Enter a unique username to share results:");
      if (!username) return;

      try {
        const response = await saveResult({
          username,
          correctAnswers,
          incorrectAnswers,
          totalScore,
        });

        setShareableLink(response.shareableLink);

        // Open WhatsApp share
        const message = `Hey! I scored ${totalScore} points in the quiz. Can you beat me? Play here: ${response.shareableLink}`;
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`,
          "_blank"
        );

        isUnique = true; // Break out of loop once username is unique
      } catch (error) {
        console.error("Error sharing result:", error);
        if (
          error.response &&
          error.response.data.error ===
            "Username already taken. Choose another one."
        ) {
          alert(
            "This username is already taken. Please enter a different one."
          );
          // Loop continues until user enters a unique username
        } else {
          alert(
            "An error occurred while saving your result. Please try again."
          );
          return; // Exit on other errors
        }
      }
    }
  };

  return (
    <div className={styles.main_cntnr}>
      <Box customClass={styles.result_card}>
        <h2 className={styles.card_title}>Your Result</h2>
        <div className={styles.top_cntnr}>
          <div className={styles.card_text_cntnr}>
            <span className={styles.card_text}>
              Correct Answers: {correctAnswers}
            </span>
            <span className={styles.card_text}>
              Incorrect Answers: {incorrectAnswers}
            </span>
            <span className={styles.card_text}>Score: {totalScore}</span>
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
            Play Again
          </button>
          <button className={styles.share_btn} onClick={handleShare}>
            Share with Friends
          </button>
        </div>
      </Box>
    </div>
  );
};

export default ResultPage;
