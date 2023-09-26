import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation_14.3";
import Home from "./routes/Home_14.1";
import About from "./routes/About_14.1";
import Detail from "./routes/Detail_14.4";
import "./App.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie/:id" element={<Detail />}/>
            </Routes>
        </HashRouter>
    )
}

export default App;