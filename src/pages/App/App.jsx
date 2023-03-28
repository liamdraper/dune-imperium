import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import RulesPage from '../RulesPage/RulesPage';
import GamePage from '../GamePage/GamePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewGamePage from '../NewGamePage/NewGamePage';
import LoadGamePage from '../LoadGamePage/LoadGamePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/newGame" element={<NewGamePage />} />
              <Route path="/loadGame" element={<LoadGamePage />} />
              <Route path="/game/:id" element={<GamePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
