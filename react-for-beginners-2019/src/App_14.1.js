import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home_14.1";
import About from "./routes/About_14.1";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    )
}

export default App;