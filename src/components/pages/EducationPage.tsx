import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import PlainText from "../text/PlainText";
import BulletList from "../text/BulletList";
import SubHeading from "../text/Subheading";
import SubSubHeading from "../text/SubSubHeading";

import NULogo from "../../assets/NU_logo.jpg";

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
                            Currently, I am completing my B.S. in Computer Science at Northwestern University in the McCormick School of Engineering. I am projected to complete my degree in three years. At Northwestern, I have served as a Peer Mentor for the CS Department's data structures and algorithms course and achieved High Honors during my Fall 2022, Winter 2023, Spring 2023, and Fall 2023 quarters.
                        </PlainText>
                        <SubSubHeading>
                            Technical Coursework:
                        </SubSubHeading>
                        <PlainText>
                            <BulletList listElements={[
                                "COMP_SCI 111 - Fundamentals of Computer Science I",
                                "COMP_SCI 150 - Fundamentals of Computer Science 1.5",
                                "COMP_SCI 211 - Fundamentals of Computer Science II",
                                "COMP_SCI 212 - Mathematical Foundations of Computer Science",
                                "COMP_SCI 213 - Introduction to Computer Systems",
                                "COMP_SCI 214 - Data Structures and Algorithms",
                                "COMP_SCI 321 - Programming Languages",
                                "COMP_SCI 348 - Artificial Intelligence",
                                "COMP_SCI 396 - Foundations of Security",
                                "COMP_ENG 203 - Introduction to Computer Engineering",
                            ]}></BulletList>
                        </PlainText>
                        <SubSubHeading>
                            Other Relevant Coursework:
                        </SubSubHeading>
                        <PlainText>
                            <BulletList listElements={[
                                "GEN_ENG 205-1 - MATLAB and Linear Algebra",
                                "GEN_ENG 205-2 - Statics",
                                "GEN_ENG 205-3 - Dynamics",
                                "MATH 228-1 - Multivariable Differential Calculus",
                                "DSGN 106-1 - Design Thinking and Communication I",
                                "DSGN 106-2 - Design Thinking and Communication II",
                                "DSGN 220 - Design Sketching",
                            ]}></BulletList>
                        </PlainText>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Technical Skills
                        </Heading>
                        <PlainText>
                            The following technical skills were obtained through my:
                            <BulletList listElements={[
                                "completed coursework listed above",
                                "teaching assistant role at Code Platoon",
                                "experiential learning through the development of software projects",
                                "independent study"
                            ]}></BulletList>
                        </PlainText>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Programming and Markup Languages
                        </SubHeading>
                        <BulletList listElements={[
                            "C & C++",
                            "x86 Assembly",
                            "Java",
                            "Python",
                            "JavaScript & TypeScript",
                            "HTML & CSS",
                            "SQL",
                            "MATLAB",
                            "LaTeX"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Technologies
                        </SubHeading>
                        <BulletList listElements={[
                            "ReactJS & React Router",
                            "Django & Django REST Framework",
                            "Tailwind CSS",
                            "PostgreSQL",
                            "Vite",
                            "NextJS",
                            "Axios",
                            "Postman"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Miscellaneous
                        </SubHeading>
                        <BulletList listElements={[
                            "Agile Software Development",
                            "Git & GitHub",
                            "Database Schema Design",
                            "Object Relational Mappings (ORMs)",
                            "RESTful API Development"
                        ]}></BulletList>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}