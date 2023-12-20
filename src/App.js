import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Template from "./pages/Template";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import ProjectScreen from "./components/ProjectScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={console.log("first")} />
          <Route path="/team" element={<h1>Team</h1>} />
          <Route path="/testimonials" element={<h1>Testimonials</h1>} />
          <Route path="/developers" element={<h1>Developer Team</h1>} />
        </Route>
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <>
              <ProjectScreen />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
