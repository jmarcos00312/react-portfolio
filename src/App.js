
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar.js'
import Home from './component/Home.js'




function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
