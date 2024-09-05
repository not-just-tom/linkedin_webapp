import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom'
import "./App.css";

import { Home } from "./Pages/home"
import { Projects } from "./Pages/Projects"
import { About } from "./Pages/About"
import { Layout } from './Layout';


function App() {


  return (
    <div className='App'>
      <div className='gradient__bg1'>
      <Router>
        <div className="Routes">
          <Routes>
            <Route  element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Projects" element={<Projects/>} />
            </Route>
          </Routes>
        </div>
      </Router>
      </div>
    </div>
  )
}

export default App
