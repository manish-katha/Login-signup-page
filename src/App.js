import './App.css';
import {Home} from './components/home';
import {Login} from './components/login';
import {BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
