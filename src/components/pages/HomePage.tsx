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
                            <div className="h-[40px] w-[40%] bg-orange-100 dark:bg-orange-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[20%] bg-orange-100 dark:bg-orange-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-orange-100 dark:bg-orange-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-orange-100 dark:bg-orange-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[20%] bg-orange-100 dark:bg-orange-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[40%] bg-orange-100 dark:bg-orange-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-orange-100 dark:bg-orange-950 rounded-r-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-orange-100 dark:bg-orange-950 rounded-l-full animate-fade-right-expand shadow-inner"></div>
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
                            I'm Bennett Lindberg, an enthusiastic builder and intellectually-curious person who is interested in tech, software, and delivering real-world utility through code. Currently, I am an undergraduate student majoring in Computer Science at Northwestern University's McCormick School of Engineering.
                        </PlainText>
                        <PlainText>
                            Learn more by visiting the pages listed below.
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            Learn about my interests inside and outside of technology and academia...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr from-green-500 to-lime-400 hover:to-green-500 hover:from-lime-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/about");}}>
                            /about
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            View my technical skills obtained from work, school, and independent study...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr from-orange-600 to-red-300 hover:to-orange-600 hover:from-red-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/skills");}}>
                            /skills
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            See my past and in-progress design and software engineering projects...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/projects");}}>
                            /projects
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            Explore previous research and research-adjacent works of mine...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr to-emerald-400 from-teal-600 hover:from-emerald-400 hover:to-teal-600 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/research");}}>
                            /research
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            View my teaching and software engineering work experience...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr from-red-600 to-pink-400 hover:to-red-600 hover:from-pink-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/experience");}}>
                            /experience
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <PlainText>
                            Read about my education history and academic coursework...
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/education");}}>
                            /education
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}