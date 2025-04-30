import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Register from './Login/Register.jsx';
import Play from './MemoryCardGame/Play.css';
import Easy from './MemoryCardGame/MemoryEasy.jsx';
import Medium from './MemoryCardGame/MemoryMedium.jsx';
import MemoryCardGame from './MemoryCardGame/MemoryCardGame.jsx';
import Congratulations from "./MemoryCardGame/Congratulation.jsx";
import CongtEasy from "./MemoryCardGame/Congratseasy.jsx";
import CongtNormal from "./MemoryCardGame/Congratsnormal.jsx";
import History from './MemoryCardGame/History.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem('token');
  // };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/congratulations"
      element={isAuthenticated ? <Congratulations /> : <Navigate to="/login" />}
      />
     
      <Route path="/congt-easy"
      element={isAuthenticated ? <CongtEasy /> : <Navigate to="/login" />}
      />
      <Route path="/congt-normal"
      element={isAuthenticated ? <CongtNormal /> : <Navigate to="/login" />}
      />
        <Route path="/easy" 
       element={isAuthenticated ? <Easy /> : <Navigate to="/login" />}
        />
        <Route path="/medium" 
         element={isAuthenticated ? <Medium /> : <Navigate to="/login" />}
         />
        <Route
          path="/play"
          element={isAuthenticated ? <Play /> : <Navigate to="/login" />}
        />
  
        <Route
          path="/memory-card-game"
          element={isAuthenticated ? <MemoryCardGame /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


