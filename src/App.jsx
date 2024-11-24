import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import News from "./components/News";
import About from "./components/About";
import Info from "./components/Info";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}