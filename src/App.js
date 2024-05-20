import React, { lazy, Suspense,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SpaceSteps from "./components/SpaceSteps/SpaceSteps";
import Board from "./components/Board/Board";
import AboutUs from "./components/AboutUs/Index";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Blog from "./components/Blog/Index";
import BlogDetails from "./components/BlogDetail/Index";


const Home = lazy(() => import("./components/home/Home"));
const Config = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<AboutUs/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/blog-details" element={<BlogDetails/>} />
          <Route exact path="/get-started" element={<SpaceSteps/>} />
          <Route exact path="/board" element={<Board/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
