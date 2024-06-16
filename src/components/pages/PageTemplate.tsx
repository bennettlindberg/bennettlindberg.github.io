import { useEffect, useState } from "react"
import FooterBar from "../blocks/FooterBar"
import NavBar from "../blocks/NavBar"

export default function PageTemplate(
    {
        children,
        pageType,
        background,
    }: {
        children: React.ReactNode,
        pageType: "home" | "about" | "skills" | "projects" | "research" | "experience" | "education",
        background: React.ReactNode,
    }
) {
    const [reloader, setReloader] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => setReloader(!reloader));
        window.removeEventListener("resize", () => setReloader(!reloader));
    }, []);

    let backgroundGradientProperty = "";
    switch (pageType) {
        case "home":
            backgroundGradientProperty = "to-orange-50 dark:to-orange-950";
            break;

        case "about":
            backgroundGradientProperty = "to-green-50 dark:to-green-950";
            break;

        case "skills":
            backgroundGradientProperty = "to-[#ffe4d4] dark:to-[#4f1904]";
            break;

        case "projects":
            backgroundGradientProperty = "to-blue-50 dark:to-blue-950";
            break;

        case "research":
            backgroundGradientProperty = "to-emerald-50 dark:to-emerald-950";
            break;

        case "experience":
            backgroundGradientProperty = "to-red-50 dark:to-red-950";
            break;

        case "education":
            backgroundGradientProperty = "to-purple-50 dark:to-purple-950";
            break;
    }

    return (
        <>
            <div className="relative flex flex-col min-h-screen">
                <nav>
                    <NavBar pageType={pageType}></NavBar>
                </nav>
                <main className="flex-grow">
                    {children}
                </main>
                <footer>
                    <FooterBar></FooterBar>
                </footer>

                <div className="fixed top-0 left-0 -z-10 h-full w-full overflow-hidden">
                    {[...Array(Math.ceil(window.innerHeight / 280))].map(() => background)}
                </div>
                <div className={`fixed top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-transparent ${backgroundGradientProperty}`}></div>
            </div>
        </>
    )
}