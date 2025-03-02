import { configureStore, createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalScore: 0,
  },
  reducers: {
    incrementCorrect: (state) => {
      state.correctAnswers += 1;
      state.totalScore += 10;
    },
    incrementIncorrect: (state) => {
      state.incorrectAnswers += 1;
      state.totalScore -= 5;
    },
    resetQuiz: (state) => {
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.totalScore = 0;
    },
  },
});

export const { incrementCorrect, incrementIncorrect, resetQuiz } =
  quizSlice.actions;

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;
