import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import PlainText from "../text/PlainText";
import SubSubHeading from "../text/SubSubHeading";
import BulletList from "../text/BulletList";

import RacketEsterelGUI from "../../assets/RacketEsterelGUI.png";
import ClighterRedex from "../../assets/ClighterRedex.png";

export default function ResearchPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Research | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="research"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[10%] bg-emerald-100 dark:bg-emerald-950 rounded-r-lg animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[60%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg rounded-r-lg animate-fade-top-short shadow-inner"></div>
                            <div className="h-[40px] w-[10%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-emerald-100 dark:bg-emerald-950 rounded-r-lg animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[20%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg rounded-r-lg animate-fade-top-short shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[10%] bg-emerald-100 dark:bg-emerald-950 rounded-r-lg animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[60%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg rounded-r-lg animate-fade-top-short shadow-inner"></div>
                            <div className="h-[40px] w-[10%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="h-[40px] w-[30%] bg-emerald-100 dark:bg-emerald-950 rounded-r-lg animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[20%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg rounded-r-lg animate-fade-top-short shadow-inner"></div>
                            <div className="h-[40px] w-[30%] bg-emerald-100 dark:bg-emerald-950 rounded-l-lg animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Published Research
                        </Heading>
                        <SubSubHeading>
                            Coming Soon!
                        </SubSubHeading>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Research-Adjacent Works
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={RacketEsterelGUI} alt="Racket-Esterel Watch GUI" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Racket-Esterel Watch
                            </SubHeading>
                            <PlainText>
                                Developed for COMP_SCI 496 • March-June 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            As part of COMP_SCI 496, a graduate-level Programming Languages course, I co-authored a Racket-Esterel implementation of Gérard Berry's Esterel wristwatch from 1989. The implementation, which was written alongside Ph.D. student Nathaniel Hejduk, transpiles Berry's original Esterel code for the wristwatch into a development build of Esterel implemented in Racket by Professor Robby Findler. The goal of the project was to empirically examine the feasibility of development and runtime performance of Racket-Esterel.
                        </PlainText>
                        <PlainText>
                            Esterel is a programming language originally created in the 1980s that features signal-based state and control flow as well as paused-based synchronous parallelism. In Esterel, parallel threads are periodically synchronized at explicit pause points in the program where all threads must pause and resolve signal presences before any thread continues. Signals may be emitted or not between each pause point. In my opinion, Esterel is best understood in comparison to finite-state machines or clocked digital circuits.
                        </PlainText>
                        <SubSubHeading>
                            Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "Esterel",
                            "Racket",
                            "Racket-Esterel"
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/RacketEsterelWatch" target="_blank">GitHub Repository</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://www.researchgate.net/publication/43611052_Programming_a_digital_watch_in_Esterel_v3/link/0c96052e684f799530000000/download?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19" target="_blank">Original Esterel Watch Paper</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://docs.racket-lang.org/esterel/" target="_blank">Racket-Esterel</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={ClighterRedex} alt="An example inference rule for Clighter" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Clighter Redex
                            </SubHeading>
                            <PlainText>
                                Developed for COMP_SCI 424 • March-June 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Clighter is a programming language that is a subset of Clight, the source-code language for the CompCert verified C compiler headed by Xavier Leroy. CompCert is "verified" in the sense that the observable behavior of its source programs and output programs have been proven to be identical in all valid scenarios. CompCert uses a subset of C called Clight as its source language, which is implemented based on a formal big-step operational semantics. Clight removes several ambiguities of the C language, including the behavior of expressions with side effects.
                        </PlainText>
                        <PlainText>
                            As part of COMP_SCI 424, a graduate-level Programming Languages course, I developed Clighter alongside Master's Degree student Jerry Lu. Clighter is implemented as a big-step operational semantics written in PLT Redex. PLT Redex is a language used for formally defining the syntax and mechanizing the evaluation of programming languages.
                        </PlainText>
                        <PlainText>
                            The goal of writing Clighter was to gain hands-on experience writing an operational semantics and using PLT Redex. More concretely, we sought to match the behavior of C with Clighter by transpiling the operational semantics for Clight to PLT Redex. Rigorous testing informally demonstrated that our implementation matches the expected C behavior for all our targeted scenarios, which included branching, loops, pointers, structs, and several other interesting C features.
                        </PlainText>
                        <SubSubHeading>
                            Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "C",
                            "Clight",
                            "Racket",
                            "PLT Redex"
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/Clighter" target="_blank">GitHub Repository</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://link.springer.com/article/10.1007/s10817-009-9148-3" target="_blank">Clight Operational Semantics Paper</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://docs.racket-lang.org/redex/" target="_blank">PLT Redex</a>
                            </div>
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate >
        </>
    )
}
