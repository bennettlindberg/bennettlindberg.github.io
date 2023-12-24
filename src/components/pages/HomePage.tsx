import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import PlainText from "../text/PlainText";
import MainTitle from "../text/MainTitle";

import homeHeadShot from "../../assets/home_head_shot.png";

export default function HomePage() {
    const { setTabTitle } = useContext(AppContext);
    const navigate = useNavigate();
    useEffect(() => setTabTitle("Home | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="home"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[40%] bg-red-100 dark:bg-red-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[20%] bg-red-100 dark:bg-red-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-red-100 dark:bg-red-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-red-100 dark:bg-red-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[20%] bg-red-100 dark:bg-red-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[40%] bg-red-100 dark:bg-red-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-red-100 dark:bg-red-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-red-100 dark:bg-red-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }
            >
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <div className="flex flex-row align-middle justify-center text-center font-bold text-5xl">
                            <MainTitle />
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-row justify-center">
                            <img src={homeHeadShot} alt="Image of Bennett Lindberg" className="rounded-xl w-[75%]"></img>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <Heading>
                            Hello!
                        </Heading>
                        <PlainText>
                            I'm Bennett Lindberg, and this is my website!
                        </PlainText>
                        <PlainText>
                            I am an enthusiastic builder and tinkerer who is interested in tech and passionate about delivering real-world utility through software. Currently, I am an undergraduate student majoring in Computer Science at Northwestern University's McCormick School of Engineering.
                        </PlainText>
                        <PlainText>
                            You can learn more about myself by looking at the following pages:
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <div className={`font-bold bg-gradient-to-tr from-green-500 to-lime-400 hover:to-green-500 hover:from-lime-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/about");}}>
                            /about
                        </div>
                        <PlainText>
                            Learn general information about my interests inside and outside of technology and academia...
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <div className={`font-bold bg-gradient-to-tr from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/projects");}}>
                            /projects
                        </div>
                        <PlainText>
                            Interact with past and in-progress work of mine related to software engineering and computer science...
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <div className={`font-bold bg-gradient-to-tr to-emerald-400 from-blue-500 hover:from-emerald-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/experience");}}>
                            /experience
                        </div>
                        <PlainText>
                            See my teaching and software development work experience applicable to future roles to technology industries...
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/education");}}>
                            /education
                        </div>
                        <PlainText>
                            View my education history and academic coursework related to software engineering and computer science...
                        </PlainText>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}