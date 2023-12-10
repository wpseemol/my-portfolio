import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />   //../Root/Root.jsx
    }
])

export default Router;