import { createHashRouter } from "react-router-dom";

import App from "./App.tsx";
import HomePage from "./components/pages/HomePage.tsx";
import AboutPage from "./components/pages/AboutPage.tsx";
import ProjectsPage from "./components/pages/ProjectsPage.tsx";
import ResearchPage from "./components/pages/ResearchPage.tsx";
import ExperiencePage from "./components/pages/ExperiencePage.tsx";
import EducationPage from "./components/pages/EducationPage.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import SkillsPage from "./components/pages/SkillsPage.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
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
                path: "skills",
                element: <SkillsPage />,
            },
            {
                path: "projects",
                element: <ProjectsPage />,
            },
            {
                path: "research",
                element: <ResearchPage />,
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
