import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
/* import Home from "./Pages/Home";
 */ import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Protected/ProtectedRoute";
import LogoutButton from "./Auth/LogoutButton";
function App() {
  return (
    <div style={{}}>
      <Routes>
        {/*         <Route element={<ProtectedRoute />}> */}
        <Route element={<Layout />}>
          {/*           <Route path="/home" element={<Home />} />
           */}{" "}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/*  </Route> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </div>
  );
}
export default App;
