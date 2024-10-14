import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Service from "./components/Service"
import Pagenotfound from "./components/Pagenotfound"


const App = () => {
  return (
    <div  >
      <Nav />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
      
    </div>
  )
}

export default App
