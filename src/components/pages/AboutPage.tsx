import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";

export default function AboutPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("About | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="about"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[40px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-2 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-3 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-4 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[10px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-5 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[10px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-3 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-4 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-5 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[40px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-6 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[40px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-4 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-5 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-6 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[10px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-7 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[10px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-5 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-6 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-7 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[40px] w-[90%] bg-green-100 dark:bg-green-950 rounded-[10px] col-start-8 col-span-1 animate-fade-right-stretch shadow-inner"></div>
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
            </PageTemplate>
        </>
    )
}