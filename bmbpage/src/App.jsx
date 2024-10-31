import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./homepage/Homepage"
import Blog from "./blog/Blog"
import About from "./about/About"
import Contact from "./contact/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
