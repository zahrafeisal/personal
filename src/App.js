import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  // removed basename
  return (
    <div className='poppins-semibold full-body'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
