import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import HomePage from "./components/HomePage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import ProjectsPage from "./components/ProjectsPage.tsx";
import ExperiencePage from "./components/ExperiencePage.tsx";
import EducationPage from "./components/EducationPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "projects",
                element: <ProjectsPage />,
            },
            {
                path: "experience",
                element: <ExperiencePage />,
            },
            {
                path: "education",
                element: <EducationPage />,
            },
        ],
    },
]);

export default router;
