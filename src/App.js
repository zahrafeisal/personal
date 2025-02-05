import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className='poppins-semibold'>
      <Router>
        <Routes>
          <Route path="/" exact component={<Login />} />
          <Route path="/home" component={<HomePage />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
