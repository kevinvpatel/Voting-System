import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';
import {  Routes, Route, Link } from "react-router-dom";
import Voting from './components/voting';
import Rewards from './components/rewards';
// import './assets/main.css'

function App() {
  return (
    <div >
    
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/voting" element={<Voting/>} />
                <Route path="/rewards" element={<Rewards/>} />
            </Routes>
      
    </div>
  );
}

export default App;
