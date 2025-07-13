import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TitleComponent } from "../components/title.component";
import { PageComponent } from "../components/page.component";
import { BoardComponent } from "../components/board.component";

@Component({
    selector: 'app-education',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, PageComponent, BoardComponent],
    template: `
    <app-page>
        <!-- Header -->
        <app-title text="EDUCATION" />

        <!-- Education Grid -->
        <div class="md:grid flex flex-col gap-2 mx-auto">
            <!-- Northwestern Header -->
            <div class="col-start-1 col-span-1 md:w-[360px]">
                <!-- Northwestern Degree -->
                <div class="mb-4">
                    <h3 class="md:text-3xl text-2xl font-bold dark:text-white text-black mb-1 uppercase tracking-wide">{{ educationData.degree }}</h3>
                    <p class="dark:text-blue-500 text-blue-600 md:text-lg text-base font-medium mb-1">{{ educationData.where }}</p>
                    <p class="dark:text-white text-black md:text-base text-sm font-medium tracking-wide">{{ educationData.date }}</p>
                </div>
                
                <!-- Northwestern Icon -->
                <app-board
                    type="svg"
                    [style]="'northwestern'"
                    svgContent="employers/northwestern-foreground"
                    svgSize="150"
                    class="md:block hidden"
                />
                <app-board
                    type="svg"
                    [style]="'northwestern'"
                    svgContent="employers/northwestern-foreground"
                    svgSize="100"
                    class="md:hidden"
                />
            </div>

            <!-- Vertical Separator -->
            <div class="col-start-2 col-span-1 dark:border-white border-black border-r-[1px] w-6 md:visible invisible"></div>
            
            <!-- Northwestern Details -->
            <div class="col-start-3 col-span-2 md:grid flex flex-col md:gap-x-6 md:gap-y-8 gap-y-2">
                <!-- Awards -->
                <h4 class="col-start-1 col-span-1 dark:text-white text-black font-semibold md:text-xl text-lg uppercase md:[writing-mode:sideways-lr] md:text-end tracking-wide pt-1">Awards</h4>
                <div class="col-start-2">
                    <ul class="gap-y-2">
                        @for (award of educationData.awards; track award) {
                            <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                                <span class="font-bold text-sm md:text-base mr-3">–</span>
                                <span>{{ award }}</span>
                            </li>
                        }
                    </ul>
                </div>
                
                <!-- Courses -->
                <h4 class="col-start-1 col-span-1 dark:text-white text-black font-semibold md:text-xl text-lg uppercase md:[writing-mode:sideways-lr] md:text-end tracking-wide pt-1">Coursework</h4>
                <div class="col-start-2">
                    <div class="flex flex-col gap-y-4">
                        @for (category of educationData.courses; track category.name) {
                            <div>
                                <h5 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide md:mb-2 mb-1">
                                    {{ category.name }}
                                </h5>
                                <ul class="gap-y-1">
                                    @for (course of category.courseList; track course) {
                                        <li class="dark:text-white text-black md:text-base text-sm flex items-start leading-relaxed">
                                            <span class="font-bold md:text-sm text-xs mr-3">–</span>
                                            <span>{{ course }}</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </app-page>
  `
})
export class EducationComponent {
    educationData = {
        where: 'Northwestern University, McCormick School of Engineering',
        degree: 'B.S. Computer Science',
        date: 'September 2022 – June 2025',
        awards: [
            'Graduated summa cum laude (4.0 GPA)',
            'Outstanding Computer Science Senior Award (Spring 2025)',
            'Peter and Adrienne Barris Outstanding Peer Mentor Award (Spring 2024)'
        ],
        courses: [
            {
                name: 'Mathematics',
                courseList: [
                    'COMP_SCI 212: Mathematical Foundations of CS I (formal proof, discrete math, and graph theory)',
                    'COMP_SCI 262: Mathematical Foundations of CS II (probability theory and linear algebra)'
                ]
            },
            {
                name: 'Algorithms',
                courseList: [
                    'COMP_SCI 214: Data Structures and Algorithms (container types, searching, sorting, and path finding)',
                    'COMP_SCI 336: Design and Analysis of Algorithms (greedy algorithms, dynamic programming, and NP-hardness)'
                ]
            },
            {
                name: 'Systems',
                courseList: [
                    'COMP_ENG 203: Introduction to Computer Engineering (CMOS transistors, circuit design, and L-C3 ASM)',
                    'COMP_SCI 213: Introduction to Computer Systems (x86 Assembly, cache hierarchy, and virtual memory)',
                    'COMP_SCI 340: Introduction to Computer Networking (network layers, protocols, and infrastructure)',
                    'COMP_SCI 343: Operating Systems (thread scheduling, concurrency, file systems, and device drivers)'
                ]
            },
            {
                name: 'Artificial Intelligence',
                courseList: [
                    'COMP_SCI 348: Artificial Intelligence (KRR and machine learning)',
                    'COMP_SCI 349: Machine Learning (KNNs, neural networks, Naïve Bayes, and reinforcement learning)'
                ]
            },
            {
                name: 'Software Engineering',
                courseList: [
                    'COMP_SCI 310: Scalable Software Architectures (cloud-native development and distributed systems)',
                    'COMP_SCI 330: Human-Computer Interaction (design principles and UI/UX design)',
                    'COMP_SCI 396: Foundations of Security (threat modeling, access control, memory safety, web safety)',
                    'COMP_SCI 397: AI for Software Development (copilot and agent-assisted programming)'
                ]
            },
            {
                name: 'Programming Languages',
                courseList: [
                    'COMP_SCI 298: Research Track I (Programming Languages research)',
                    'COMP_SCI 321: Introduction to Programming Languages (parsers, interpreters, and language implementation)',
                    'COMP_SCI 398: Research Track II (Programming Languages research)',
                    'COMP_SCI 399: Independent Research (Programming Languages research)',
                    'COMP_SCI 424: Dynamics of Programming Languages (language implementation and formal semantics)',
                    'COMP_SCI 496: PL Research Seminar Spring 2024 (Esterel programming)',
                    'COMP_SCI 496: PL Research Seminar Winter 2025 (formalizing semantics for Rust)'
                ]
            }
        ]
    };
}
