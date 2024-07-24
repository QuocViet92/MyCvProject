import './App.css';
import Layout from './Component/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectHost from './Pages/ProjectHost';
import ProjectDetail from './Pages/Project/ProjectDetail';
import Contact from './Pages/Contact';
import './server'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='project' element={<ProjectHost/>} />
          <Route path="project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


