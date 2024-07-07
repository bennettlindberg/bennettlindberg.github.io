import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import SubHeading from "../text/SubHeading";
import PlainText from "../text/PlainText";
import Heading from "../text/Heading";

import NULogo from "../../assets/NU_logo.jpg";
import MSILogo from "../../assets/MSI_logo.jpg";
import CPLogo from "../../assets/CP_logo.jpg";
import BulletList from "../text/BulletList";

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
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-left-short shadow-inner"></div>
                                <div className="flex flex-col justify-between h-[40px]">
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-top-short shadow-inner"></div>
                                    <div className="h-[15px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-bottom-short shadow-inner"></div>
                                </div>
                                <div className="h-[20px] w-[100px] bg-red-100 dark:bg-red-950 rounded-lg animate-fade-right-short shadow-inner"></div>
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
                                <img src={MSILogo} alt="Motorola Solutions Logo" className="rounded-xl"></img>
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
                            This summer, I am working at Motorola Solutions as a Software Engineering Intern. Alongside my co-workers in the Secure Products Group at Motorola Solutions, I develop full-stack applications that help ensure critical communications are safe and secure.
                        </PlainText>
                        <PlainText>
                            During my time at Motorola Solutions, I have worked in an Agile software development environment using a variety of technologies and paradigms, including Reactive Programming, Angular front-end development, Spring Boot application development, Apache Kafka high-volume messaging, and REST API development involving Server-Sent Events.
                        </PlainText>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://www.motorolasolutions.com/en_us.html" target="_blank">Motorola Solutions Site</a>
                            </div>
                        </div>
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
                                Computer Science Department Peer Mentor • January-June 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            I currently work as a Peer Mentor in the Computer Science Department at Northwestern University. In this role, I have functioned as an undergraduate teaching assistant for several of the department's courses. My responsibilities include answering student questions, hosting office hours, and grading assignments and exams.
                        </PlainText>
                        <PlainText>
                            I have assisted with teaching the following courses: 
                            <BulletList listElements={[
                                "COMP_SCI 214: Data Structures and Algorithms (Winter 2024)",
                                "COMP_SCI 396: Foundations of Security (Spring 2024)"
                            ]}></BulletList>
                        </PlainText>
                        <PlainText>
                            In May 2024, I received the Peter and Adrienne Barris Outstanding Peer Mentor Award for my work assisting with the development of COMP_SCI 396: Foundations of Security, a new course focused on providing future software engineers with the security knowledge needed to design safe and secure software across domains.
                        </PlainText>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-red-600 to-pink-400 hover:to-red-600 hover:from-pink-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2024/northwestern-cs-announces-spring-2024-outstanding-teaching-assistant-and-peer-mentors.html" target="_blank">Award Announcement</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/peer-mentor-program/" target="_blank">Peer Mentor Program</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={CPLogo} alt="Code Platoon Logo" className="rounded-xl"></img>
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
                            During the 2023 summer, I interned with Code Platoon, a non-profit organization that teaches full-stack web development to veterans and their spouses to facilitate career transitions from the military to software development.
                        </PlainText>
                        <PlainText>
                            In this role, I helped teach 38 military veterans and spouses full-stack web development from the ground up. Most students came into the program with minimal programming experience and left with the ability to construct fully-authenticated full-stack web applications. The primary topics covered by the program included:
                            <BulletList listElements={[
                                "Front-end development with React",
                                "Back-end development with Django",
                                "Relational database schema design and management",
                                "Querying PostgreSQL databases",
                                "Working with third-party APIs",
                                "Constructing authenticated RESTful APIs"
                            ]}></BulletList>
                        </PlainText>
                        <PlainText>
                            In addition to expanding my own technical skills, this role solidified my communication and teaching skills. During my time as a TA, I ensured student success through effective verbal and visual communication, the delivery of lectures on supplementary topics, one-on-one student mentorship, and frequent and thorough code reviews of student capstone projects.
                        </PlainText>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://www.codeplatoon.org/" target="_blank">Code Platoon Site</a>
                            </div>
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}