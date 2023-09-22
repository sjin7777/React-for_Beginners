import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App0708() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:id" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App0708;