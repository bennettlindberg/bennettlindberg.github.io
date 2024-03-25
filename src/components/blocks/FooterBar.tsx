import { useEffect, useState } from "react";
import { IconSVG } from "./IconSVG";
import PlainText from "../text/PlainText";

export default function FooterBar() {
    const [siteInfoPanelShown, setSiteInfoPanelShown] = useState<Boolean>(false);
    const [, setReloader] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setReloader(reloader => !reloader);
        });

        return () => window.removeEventListener("resize", () => {
            setReloader(reloader => !reloader);
        });
    }, []);

    const siteInfoText =
        <>
            <PlainText>
                Site Version: 1.2.0
            </PlainText>
            <PlainText>
                Aside from the "BL" logo seen on the left side of the navigation bar, all SVG icons used on this site were sourced from the <a href="https://www.svgrepo.com/collection/dazzle-line-icons/" target="_blank" className="underline hover:font-bold">Dazzle Line Icons</a> collection, a set of SVG icons created by <a href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com" target="_blank" className="underline hover:font-bold">Dazzle UI</a> under the <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" className="underline hover:font-bold">CC Attribution License</a> via <a href="https://www.svgrepo.com/" target="_blank" className="underline hover:font-bold">SVG Repo</a>.
            </PlainText>
            <PlainText>
                The Motorola Solutions, Northwestern University, and Code Platoon logos used on this site are not my own and are the intellectual property of their respective entities.
            </PlainText>
        </>;

    if (window.innerWidth >= 1200) {
        return (
            <>
                <div className="animate-fade-in flex flex-col">
                    {siteInfoPanelShown &&
                        <div className={`mt-5 mx-5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-opacity-75 rounded-xl p-5 shadow-2xl dark:shadow-gray-900`}>
                            <div className="group flex flex-row gap-x-2 pb-2 w-fit">
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#ED6A5E] border-[1px] border-[#df6054]" onClick={() => setSiteInfoPanelShown(false)}>
                                    <div className="flex flex-col justify-center invisible group-hover:visible">
                                        <IconSVG icon="CROSS" color="red" width="w-[9px]" height="h-[9px]"></IconSVG>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                            </div>

                            {siteInfoText}
                        </div>
                    }
                    <div className="bg-zinc-100 dark:bg-zinc-900 bg-opacity-75 dark:bg-opacity-75 rounded-xl shadow-2xl dark:shadow-gray-900 flex flex-row gap-x-5 m-5 p-2 justify-between">
                        <div className="flex flex-row gap-x-5 items-center text-black dark:text-white">
                            <div className="font-normal text-md text-black dark:text-white">
                                Created by Bennett Lindberg
                            </div>
                            •
                            <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold" onClick={() => setSiteInfoPanelShown(!siteInfoPanelShown)}>
                                Site Information
                            </div>
                            •
                            <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold">
                                <a href="https://www.linkedin.com/in/bennett-lindberg/" target="_blank">LinkedIn</a>
                            </div>
                            <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold">
                                <a href="https://github.com/bennettlindberg" target="_blank">GitHub</a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-5 items-center">
                            <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                                Back to Top
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="animate-fade-in flex flex-col">
                    {siteInfoPanelShown &&
                        <div className={`mt-5 mx-5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-opacity-75 rounded-xl p-5 shadow-2xl dark:shadow-gray-900`}>
                            <div className="group flex flex-row gap-x-2 pb-2 w-fit">
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#ED6A5E] border-[1px] border-[#df6054]" onClick={() => setSiteInfoPanelShown(false)}>
                                    <div className="flex flex-col justify-center invisible group-hover:visible">
                                        <IconSVG icon="CROSS" color="red" width="w-[9px]" height="h-[9px]"></IconSVG>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                                <div className="flex flex-row justify-center rounded-full h-3 w-3 bg-[#E1D9D6] border-[1px] border-[#cfc8c6]"></div>
                            </div>

                            {siteInfoText}
                        </div>
                    }
                    <div className="bg-zinc-100 dark:bg-zinc-900 bg-opacity-75 rounded-xl shadow-2xl dark:shadow-gray-900 flex flex-row flex-wrap gap-x-5 gap-y-2 m-5 p-2">
                        <div className="font-normal text-md text-black dark:text-white">
                            Created by Bennett Lindberg
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300">
                            •
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold" onClick={() => setSiteInfoPanelShown(!siteInfoPanelShown)}>
                            Site Information
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300">
                            •
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold">
                            <a href="https://www.linkedin.com/in/bennett-lindberg/" target="_blank">LinkedIn</a>
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold">
                            <a href="https://github.com/bennettlindberg" target="_blank">GitHub</a>
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300">
                            •
                        </div>
                        <div className="font-normal text-md text-slate-600 dark:text-slate-300 hover:underline hover:font-bold" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                            Back to Top
                        </div>
                    </div>
                </div>
            </>
        )
    }
}