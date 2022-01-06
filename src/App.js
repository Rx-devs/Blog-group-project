import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/ContactUs/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
