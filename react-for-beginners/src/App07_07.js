import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./routes/Home";
import Detail from "./routes/Detail";
/* 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movie",
        element: <Detail />,
    },
]);

function App0707() {
    return (
        <RouterProvider router={router} />
    );
}
*/

function App0707() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App0707;