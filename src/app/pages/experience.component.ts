import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TitleComponent } from "../components/title.component";
import { BoardComponent } from "../components/board.component";
import { PageComponent } from "../components/page.component";

@Component({
    selector: 'app-experience',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, BoardComponent, PageComponent],
    template: `
    <app-page>
        <!-- Header -->
        <app-title text="EXPERIENCE" />

        <!-- Experience Grid -->
        <div class="relative mx-auto">
            <!-- Vertical Timeline Line -->
            <div class="absolute left-4 top-1 pt-1 pb-6 flex h-full">
                <div class="border-r-[2px] border-b-[4px] dark:border-white border-black w-[10px]"></div>
                <div class="border-l-[2px] border-b-[4px] dark:border-white border-black w-[10px]"></div>
            </div>

            <!-- Experience Items -->
            <div class="grid grid-cols-[auto_1fr] md:gap-x-8 gap-x-6 gap-y-10 w-full">
                @for (experience of experienceItems; track experience.company + experience.role + experience.date) {
                    <!-- Experience Icon -->
                    <div class="flex justify-center pt-2 relative z-10">
                        <app-board
                            type="svg"
                            [style]="experience.iconColor"
                            [svgContent]="experience.icon"
                            svgSize="50"
                        />
                    </div>

                    <!-- Experience Data -->
                    <div class="flex flex-col">
                        <div class="mb-4">
                            <h3 class="md:text-2xl text-xl font-bold dark:text-white text-black mb-1 uppercase tracking-wide">{{ experience.role }}</h3>
                            <p class="dark:text-blue-500 text-blue-600 md:text-lg text-base font-medium mb-1">{{ experience.company }}</p>
                            <p class="dark:text-white text-black md:text-base text-sm font-medium tracking-wide">{{ experience.date }}</p>
                        </div>
                        
                        <!-- Description -->
                        <div class="mb-4">
                            @for (paragraph of experience.description; track $index) {
                                <p class="dark:text-white text-black md:text-base text-sm leading-relaxed mb-3 last:mb-0">
                                    {{ paragraph }}
                                </p>
                            }
                        </div>
                        
                        <!-- Courses (if available) -->
                        @if (experience.courses && experience.courses.length > 0) {
                            <div class="mb-4">
                                <h4 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide md:mb-2 mb-1">Assisted Courses</h4>
                                <ul class="gap-y-1">
                                    @for (course of experience.courses; track course) {
                                        <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                                            <span class="font-bold text-base mr-3">–</span>
                                            <span>{{ course }}</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                        
                        <!-- Topics (if available) -->
                        @if (experience.topics && experience.topics.length > 0) {
                            <div class="mb-4">
                                <h4 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide md:mb-2 mb-1">Taught Topics</h4>
                                <ul class="gap-y-1">
                                    @for (topic of experience.topics; track topic) {
                                        <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                                            <span class="font-bold md:text-base text-sm mr-3">–</span>
                                            <span>{{ topic }}</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }

                        <!-- Projects (if available) -->
                        @if (experience.projects && experience.projects.length > 0) {
                            <div class="mb-4">
                                <h4 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide md:mb-2 mb-1">Projects</h4>
                                <ul class="gap-y-1">
                                    @for (project of experience.projects; track project) {
                                        <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                                            <span class="font-bold md:text-base text-sm mr-3">–</span>
                                            <span>{{ project }}</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                        
                        <!-- Awards (if available) -->
                        @if (experience.awards && experience.awards.length > 0) {
                            <div class="mb-4">
                                <h4 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide md:mb-2 mb-1">Awards</h4>
                                <ul class="gap-y-1">
                                    @for (award of experience.awards; track award) {
                                        <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                                            <span class="font-bold md:text-base text-sm mr-3">–</span>
                                            <span>{{ award }}</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    </app-page>
  `
})
export class ExperienceComponent {
    experienceItems = [
        {
            company: 'Motorola Solutions',
            role: 'Software Engineer',
            date: 'July 2025 – Present',
            icon: 'employers/motorola-foreground',
            iconColor: 'motorola' as const,
            description: [
                'I currently work as a full-time Software Engineer at Motorola Solutions in the Secure Products Group.'
            ]
        },
        {
            company: 'Northwestern University Computer Science Department',
            role: 'Undergraduate Teaching Assistant',
            date: 'January 2024 – June 2025',
            icon: 'employers/northwestern-foreground',
            iconColor: 'northwestern' as const,
            description: [
                'During my undergraduate degree at Northwestern, I worked as a Teaching Assistant in the Computer Science department both designing and managing courses and helping students understand course content. My responsibilities as a TA included hosting office hours, drafting homework assignments, grading assignments and exams, refining course content, and managing auto-grading systems.'
            ],
            courses: [
                'COMP_SCI 321: Programming Languages (Fall 2024, Winter 2025, Spring 2025)',
                'COMP_SCI 308: Foundations of Security (Spring 2024)',
                'COMP_SCI 214: Data Structures and Algorithms (Winter 2024)'
            ],
            awards: [
                'Peter and Adrienne Barris Outstanding Peer Mentor Award (Spring 2024)'
            ]
        },
        {
            company: 'Northwestern University Computer Science Department',
            role: 'Undergraduate Researcher',
            date: 'May 2024 – June 2025',
            icon: 'employers/northwestern-foreground',
            iconColor: 'northwestern' as const,
            description: [
                'Advised by Dr. Christos Dimoulas, I participated in several research projects during my undergraduate tenure at Northwestern. My research endeavors involved Programming Languages theory (PLT), focusing primarily on software type and contract systems. As an undergraduate researcher, I directed and constructed never-before-attempted research projects, building on findings from existing literature and expanding the frontier of PLT knowledge.'
            ],
            projects: [
                'Contract Program Tracer',
                'Symbolic Type Inference Engine'
            ]
        },
        {
            company: 'Motorola Solutions',
            role: 'Software Engineering Intern',
            date: 'June 2024 – August 2024',
            icon: 'employers/motorola-foreground',
            iconColor: 'motorola' as const,
            description: [
                'As an intern in the encryption-focused Secure Products Group at Motorola Solutions, I developed full-stack applications that ensure communications are private and secure on Motorola devices. I worked in an Agile software development environment making architectural decisions, improving DevOps pipelines, and maximizing network communication efficiency. During my internship, I used a variety of technologies and paradigms, including Reactive Programming, Angular, Spring Boot, Apache Kafka, REST APIs, CI/CD pipelines, and PostgreSQL.'
            ],
            projects: [
                'Network communication efficiency optimization',
                'Agile DevOps pipeline construction'
            ]
        },
        {
            company: 'Code Platoon',
            role: 'Teaching Assistant',
            date: 'June 2023 – September 2023',
            icon: 'employers/code-platoon-foreground',
            iconColor: 'codePlatoon' as const,
            description: [
                'As a Teaching Assistant at Code Platoon, a coding bootcamp for veterans and their spouses, I helped teach 38 students full-stack web development from the ground up. Most students came into the program with minimal programming experience and left with the ability to construct fully-authenticated full-stack web applications. My role involved delivering lectures on supplementary topics, mentoring students one-on-one, and providing thorough code reviews of student projects.'
            ],
            topics: [
                'Front-end development with React',
                'Back-end development with Django',
                'Relational database schema design',
                'Querying PostgreSQL databases and using ORMs',
                'Constructing and working with RESTful APIs',
                'Building secure authentication into applications'
            ]
        }
    ];
}
