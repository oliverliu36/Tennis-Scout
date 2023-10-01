import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TournamentPage from './components/TournamentPage/TournamentPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/tournament/:name" Component={TournamentPage}/>
    </Routes>
  </Router>
  );
}

export default App;
