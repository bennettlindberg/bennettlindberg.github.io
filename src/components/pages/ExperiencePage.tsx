import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import SubHeading from "../text/Subheading";
import PlainText from "../text/PlainText";
import Heading from "../text/Heading";

import NULogo from "../../assets/NU_logo.jpg";
import MSILogo from "../../assets/MSI_logo.jpg";
import CPLogo from "../../assets/CP_logo.jpg";

export default function ExperiencePage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Experience | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="experience"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-blue-100 dark:bg-blue-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Technical Work Experience
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={MSILogo} alt="Northwestern University Logo" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Motorola Solutions
                            </SubHeading>
                            <PlainText>
                                Software Engineering Intern • June-August 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Text...
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={NULogo} alt="Northwestern University Logo" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Northwestern University
                            </SubHeading>
                            <PlainText>
                                Data Structures and Algorithms Peer Mentor • January-March 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Text...
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={CPLogo} alt="Northwestern University Logo" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Code Platoon
                            </SubHeading>
                            <PlainText>
                                Full-Stack Software Engineering Teaching Assistant • June-September 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Text...
                        </PlainText>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}