import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import SingleBlog from "./Pages/AllBlogs/SingleBlog/SingleBlog";
import AdminRoute from "./Pages/Authentication/AdminRoute/AdminRoute";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/Dashboard/Admin/ManageBlogs/ManageBlogs";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PostBlog from "./Pages/Dashboard/User/PostBlog/PostBlog";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Register/Register";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allBlogs" element={<PrivateRoute> <AllBlogs/> </PrivateRoute>} />
            <Route path="/blog/:blogId" element={<SingleBlog />} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
              <Route path={`/dashboard/postBlog`} element={<PostBlog></PostBlog>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin /> </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageBlogs`} element={<AdminRoute> <ManageBlogs /> </AdminRoute>}>
              </Route>
            </Route>
          </Routes>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
