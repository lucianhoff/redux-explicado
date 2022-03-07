

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Personajes from "./pages/Personajes"
import Capitulos from "./pages/Capitulos"
import PersonajesModoviejo from "./pages/PersonajesModoviejo"
function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/capitulos" element={<Capitulos />} />
        <Route path="/personajes2" element={<PersonajesModoviejo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
