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
                            Technical Skills
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
                            "JavaScript & TypeScript",
                            "HTML & CSS",
                            "Racket",
                            "x86 Assembly",
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
                            "React & React Router",
                            "Spring Framework & Spring Boot",
                            "Django & Django REST Framework",
                            "Angular",
                            "Tailwind CSS",
                            "Kafka",
                            "PostgreSQL",
                            "Docker",
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
                            "RESTful API Development",
                            "Reactive Programming",
                            "Server-Sent Events"
                        ]}></BulletList>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate>
        </>
    )
}