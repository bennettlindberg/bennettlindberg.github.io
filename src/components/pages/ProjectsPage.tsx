import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

import PageTemplate from "./PageTemplate";
import ItemWindow from "../blocks/ItemWindow";
import ItemWindowContainer from "../blocks/ItemWindowContainer";
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import PlainText from "../text/PlainText";
import SubSubHeading from "../text/SubSubHeading";
import BulletList from "../text/BulletList";

import _2DGrapherImage from "../../assets/2DGrapher_cover_image.png";
import SwimeeterImage from "../../assets/Swimeeter_cover_image.png";
import SafeSecuritySiteImage from "../../assets/Safe_Security_Site_image.png";
import SlideSprinterImage from "../../assets/Slide_Sprinter_cover_image.png";
import PresentPlusImage from "../../assets/Present_Plus_cover_image.png";
import PersonalSiteImage from "../../assets/Personal_Site_cover_image.png";
import DTC1Poster from "../../assets/DTC1 - Slide Sprinter Poster.pdf";
import DTC1TestingReport from "../../assets/DTC1 - Proxy User Testing Report.pdf";
import DTC2TestingReport from "../../assets/DTC2 - User Testing Reports.pdf";

export default function ProjectsPage() {
    const { setTabTitle } = useContext(AppContext);
    useEffect(() => setTabTitle("Projects | Bennett Lindberg"), []);
    const navigate = useNavigate();

    return (
        <>
            <PageTemplate
                pageType="projects"
                background={
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-2 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-3 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-4 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-5 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-6 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-7 col-span-1 animate-fade-left-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-2 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-3 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-4 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-5 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-6 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                            <div className="h-[40px] w-[40px] bg-blue-100 dark:bg-blue-950 rotate-45 rounded-lg col-start-7 col-span-1 animate-fade-right-rotate shadow-inner"></div>
                        </div>
                        <div className="h-0"></div>
                    </div>
                }>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Featured Projects
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={SwimeeterImage} alt="Swimeeter Website" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Swimeeter
                            </SubHeading>
                            <PlainText>
                                Full-Stack Web Application • July-September 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            Swimeeter is a full-stack web application capable of managing large-scale competition-level swim meets. Users of the website can log into their accounts to create swim meets that manage meet swimmers, teams, events, entries, and sessions. Seeding heat sheets can be quickly generated and viewed for the entire meet and meets can be made public for others to view.
                        </PlainText>
                        <PlainText>
                            With a dynamic React-built front-end paired with cohesive Tailwind-styling, the site is intuitive to navigate while remaining fully-featured. The site's meet data is managed by a PostgreSQL database interfaced through a Django-built back-end RESTful API. User authentication and accounts allow for site personalization and the saving of individual meet data.
                        </PlainText>
                        <SubSubHeading>
                            Front-End Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "TypeScript and HTML",
                            "ReactJS",
                            "React Router",
                            "Tailwind CSS",
                            "Axios"
                        ]}></BulletList>
                        <SubSubHeading>
                            Back-End Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "Python",
                            "Django",
                            "Django REST Framework",
                            "SQL",
                            "PostgreSQL"
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://swimeeter.com" target="_blank">Live Website</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/Swimeeter" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
                <ItemWindowContainer>
                    <ItemWindow standardWidth="1">
                        <Heading>
                            Additional Works
                        </Heading>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={SafeSecuritySiteImage} alt="Safe Security Club Website" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Safe Security Club Website
                            </SubHeading>
                            <PlainText>
                                Static Web Application • April 2024
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            As the Director of Technology for the Safe Security Club at Northwestern University, a club focused on providing accessible cybersecurity knowledge to Northwestern's community, I implemented and deployed the club's informational website. The site includes an Information Hub, which lists several cybersecurity articles developed by the club and Northwestern students that delve into everyday but essential cybersecurity knowledge and practices.
                        </PlainText>
                        <PlainText>
                            <span className="italic">NOTE: Much of the CSS styling for this site was not written by me.</span>
                        </PlainText>
                        <SubSubHeading>
                            Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "JavaScript and HTML",
                            "ReactJS",
                            "React Router",
                            "Tailwind CSS",
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://safesecuritynu.com" target="_blank">Live Website</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/SafeSecurityNU/safesecuritynu.github.io" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={PersonalSiteImage} alt="Bennett Lindberg's Personal Website" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Personal Portfolio Website
                            </SubHeading>
                            <PlainText>
                                Static Web Application • December 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            My personal portfolio website (you're here!) is a static React-built site intended to streamline access to information about myself in a way that best illustrates my skills and personal voice. On the site, you can view a description of myself, my work as an engineer, my work experience, and my education. Continue browsing this site's pages to learn more about me!
                        </PlainText>
                        <SubSubHeading>
                            Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "TypeScript and HTML",
                            "ReactJS",
                            "React Router",
                            "Tailwind CSS",
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-orange-500 to-amber-300 hover:to-orange-500 hover:from-amber-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://bennettlindberg.com" target="_blank">Live Website</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/Personal-Website" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <iframe src="https://www.youtube.com/embed/sE_EaXoxa9g?si=z_bycVg3r-4QGAPK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                            </div>
                            <SubHeading>
                                Tailwind CSS Introduction Lecture
                            </SubHeading>
                            <PlainText>
                                Self-Written and Self-Delivered Lecture • August 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            During my time as a teaching assistant with Code Platoon (read more about this on the <span className="hover:font-bold underline" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/experience");}}>experience</span> page), I wrote and delivered a lecture on Tailwind CSS to help students style their then-ongoing capstone full-stack website projects. The lecture covers the motivation behind Tailwind, how the technology is used, and the technology's most useful features.
                        </PlainText>
                        <PlainText>
                            The one-hour lecture was delivered virtually to over 30 students and was received positively by the audience. Afterward, approximately 25% of the students adopted Tailwind for use in their capstone projects. Code Platoon now teaches Tailwind as part of their standard full-stack web development curriculum.
                        </PlainText>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-red-600 to-pink-400 hover:to-red-600 hover:from-pink-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://youtu.be/sE_EaXoxa9g" target="_blank">Video Recording</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/Tailwind-Lecture" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center w-[60%]">
                                <img src={PresentPlusImage} alt="Present+ Design" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Present+
                            </SubHeading>
                            <PlainText>
                                Northwestern Design Course Project • March-June 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            The Present+ is a product I developed alongside three engineering teammates at Northwestern University for DSGN 106-2: Design Thinking and Communication II.
                        </PlainText>
                        <PlainText>
                            With the goal of developing a sustainable yet fun alternative to classic wrapping paper, our team designed the Present+, a reusable wrapping box that reveals the gift hidden within when its walls are collapsed. The gift receiver unwraps their gift by ripping off the magnetic topper placed on the top of the box, causing the four vertical walls to fall over. The gift wrapper may decorate the exterior of the box by attaching decorations to the box's exterior velcro strips.
                        </PlainText>
                        <PlainText>
                            The Present+'s features were carefully chosen and tested to ensure the design was sustainable, practical, satisfying to use, and exciting. Following good design practices, our team conducted user interviews, held multiple rounds of user testing, hosted design reviews, and iteratively constructed prototypes to maximize the quality of the final product.
                        </PlainText>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href={DTC2TestingReport} target="_blank">Final Report Excerpt</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://design.northwestern.edu/programs/take-design-course/design-thinking-communication/" target="_blank">Design Thinking and Communication</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center w-[75%]">
                                <img src={SlideSprinterImage} alt="Slide Sprinter Design" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                Slide Sprinter
                            </SubHeading>
                            <PlainText>
                                Northwestern Design Course Project • January-March 2023
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            The Slide Sprinter is a product I developed alongside three engineering teammates at Northwestern University for DSGN 106-1: Design Thinking and Communication I.
                        </PlainText>
                        <PlainText>
                            The Slide Sprinter was developed with the mission of reconnecting a teenage boy who had had a stroke with his passion for playing video games. Post-stroke, this boy had difficulty controlling his right arm and hand, making playing video games with a standard two-handed console controller nearly impossible. The Slide Sprinter aims to alleviate this burden by improving access to the control most difficult for the boy to use: the right trigger button.
                        </PlainText>
                        <PlainText>
                            With a smooth contoured surface, the Slide Sprinter allows for a console controller to rest on its top face and be slid across its surface. Walls prevent the controller from sliding too far in any direction, and a trigger block on the right side is used to contact the right trigger button. When the controller is pushed forward by the left wrist, the trigger block hits the right trigger, causing the button to be pressed. This design removes the dependency on the boy's right hand, thereby reenabling his ability to play video games.
                        </PlainText>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-green-500 to-lime-400 hover:to-green-500 hover:from-lime-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href={DTC1Poster} target="_blank">Design Poster</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr to-teal-400 from-blue-500 hover:from-teal-400 hover:to-blue-500 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href={DTC1TestingReport} target="_blank">Final Report Excerpt</a>
                            </div>
                            <div className={`font-bold bg-gradient-to-tr from-violet-700 to-indigo-400 hover:to-violet-700 hover:from-indigo-400 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://design.northwestern.edu/programs/take-design-course/design-thinking-communication/" target="_blank">Design Thinking and Communication</a>
                            </div>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="1/3">
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <div className="flex flex-row justify-center">
                                <img src={_2DGrapherImage} alt="2DGrapher Application Window" className="rounded-xl"></img>
                            </div>
                            <SubHeading>
                                2DGrapher
                            </SubHeading>
                            <PlainText>
                                Desktop Function Graphing Application • June 2022
                            </PlainText>
                        </div>
                    </ItemWindow>
                    <ItemWindow standardWidth="2/3">
                        <PlainText>
                            2DGrapher is a Windows desktop application that allows for the graphing of functions of x and y in a two-dimensional plane. The application was written in C++ using the Simple and Fast Multimedia Library (SFML), a library that allows one to open context windows and draw text, lines, and polygons to the screen. 2DGrapher was developed both as a demonstration of my interest in computer graphics and as a test of my then-new C++ knowledge.
                        </PlainText>
                        <PlainText>
                            The application supports not just graphing functions, but also editing their visibility, name, plotting color, and other characteristics. The 2D plane itself can also be adjusted, and both scrolling and zooming of the graph is fully supported. A text input field is used to enter commands and values that in turn control the application.
                        </PlainText>
                        <SubSubHeading>
                            Languages and Technologies:
                        </SubSubHeading>
                        <BulletList listElements={[
                            "C++",
                            "SFML",
                        ]}></BulletList>
                        <SubSubHeading>
                            Learn More:
                        </SubSubHeading>
                        <div className="flex flex-row flex-wrap gap-x-2 mt-2">
                            <div className={`font-bold bg-gradient-to-tr from-gray-500 to-slate-300 hover:to-gray-500 hover:from-slate-300 rounded-xl p-3 mb-2 w-fit shadow-2xl dark:shadow-gray-900`}>
                                <a href="https://github.com/bennettlindberg/2DGrapher" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </ItemWindow>
                </ItemWindowContainer>
            </PageTemplate >
        </>
    )
}