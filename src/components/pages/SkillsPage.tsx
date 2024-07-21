import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import BulletList from "../text/BulletList";
import SubHeading from "../text/SubHeading";

export default function SkillsPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Skills | Bennett Lindberg"), []);

    return (
        <>
            <PageTemplate
                pageType="skills"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-row justify-around items-center h-[40px]">
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around items-center h-[40px]">
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around items-center h-[40px]">
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-left-expand shadow-inner"></div>
                        </div>
                        <div className="flex flex-row justify-around items-center h-[40px]">
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[20px] w-[40px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[25px] w-[50px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[30px] w-[60px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[35px] w-[70px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                            <div className="h-[40px] w-[80px] bg-[#ffe4d4] dark:bg-[#4f1904] rounded-full animate-fade-right-expand shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            General Programming Skills
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Programming and Markup Languages
                        </SubHeading>
                        <BulletList listElements={[
                            "C & C++",
                            "Java",
                            "Python",
                            "JavaScript",
                            "TypeScript",
                            "Racket",
                            "MATLAB",
                            "x86 Assembly",
                            "HTML & CSS",
                            "SQL",
                            "LaTeX"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Programming Paradigms
                        </SubHeading>
                        <BulletList listElements={[
                            "Object-Oriented (OOP)",
                            "Functional",
                            "Reactive Streams",
                            "Asynchronous",
                            "Concurrency & Parallelism"
                        ]}></BulletList>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Application Development Skills
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Front-End Technologies
                        </SubHeading>
                        <BulletList listElements={[
                            "React & React Router",
                            "Angular",
                            "Tailwind CSS"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Back-End Technologies
                        </SubHeading>
                        <BulletList listElements={[
                            "Django",
                            "Django REST Framework",
                            "Spring & Spring Boot",
                            "Object-Relational Mappings (ORMs)",
                            "Database Schema Design",
                            "PostgreSQL",
                            "MongoDB"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            General Technologies
                        </SubHeading>
                        <BulletList listElements={[
                            "RESTful API Development",
                            "Session Tokens & JSON Web Tokens (JWTs)",
                            "Kafka",
                            "Docker & Podman",
                            "Vite",
                            "NextJS",
                            "NodeJS",
                            "Server-Sent Events",
                            "Web Sockets"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Software Development Life Cycle
                        </SubHeading>
                        <BulletList listElements={[
                            "Agile Software Development",
                            "Git & GitHub",
                            "GitHub Actions",
                            "Continuous Integration/Continuous Delivery (CI/CD)"
                        ]}></BulletList>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Topic-Specific Skills
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Mathematics
                        </SubHeading>
                        <BulletList listElements={[
                            "Differential & Integral Calculus",
                            "Linear Algebra",
                            "Probability Theory",
                            "Combinatorics",
                            "Graph Theory",
                            "Data Visualization (MATLAB)"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Algorithms
                        </SubHeading>
                        <BulletList listElements={[
                            "Asymptotic Complexity",
                            "Randomized Algorithms",
                            "Greedy Algorithms",
                            "Divide & Conquer Algorithms",
                            "Dynamic Programming"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Cybersecurity
                        </SubHeading>
                        <BulletList listElements={[
                            "Threat Modeling",
                            "Access Control",
                            "Symmetric & Asymmetric Encryption",
                            "Hashing & Salting",
                            "Message Authentication Codes (MACs) & Digital Signatures",
                            "SQL Injection Prevention",
                            "Cross-Site Scripting (XSS) Prevention",
                            "Content Security Policies (CSPs)"
                        ]}></BulletList>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <SubHeading>
                            Programming Languages
                        </SubHeading>
                        <BulletList listElements={[
                            "Lambda Calculus",
                            "Operational Semantics",
                            "PLT Redex",
                            "Parsers and Interpreters",
                            "Garbage Collection"
                        ]}></BulletList>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}