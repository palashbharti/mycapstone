import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.js";
import Enterdetails from "./Enterdetails";
import Navbar from "./Navbar";
import ReviewMovies from "./ReviewMovies";
import FindMatches from "./FindMatches";
import Login from "./Login";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/enter-details", element: <Enterdetails /> },
            { path: "/review-movies", element: <ReviewMovies /> },
            { path: "/find-matches", element: <FindMatches /> },
            { path: "/login", element: <Login /> },
        ],
    },
]);

function App() {
    return (
        <div
            className="App"
            style={{
                minHeight: "100vh",
                backgroundImage: "url(" + "./heartsBackgd.jpg" + ")",
            }}
        >
            <RouterProvider router={myRoutes} />
        </div>
    );
}

export default App;
