import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom'

import { Home } from "./Pages/home"
import { Projects } from "./Pages/Projects"
import { About } from "./Pages/About"
import { Layout } from './Layout';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
