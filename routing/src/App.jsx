import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Service from "./components/Service"
import Pagenotfound from "./components/Pagenotfound"
import List from "./components/List"
import ListItem from "./components/ListItem"


const App = () => {
  return (
    <div  >
      <Nav />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />

        <Route path='list' element={<List />} />
        <Route path='list/:i' element={<ListItem />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
      
    </div>
  )
}

export default App
