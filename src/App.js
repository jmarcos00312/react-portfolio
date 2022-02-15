
import './App.css';
import { Routes, Route } from "react-router-dom"
import ManualNavbar from './component/navbar/ManualNavbar'
import Home from './component/home/Home.js'
import Project from './component/projects/Project.js'
import Blogs from './component/blogs/Blogs'
import Contact from './component/contact/Contact'




function App() {

  return (
    <div className="app">
      <ManualNavbar />
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
