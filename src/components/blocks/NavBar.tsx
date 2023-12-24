import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconSVG } from "./IconSVG";
import { AppContext } from "../../App";

export default function NavBar({ pageType }: {
    pageType: "home" | "about" | "projects" | "experience" | "education"
}) {
    const navigate = useNavigate();

    const { siteTheme, setSiteTheme }: { siteTheme: "light" | "dark" | "system", setSiteTheme: React.Dispatch<React.SetStateAction<"light" | "dark" | "system">> } = useContext(AppContext);

    const [colorProperties, setColorProperties] = useState<{ buttons: String, background: String }>({ buttons: "", background: "" });
    const [sidePanelShown, setSidePanelShown] = useState<boolean>(false);
    const [, setReloader] = useState<boolean>(false);

    useEffect(() => {
        switch (pageType) {
            case "home":
                setColorProperties({
                    buttons: "from-red-600 to-pink-400 hover:to-red-600 hover:from-pink-400",
                    background: "from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900"
                });
                break;

            case "about":
                setColorProperties({
                    buttons: "from-green-500 to-lime-400 hover:to-green-500 hover:from-lime-400",
                    background: "from-green-100 to-lime-100 dark:from-green-900 dark:to-lime-900"
                });
                break;

            case "projects":
                setColorProperties({
                    buttons: "from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300",
                    background: "from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900"
                });
                break;

            case "experience":
                setColorProperties({
                    buttons: "to-emerald-400 from-blue-500 hover:from-emerald-400 hover:to-blue-500",
                    background: "to-emerald-100 from-blue-100 dark:to-emerald-900 dark:from-blue-900"
                });
                break;

            case "education":
                setColorProperties({
                    buttons: "from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400",
                    background: "from-violet-100 to-indigo-100 dark:from-violet-900 dark:to-indigo-900"
                });
                break;
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setReloader(reloader => !reloader);
        });

        return () => window.removeEventListener("resize", () => {
            setReloader(reloader => !reloader);
        });
    }, []);

    let navContent: React.ReactNode = <></>;
    if (window.innerWidth <= 700) {
        navContent =
            <div className="flex flex-row gap-x-5 items-center flex-grow justify-center">
                {pageType === "home" &&
                    <div className={`text-xl text-black dark:text-white underline font-bold`} onClick={() => navigate("/")}>
                        bennettlindberg.com
                    </div>
                }
                {pageType === "about" &&
                    <div className={`text-xl text-slate-600 dark:text-slate-300 underline font-bold`} onClick={() => navigate("/about")}>
                        /about
                    </div>
                }
                {pageType === "projects" &&
                    <div className={`text-xl text-slate-600 dark:text-slate-300 underline font-bold`} onClick={() => navigate("/projects")}>
                        /projects
                    </div>
                }
                {pageType === "experience" &&
                    <div className={`text-xl text-slate-600 dark:text-slate-300 underline font-bold`} onClick={() => navigate("/experience")}>
                        /experience
                    </div>
                }
                {pageType === "education" &&
                    <div className={`text-xl text-slate-600 dark:text-slate-300 underline font-bold`} onClick={() => navigate("/education")}>
                        /education
                    </div>
                }
            </div>
    } else if (window.innerWidth <= 1050) {
        navContent =
            <div className="flex flex-row gap-x-5 items-center flex-grow justify-center">
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "about" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/about")}>
                    /about
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "projects" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/projects")}>
                    /projects
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "experience" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/experience")}>
                    /experience
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "education" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/education")}>
                    /education
                </div>
            </div>
    } else {
        navContent =
            <div className="flex flex-row gap-x-5 items-center flex-grow">
                <div className={`text-xl text-black dark:text-white ${pageType === "home" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/")}>
                    https://bennettlindberg.com
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "about" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/about")}>
                    /about
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "projects" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/projects")}>
                    /projects
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "experience" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/experience")}>
                    /experience
                </div>
                <div className={`text-xl text-slate-600 dark:text-slate-300 ${pageType === "education" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/education")}>
                    /education
                </div>
            </div>
    }

    return (
        <>
            <div className="relative animate-fade-in">
                <div className={`bg-gradient-to-b ${colorProperties.background} bg-opacity-75 dark:bg-opacity-75 rounded-xl shadow-2xl dark:shadow-gray-900 flex flex-row gap-x-5 m-5 justify-between`}>
                    <div className={`bg-gradient-to-tr ${colorProperties.buttons} rounded-xl p-3 shadow-2xl dark:shadow-gray-900`} onClick={() => navigate("/")}>
                        <IconSVG icon="LOGO" color="fill-white dark:fill-black" width="w-[40px]" height="h-[40px]" />
                    </div>
                    {navContent}
                    <div className={`relative invisible bg-gradient-to-tr ${colorProperties.buttons} rounded-xl p-3 shadow-2xl dark:shadow-gray-900`} onClick={() => setSidePanelShown(!sidePanelShown)}>
                        <IconSVG icon="LIGHT_MENU" color="fill-white dark:fill-black" width="w-[40px]" height="h-[40px]" />
                        <div className={`absolute top-0 left-0 visible dark:invisible bg-gradient-to-tr ${colorProperties.buttons} rounded-xl p-3 shadow-2xl dark:shadow-gray-900`} onClick={() => setSidePanelShown(!sidePanelShown)}>
                            <IconSVG icon="LIGHT_MENU" color="fill-white dark:fill-black" width="w-[40px]" height="h-[40px]" />
                        </div>
                        <div className={`absolute top-0 left-0 invisible dark:visible bg-gradient-to-tr ${colorProperties.buttons} rounded-xl p-3 shadow-2xl dark:shadow-gray-900`} onClick={() => setSidePanelShown(!sidePanelShown)}>
                            <IconSVG icon="DARK_MENU" color="fill-white dark:fill-black" width="w-[40px]" height="h-[40px]" />
                        </div>
                    </div>
                    {sidePanelShown &&
                        <div className={`absolute top-[80px] right-5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-opacity-75 rounded-xl p-5 shadow-2xl dark:shadow-gray-900`}>
                            <div className="group flex flex-row gap-x-2 pb-2 w-fit">
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#ED6A5E] border-[1px] border-[#df6054]" onClick={() => setSidePanelShown(false)}>
                                    <div className="flex flex-col justify-center invisible group-hover:visible">
                                        <IconSVG icon="CROSS" color="red" width="w-[9px]" height="h-[9px]"></IconSVG>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                            </div>

                            <div className="font-bold underline text-lg mb-1 text-black dark:text-white">Navigation</div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-row gap-x-3">
                                    <div className={`text-md text-slate-600 dark:text-slate-300 ${pageType === "home" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/")}>
                                        https://bennettlindberg.com
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {pageType === "home" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`pl-4 text-md text-slate-600 dark:text-slate-300 ${pageType === "about" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/about")}>
                                        /about
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {pageType === "about" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`pl-4 text-md text-slate-600 dark:text-slate-300 ${pageType === "projects" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/projects")}>
                                        /projects
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {pageType === "projects" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`pl-4 text-md text-slate-600 dark:text-slate-300 ${pageType === "experience" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/experience")}>
                                        /experience
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {pageType === "experience" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`pl-4 text-md text-slate-600 dark:text-slate-300 ${pageType === "education" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => navigate("/education")}>
                                        /education
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {pageType === "education" && " ✔"}
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold underline text-lg mt-4 mb-1 text-black dark:text-white">Theme</div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-row gap-x-3">
                                    <div className={`text-md text-slate-600 dark:text-slate-300 ${siteTheme === "system" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => setSiteTheme("system")}>
                                        Use system preference
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {siteTheme === "system" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`text-md text-slate-600 dark:text-slate-300 ${siteTheme === "light" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => setSiteTheme("light")}>
                                        Light mode
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {siteTheme === "light" && " ✔"}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <div className={`text-md text-slate-600 dark:text-slate-300 ${siteTheme === "dark" ? "underline font-bold" : "hover:underline hover:font-bold"}`} onClick={() => setSiteTheme("dark")}>
                                        Dark mode
                                    </div>
                                    <div className="font-bold text-md text-slate-600 dark:text-slate-300">
                                        {siteTheme === "dark" && " ✔"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}