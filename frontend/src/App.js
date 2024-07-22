import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={LoginPage}/>
        <Route path="/home" Component={HomePage}/>
      </Routes>
    </div>
  );
}

export default App;
