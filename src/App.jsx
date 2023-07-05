import { Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Projects from "./pages/Projects"


function App() {

  return (
    <main className="min-h-screen">
      
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       
      </Routes>
      
    </main>
  )
}

export default App
