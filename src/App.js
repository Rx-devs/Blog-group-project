import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import Contact from "./Pages/ContactUs/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
