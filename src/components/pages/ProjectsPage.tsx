import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";

export default function ProjectsPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Projects | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="projects"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-2 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-3 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-4 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-5 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-6 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-7 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-2 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-3 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-4 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-5 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-6 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-orange-100 dark:bg-orange-950 rotate-45 rounded-lg col-start-7 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/3">
                        Hi
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        To
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        To
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/3">
                        Hi
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        To
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/2">
                        Hi
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        To
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/3">
                        Hi
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        To
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        Hi
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate >
        </>
    )
}