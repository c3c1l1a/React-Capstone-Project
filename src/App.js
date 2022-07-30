import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Profile from './components/profile/Profile';
import Missions from './components/missions/Missions';
import Rockets from './components/rockets/Rockets';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
