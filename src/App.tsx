import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AppContext = createContext<{
    siteTheme: "light" | "dark" | "system",
    setSiteTheme: React.Dispatch<React.SetStateAction<"light" | "dark" | "system">>,
    setTabTitle: (title: string) => void
}>({
    siteTheme: "light",
    setSiteTheme: () => { },
    setTabTitle: () => { }
});

function setSiteThemeProperties(theme: "light" | "dark") {
    if (theme === "dark") {
        document.getElementsByTagName("html")[0].setAttribute("class", "dark")
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color:black;")
    } else {
        document.getElementsByTagName("html")[0].setAttribute("class", "light")
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color:white;")
    }
}

export default function App() {
    const [siteTheme, setSiteTheme] = useState<"light" | "dark" | "system">("system");
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        switch (siteTheme) {
            case "light":
                setSiteThemeProperties("light");
                break;

            case "dark":
                setSiteThemeProperties("dark");
                break;

            case "system":
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    setSiteThemeProperties("dark");
                    break;
                } else {
                    setSiteThemeProperties("light");
                    break;
                }
        }
    }, [siteTheme, systemTheme]);

    useEffect(() => {
        const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        colorSchemeMediaQuery.onchange = (query) => {
            if (query.matches) {
                setSystemTheme("dark");
            } else {
                setSystemTheme("light");
            }
        }
    }, []);

    return (
        <>
            <AppContext.Provider value={{ 
                siteTheme: siteTheme, 
                setSiteTheme: setSiteTheme,
                setTabTitle: (title: string) => {
                    const titleElement = document.getElementsByTagName("title")[0];
                    titleElement.innerHTML = title;
                }
            }}>
                <Outlet />
            </AppContext.Provider>
        </>
    )
}