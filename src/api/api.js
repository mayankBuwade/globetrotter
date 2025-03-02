import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/quiz`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching quiz:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const checkAnswer = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/check-answer`, data);
    return response.data;
  } catch (error) {
    console.error(
      "Error checking answer:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const saveResult = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/save-result`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error checking answer:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchUserData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/user-result/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
