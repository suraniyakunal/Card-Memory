
## Card Memory Game - Simplified Skill Test

### 🎯 **Objective:**
Build a small part of a card memory game based on Fullstack developer role.


### 🛠️ **Tech Stack:**
- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB (only if applicable)
- Web3: MetaMask integration (only if applicable)

### 🚀 **Setup Guide:**
1. Clone the repository:
   ```bash
   git clone https://github.com/testadminia/Card-Memory.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Card-Memory
   ```
3. Set up the backend:
   ```bash
   cd ./backend
   npm install
   npm run dev
   ```
4. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
5. Visit `http://localhost:5173` to see the project.

---

### 🧩 **Task Done for Fullstack Developer Role :**

#### **Frontend Developer:**
- Style the login page to be visually appealing and responsive.

=>  To see the login page please Visit `http://localhost:5173/login`.

- Create a modal dialog for level selection (Easy, Medium, Hard).

=> To see the dialog Modal made by me go to Card-Memory/frontend/src/main.jsx,
   then go to line 52 change the component <Play/> to <Play2/> and save the changes,
   Visit `http://localhost:5173/Play`

#### **Backend Developer:**
- Implement a simple API endpoint to save game results.

=> To see the schema I made to store the scores check Card-Memory/backend/models/GameResult.js. Play the game to store it. 

- Create a route to fetch the game result history (no need for complex authentication).

=> To check if the GameResult is stored, Use Postman for Get and Post requests. Also use this path `http://localhost:5173/api/history` to record data and display it.


#### **Full Stack Developer:**
- Complete both the Frontend and Backend tasks.

=> Already did in the upper sections.

- Integrate the API to display the game result history on a new page.

=> To see the game results check `http://localhost:5173/history`.


### 📝 **Submission:**
- Once completed, please submit your work to **[admin@belolabs.com](mailto:admin@belolabs.com)**.
- Share any notes, assumptions, or challenges you encountered.

=> I wanna share some things. While setting up the project the frontend wasn't working properly and had a lot of errors which I had to to solve first to run it. Errors like Syntax error, Importing errors etc. It should have completed in 3 hours but because of the problems with the file it took more than that. I completed every task mentioned for Fullstack developer role. This is all I have to say. Have a nice day and I'm looking forward to your positive response.
