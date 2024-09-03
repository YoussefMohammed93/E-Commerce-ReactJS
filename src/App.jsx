import Men from "./components/Men";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Women from "./components/Women";
import Contact from "./components/Contact";
import Collections from "./components/Collections";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
