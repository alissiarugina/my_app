import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import './App.css'

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
			<nav class="navbar background">
        <div id="logo">
            <img src= "AlissiaRuginaLogo.png" width='400px' height='auto' alt="" />
          </div>
				

				<div class="rightNav">
        <ul class="nav-list">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About Me</a></li>
					<li><a href="/resume">My Resume</a></li>
					<li><a href='/contact'>Contact Me!</a></li>
				</ul>
				</div>
			</nav>
      </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        </Routes>
        <div style={{backgroundColor:'#A6CAFDff',  left:'0', bottom:'0', textAlign:'center', height:'fit-content', width:'100%'}}>
          <img src= "AlissiaRuginaLogo.png" width='100px' height='auto' alt="" style={{left:'0', bottom:'0'}} />
        </div>
    </Router>
    
  );
}

/*
<Route path="/">
            <Home />
            </Route>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          */
/*
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        */