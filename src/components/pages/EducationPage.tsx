import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import PlainText from "../text/PlainText";
import BulletList from "../text/BulletList";
import SubHeading from "../text/SubHeading";
import SubSubHeading from "../text/SubSubHeading";

import NULogo from "../../assets/NU_logo.jpg";
import BulletGroupHeader from "../text/BulletGroupHeader";

export default function EducationPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Education | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="education"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-row justify-around h-[40px]">
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around h-[40px]">
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around h-[40px]">
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[10deg] rounded-lg animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around h-[40px]">
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[20px] w-[100px] bg-purple-100 dark:bg-purple-950 rotate-[-10deg] rounded-lg animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Education History
                        </Heading>
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
                                Bachelor of Science in Computer Science • 2022-2025 (projected)
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Currently, I am completing my B.S. in Computer Science at Northwestern University in the McCormick School of Engineering. I am projected to finish my bachelor's degree in three years. At Northwestern, I have served as a Peer Mentor for several courses in the CS Department and achieved High Honors during my Fall 2022, Winter 2023, Spring 2023, Fall 2023, Winter 2024, Spring 2024, and Fall 2024 quarters.
                        </PlainText>
                        <SubSubHeading>
                            Upcoming Coursework (Winter 2025):
                        </SubSubHeading>
                        <PlainText>
                            <BulletList listElements={[
                                "COMP_SCI 310: Scalable Software Architectures",
                                "COMP_SCI 340: Introduction to Computer Networking",
                                "COMP_SCI 398: Research Track II (Programming Languages)",
                                "COMP_SCI 496: Programming Languages Seminar (Winter 2025)",
                            ]}></BulletList>
                        </PlainText>
                        <SubSubHeading>
                            Technical Coursework:
                        </SubSubHeading>
                        <PlainText>
                            <BulletGroupHeader>
                                Introductory:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_SCI 111: Fundamentals of Computer Science I",
                                "COMP_SCI 150: Fundamentals of Computer Science 1.5",
                                "COMP_SCI 211: Fundamentals of Computer Science II",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Mathematics:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_SCI 212: Formal Proof, Discrete Math, and Graph Theory",
                                "COMP_SCI 262: Probability and Linear Algebra",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Systems:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_ENG 203: Introduction to Computer Engineering",
                                "COMP_SCI 213: Introduction to Computer Systems",
                                "COMP_SCI 343: Operating Systems",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Algorithms:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_SCI 214: Data Structures and Algorithms",
                                "COMP_SCI 336: Design and Analysis of Algorithms",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Programming Languages:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_SCI 298: Research Track I (Programming Languages)",
                                "COMP_SCI 321: Programming Languages",
                                "COMP_SCI 424: Dynamics of Programming Languages",
                                "COMP_SCI 496: Programming Languages Seminar (Spring 2024)",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Miscellaneous:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "COMP_SCI 330: Human-Computer Interaction",
                                "COMP_SCI 348: Artificial Intelligence",
                                "COMP_SCI 396: Foundations of Security",
                            ]}></BulletList>
                        </PlainText>
                        <SubSubHeading>
                            Other Relevant Coursework:
                        </SubSubHeading>
                        <PlainText>
                            <BulletGroupHeader>
                                Engineering:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "GEN_ENG 205-1: MATLAB and Linear Algebra",
                                "GEN_ENG 205-2: Statics",
                                "GEN_ENG 205-3: Dynamics",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Mathematics:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "MATH 228-1: Multivariable Differential Calculus",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Design:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "DSGN 106-1: Design Thinking and Communication I",
                                "DSGN 106-2: Design Thinking and Communication II",
                                "DSGN 220: Design Sketching",
                            ]}></BulletList>
                            <BulletGroupHeader>
                                Art:
                            </BulletGroupHeader>
                            <BulletList listElements={[
                                "ART 210: Introduction to Drawing",
                                "ART 220: Introduction to Painting",
                            ]}></BulletList>
                        </PlainText>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}