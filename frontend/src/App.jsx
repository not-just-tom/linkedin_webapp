import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom'


import "./App.css";
import { Home } from "./Pages/home"
import { Projects } from "./Pages/Projects"
import { About } from "./Pages/About"
import { Layout } from './Layout';
import Footer from './Components/Footer';

export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {


  return (

    <body>
      
      <div className='content'>
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
      <footer>
        <Footer/>
      </footer >
    </body>
  )
}

export default App
