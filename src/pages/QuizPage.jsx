import { useEffect, useState } from "react";
import Box from "../components/BasicComponents/Box";
import { useDispatch, useSelector } from "react-redux";
import { checkAnswer, fetchQuizData } from "../api/api";
import styles from "./QuizPage.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  incrementCorrect,
  incrementIncorrect,
  resetQuiz,
} from "../store/store";

const AnsweredRight = "AnsweredRight";
const AnsweredWrong = "AnsweredWrong";
const NotAnswered = "NotAnswered";

const QuizPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { correctAnswers, incorrectAnswers, totalScore } = useSelector(
    (state) => state.quiz
  );
  const [quizData, setQuizData] = useState({});
  const [funFact, setFunFact] = useState("");
  const [optionsDisable, setOptionsDisable] = useState(false);
  const [quizSate, setQuizState] = useState(NotAnswered);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const getQuizData = async () => {
    const resp = await fetchQuizData();
    console.log(resp);
    setQuizData(resp);
  };

  useEffect(() => {
    dispatch(resetQuiz());
    getQuizData();
  }, [dispatch]);

  const handleSelectedOption = async (answer) => {
    setOptionsDisable(true);
    const resp = await checkAnswer({
      destinationId: quizData.id,
      selectedAnswer: answer,
    });
    console.log(resp.correct);
    if (resp.correct) {
      setQuizState(AnsweredRight);
      setShowConfetti(true);
      dispatch(incrementCorrect());
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      setQuizState(AnsweredWrong);
      setTimeout(() => alert("😢 Incorrect Answer!"), 500);
      dispatch(incrementIncorrect());
      setFunFact(
        quizData?.funFacts[
          Math.floor(Math.random() * quizData?.funFacts.length)
        ]
      );
    }
  };

  const handleFetchNewQuiz = async () => {
    setQuizState(NotAnswered);
    setFunFact("");
    await getQuizData();
    setOptionsDisable(false);
  };

  return (
    <div className={styles.base_cntnr}>
      <div className={styles.main_cntnr}>
        <div className={styles.top_cntnr}>
          <Box customClass={styles.card}>
            <h2 className={styles.card_title}>City Clue</h2>
            <div className={styles.card_text_cntnr}>
              {quizData?.clues ? (
                <>
                  <span className={styles.card_text}>
                    Clue 1: {quizData?.clues[0]}
                  </span>
                  <span className={styles.card_text}>
                    Clue 2: {quizData?.clues[1]}
                  </span>
                </>
              ) : (
                <Skeleton count={2} />
              )}
            </div>
          </Box>
          <Box customClass={styles.card}>
            <h2 className={styles.card_title}>Choose Your Destination</h2>
            <div className={styles.btn_cntnr}>
              {quizData?.options ? (
                quizData?.options?.map((each) => (
                  <button
                    onClick={() => handleSelectedOption(each.name)}
                    key={each.name}
                    className={styles.city_btn}
                    disabled={optionsDisable}
                  >
                    {each.name}
                  </button>
                ))
              ) : (
                <Skeleton count={1} />
              )}
            </div>
          </Box>
          {funFact && (
            <Box customClass={styles.card}>
              <h2 className={styles.card_title}>Fun Fact</h2>
              <span className={styles.card_text}>{funFact}</span>
            </Box>
          )}
          <div className={styles.other_optns}>
            <button
              className={styles.game_play_option_btn}
              disabled={quizSate === NotAnswered}
              onClick={handleFetchNewQuiz}
            >
              Next
            </button>
            <button
              className={styles.game_play_option_btn}
              onClick={() => navigate("/result")}
            >
              Finish
            </button>
          </div>
        </div>
        <Box customClass={`${styles.card} ${styles.btm_card}`}>
          <h2 className={styles.btm_card_title}>Your Score:- {totalScore}</h2>
          <div className={styles.card_text_cntnr}>
            <span className={styles.card_text}>
              Correct Answers: {correctAnswers}
            </span>
            <span className={styles.card_text}>
              Incorrect Answers: {incorrectAnswers}
            </span>
          </div>
        </Box>
      </div>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default QuizPage;
