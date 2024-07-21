import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import PlainText from "../text/PlainText";
import SubHeading from "../text/SubHeading";

import aboutHeadShot from "../../assets/about_head_shot.png";

export default function AboutPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("About | Bennett Lindberg"), []);
    const navigate = useNavigate();

    return (
        <>
            <PageTemplate
                pageType="about"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[40px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-2 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-3 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-4 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[10px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-5 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[10px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-3 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-4 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-5 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[40px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-6 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[40px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-4 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-5 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-6 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[10px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-7 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-9 items-center">
                            <div className="h-[10px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-5 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[20px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-6 col-span-1 animate-fade-left-stretch shadow-inner"></div>
                            <div className="h-[30px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-7 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                            <div className="h-[40px] w-[90%] bg-lime-100 dark:bg-lime-950 rounded-[10px] col-start-8 col-span-1 animate-fade-right-stretch shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-row justify-center">
                            <img src={aboutHeadShot} alt="Image of Bennett Lindberg" className="rounded-xl w-[75%]"></img>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Hi! I'm Bennett Lindberg, a full-stack software engineer who is passionate about constructing productive tools, streamlining procedures, and improving lives through software. Always enthusiastic about building, designing, and enhancing my work, I am a spirited engineer, programmer, and learner. Currently, I am an undergraduate Computer Science major at Northwestern University in the McCormick School of Engineering.
                        </PlainText>
                        <PlainText>
                            I enjoy developing software applications for others to use, exploring new programming languages and technologies, and expanding my range of knowledge within the broader computer science field. I am often knee-deep reading through a textbook or technical documentation and would describe myself as focused, detail-attentive, and hard-working.
                        </PlainText>
                        <PlainText>
                            Outside of computer science and software development, I enjoy solving logic puzzles, playing card games, swimming, watching Formula 1 races, talking with friends, and learning new things. I also enjoy learning about geography and have a bucket list of places to which I'd like to travel!
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <SubHeading>
                            Contact Me
                        </SubHeading>
                        <PlainText>
                            Feel free to contact me directly on LinkedIn or via the contact information associated with my LinkedIn profile!
                        </PlainText>
                        <div className={`font-bold bg-gradient-to-tr to-blue-400 from-blue-700 hover:from-blue-400 hover:to-blue-700 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                            <a href="https://www.linkedin.com/in/bennett-lindberg/" target="_blank">LinkedIn</a>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/2">
                        <SubHeading>
                            Learn More
                        </SubHeading>
                        <PlainText>
                            Visit the other pages of this site to learn more about myself or view my GitHub profile!
                        </PlainText>
                        <div className="flex flex-row gap-x-2 flex-wrap">
                            <div className={`font-bold bg-gradient-to-tr from-orange-600 to-red-300 hover:to-orange-600 hover:from-red-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/skills"); }}>
                                /skills
                            </div>
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/projects"); }}>
                                /projects
                            </div>
                            <div className={`font-bold bg-gradient-to-tr to-emerald-400 from-teal-600 hover:from-emerald-400 hover:to-teal-600 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/projects"); }}>
                                /research
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-red-600 to-pink-400 hover:to-red-600 hover:from-pink-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/experience"); }}>
                                /experience
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/education"); }}>
                                /education
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}