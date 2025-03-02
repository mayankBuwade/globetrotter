# Globetrotter - Travel Quiz Game

## 🌍 About the Game

Globetrotter is an interactive travel quiz game where players guess the correct destination based on clues. The game presents **four options** for each quiz question, and the player must choose the correct one. The goal is to test and improve the player's knowledge of famous locations worldwide while making learning fun and engaging.

## 🎮 Gameplay Mechanics

1. The game fetches **random destinations** from the database.
2. The player is provided with **clues** about a specific destination.
3. The game displays **four different options** to the player.
4. The player selects an answer and submits it.
5. The backend verifies the answer and returns whether it is **correct or incorrect**.
6. The game continues with a new question.

## 🚀 Tech Stack

### **Frontend**

- **React.js** - Core framework for building the user interface.
- **react-router-dom (v6.30.0)** - Handles navigation between different pages.
- **Redux** - Used for data centralization.

### **Backend**

- **Node.js** - Server-side runtime.
- **Express.js** - Backend framework for handling API routes.
- **MongoDB Atlas** - Cloud-based NoSQL database to store destinations.
- **Mongoose** - ODM for database interaction.

## 📂 Folder Structure

```
globetrotter-backend/
├── backend/
│   ├── models/
│   │   ├── Destination.js    # Mongoose schema for destinations
│   │   ├── User.js           # Mongoose schema for user
│   ├── routes/
│   │   ├── quizRoutes.js     # API routes for quiz logic
│   │   ├── userRoutes.js     # API routes for user data store and share
│   ├── server.js             # Express server setup
│   ├── .env                  # Environment variables
│
├── frontend/
│   ├── public/
│   │   ├── _redirects        # Configure Server to Serve index.html for All Routes
│   ├── src/
│   │   ├── api/              # all the api related to gameplay and user data store and share
│   │   ├── components/       # UI components
│   │   ├── pages/            # Page components
│   │   ├── App.js            # Main app component
│   │   ├── index.js          # Entry point
│   ├── .env                  # Frontend environment variables
│
├── README.md                 # Project documentation
```

## 🔧 Backend API Endpoints

### **1️⃣ Get a Quiz Question**

```
GET /api/quiz
```

- **Description:** Fetches a new quiz question with four random destination options.
- **Response Example:**

```json
{
  "id": "67c40e51b149ab556983f4cd",
  "clues": [
    "A famous landmark located in Greece.",
    "One of the most visited places in Greece.",
    "Known for its historical and cultural significance."
  ],
  "options": [
    { "name": "Santorini" },
    { "name": "Pyramids of Giza" },
    { "name": "Great Wall of China" },
    { "name": "Forbidden City" }
  ],
  "funFacts": [
    "Santorini is a major attraction in Greece.",
    "It has a rich history and unique architecture.",
    "Millions of tourists visit every year."
  ]
}
```

### **2️⃣ Check the Player's Answer**

```
POST /api/check-answer
```

- **Request Body:**

```json
{
  "destinationId": "67c40e51b149ab556983f4bf",
  "selectedAnswer": "Forbidden City"
}
```

- **Response:**

```json
{
  "correct": true
}
```

### **3️⃣ Store the Player's Result**

```
POST /api/users/save-result
```

- **Request Body:**

```json
{
  "username": "name",
  "correctAnswers": 5,
  "incorrectAnswers": 2,
  "totalScore": 55
}
```

### ** 4️⃣ Get the Player's Result by id**

```
GET /api/users/user-result/${id}
```

- **Response:**

```json
{
  "_id": "67c443e5cb16c820483845a3",
  "userId": "e87c55b2-42db-4382-8c5a-39196d20c497",
  "username": "rov",
  "correctAnswers": 2,
  "incorrectAnswers": 1,
  "totalScore": 15,
  "__v": 0
}
```

## 🌐 Environment Variables

Create a **.env** file in the backend and frontend directories to configure the project.

### **Backend (.env file)**

```
PORT=
FRONTEND_URL=
MONGO_URI=
```

### **Frontend (.env file)**

```
VITE_API_BASE_URL=
```

## 🛠️ Setup and Installation

### **1️⃣ Clone the repository**

```sh
git clone git@github.com:mayankBuwade/globetrotter-backend.git
cd globetrotter-backend
```

### **2️⃣ Install Backend Dependencies**

```sh
npm install
```

### **3️⃣ Start the Backend Server**

```sh
npm start
```

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/mayankBuwade/globetrotter.git
cd globetrotter
```

### **4️⃣ Install Frontend Dependencies**

```sh
npm install
```

### **5️⃣ Start the Frontend**

```sh
npm start
```

## 📌 Future Enhancements

- **Leaderboard** to track high scores.
- **Time-based challenges** for increased difficulty.
- **More destinations** for a richer experience.

Happy Learning! 🎉
