import { Component, ChangeDetectionStrategy, viewChild, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SvgComponent } from '../components/svg.component';
import { HighlightComponent } from "../components/highlight.component";
import { BoardComponent } from "../components/board.component";
import { ButtonComponent } from "../components/button.component";
import { PageComponent } from "../components/page.component";

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SvgComponent, HighlightComponent, BoardComponent, ButtonComponent, PageComponent],
    template: `
    <app-page>
        <div class="flex flex-col gap-y-6">
            <!-- Main Screen -->
            <div class="min-h-screen flex flex-col items-center justify-center text-center">
                <!-- Logo and Name -->
                <div class="mb-8 flex justify-center items-end relative md:left-3 left-5">
                    <!-- Dark Mode, Large Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="white"
                        size="250"
                        class="dark:lg:block hidden"
                    />
                    <!-- Light Mode, Large Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="black"
                        size="250"
                        class="lg:block hidden dark:hidden"
                    />
                    <!-- Dark Mode, Medium Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="white"
                        size="200"
                        class="dark:lg:hidden dark:md:block hidden"
                    />
                    <!-- Light Mode, Medium Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="black"
                        size="200"
                        class="lg:hidden md:block hidden dark:hidden"
                    />
                    <!-- Dark Mode, Small Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="white"
                        size="150"
                        class="dark:md:hidden dark:block hidden"
                    />
                    <!-- Light Mode, Small Screen -->
                    <app-svg
                        name="nav/logo-foreground"
                        color="black"
                        size="150"
                        class="md:hidden dark:hidden"
                    />

                    <!-- Name -->
                    <div class="flex flex-col items-baseline pb-2 pr-[80px] lg:text-7xl md:text-6xl text-5xl dark:text-white text-black space-mono-bold relative lg:top-[1px] md:top-2 top-3">
                        <h1 class="lg:mb-5 md:mb-3 mb-1">BENNETT</h1>
                        <h1 class="mb-5">LINDBERG</h1>
                    </div>
                </div>

                <!-- Marquee -->
                <div class="mb-8">
                    <div class="relative overflow-hidden whitespace-nowrap m-auto lg:w-3xl md:w-2xl sm:w-xl w-lg space-mono-bold md:text-2xl text-xl">
                        <div class="inline-block marquee">
                            @for (item of marqueeItems; track $index) {
                                <span class="relative dark:text-blue-500 text-blue-600 after:content-['/'] before:mr-8 after:ml-8 dark:after:text-white after:text-black">{{ item }}</span>
                            }
                            @for (item of marqueeItems; track $index) {
                                <span class="relative dark:text-blue-500 text-blue-600 after:content-['/'] before:mr-8 after:ml-8 dark:after:text-white after:text-black">{{ item }}</span>
                            }
                        </div>
                        
                        <!-- Gradient Overlay -->
                        <div class="absolute top-0 left-0 w-8 h-full bg-gradient-to-r dark:from-black from-white to-transparent pointer-events-none z-10"></div>
                        <div class="absolute top-0 right-0 w-8 h-full bg-gradient-to-l dark:from-black from-white to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>

                <!-- Description -->
                <h3 class="dark:text-white text-black md:text-lg text-base max-w-3xl mx-auto mb-8">
                    I thrive at the <app-highlight>intersection of technology and design</app-highlight>. My cross-disciplinary approach combines rigorous technical thinking with creative problem-solving to <app-highlight>deliver impact that matters</app-highlight>.
                </h3>
                
                <!-- Learn More -->
                <app-button
                    type="text"
                    textContent="⬇ LEARN MORE ⬇"
                    color="blue"
                    (click)="scrollToNonMainSection()"
                />
            </div>

            <!-- Explore Section -->
            <div #nonMainSection class="flex flex-col items-center mx-auto max-w-5xl mb-10 scroll-mt-[140px]">
                <!-- Section Header -->
                <div class="flex gap-x-2 items-center mb-8">
                    <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-left"></div>
                    <h2 class="md:text-5xl text-4xl dark:text-white text-black space-mono-bold">EXPLORE</h2>
                    <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-right"></div>
                </div>

                <!-- Explore Items -->
                <div class="flex flex-wrap gap-4 items-center justify-center">
                    @for (item of exploreItems; track $index) {
                        <app-button
                            type="html"
                            color="blue"
                            (click)="item.action()"
                        >
                            <div class="flex gap-x-4 items-center">
                                <app-svg
                                [name]="item.icon"
                                size="40"
                                color="white"
                                class="dark:block hidden"
                                />
                                <app-svg
                                [name]="item.icon"
                                size="40"
                                color="black"
                                class="dark:hidden"
                                />
                                <div class="flex flex-col items-start">
                                    <h3 class="dark:text-white text-black md:text-lg text-base">{{ item.title }}</h3>
                                    <p class="dark:text-white text-black italic md:text-sm text-xs">{{ item.description }}</p>
                                </div>
                            </div>
                        </app-button>
                    }
                </div>
            </div>

            <!-- Timeline Section -->
            <!-- Section Header -->
            <div class="flex gap-x-2 items-center mx-auto">
                <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-left"></div>
                <h2 class="md:text-5xl text-4xl dark:text-white text-black space-mono-bold">TIMELINE</h2>
                <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-right"></div>
            </div>

            <!-- Timeline Items -->
            <div class="relative max-w-4xl mx-auto mb-10">
                <!-- Vertical Timeline Line -->
                <div class="absolute left-3 top-1 pt-1 pb-6 flex h-full">
                    <div class="border-r-[2px] border-b-[4px] dark:border-white border-black w-[10px]"></div>
                    <div class="border-l-[2px] border-b-[4px] dark:border-white border-black w-[10px]"></div>
                </div>
                
                <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-8 w-full">
                @for (item of timelineItems; track $index; let isLast = $last) {
                    <!-- Item Icon -->
                    <div class="flex justify-center pt-1.5 relative z-10">
                        <app-board
                            type="svg"
                            [style]="'timeline'"
                            [svgContent]="item.icon"
                            svgSize="24"
                        />
                    </div>
                    
                    <!-- Item Description -->
                    <div class="flex flex-col">
                        <div class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold tracking-wide uppercase">{{ item.date }}</div>
                        <div class="dark:text-white text-black md:text-base text-sm leading-relaxed">{{ item.description }}</div>
                    </div>
                }
                </div>
            </div>

            <!-- Socials Section -->
            <div class="flex flex-col items-center mx-auto max-w-5xl mb-10 scroll-mt-[140px]">
                <!-- Section Header -->
                <div class="flex gap-x-2 items-center mb-8">
                    <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-left"></div>
                    <h2 class="md:text-5xl text-4xl dark:text-white text-black space-mono-bold">SOCIALS</h2>
                    <div class="w-[40px] md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-dash-from-right"></div>
                </div>

                <!-- Social Items -->
                <div class="flex flex-wrap gap-4 items-center justify-center">
                    @for (item of socialItems; track $index) {
                        <app-button
                            type="html"
                            color="blue"
                            (click)="item.action()"
                        >
                            <div class="flex gap-x-4 items-center">
                                <app-svg
                                [name]="item.icon"
                                size="40"
                                color="white"
                                class="dark:block hidden"
                                />
                                <app-svg
                                [name]="item.icon"
                                size="40"
                                color="black"
                                class="dark:hidden"
                                />
                                <div class="flex flex-col items-start">
                                    <h3 class="dark:text-white text-black md:text-lg text-base">{{ item.title }}</h3>
                                    <p class="italic md:text-sm text-xs">{{ item.description }}</p>
                                </div>
                            </div>
                        </app-button>
                    }
                </div>
            </div>
        </div>
    </app-page>
    `
})
export class HomeComponent {
    private router = inject(Router);

    // Template reference to non-main section
    nonMainSection = viewChild<ElementRef>('nonMainSection');

    marqueeItems = [
        'ENGINEER',
        'DEVELOPER',
        'RESEARCHER',
        'DESIGNER',
        'BUILDER',
        'INNOVATOR',
        'MENTOR',
        'SCHOLAR',
        'CREATIVE'
    ];

    exploreItems = [
        {
            icon: 'timeline/crosshair',
            title: 'VIEW SKILLS',
            description: 'What I\'ve learned.',
            action: () => this.navigateToSkills()
        },
        {
            icon: 'timeline/compass',
            title: 'VIEW PROJECTS',
            description: 'What I\'ve created.',
            action: () => this.navigateToProjects()
        },
        {
            icon: 'timeline/potion',
            title: 'VIEW RESEARCH',
            description: 'What I\'ve discovered.',
            action: () => this.navigateToResearch()
        },
        {
            icon: 'timeline/toolbox',
            title: 'VIEW EXPERIENCE',
            description: 'Where I\'ve built.',
            action: () => this.navigateToExperience()
        },
        {
            icon: 'timeline/gradcap',
            title: 'VIEW EDUCATION',
            description: 'Where I\'ve studied.',
            action: () => this.navigateToEducation()
        }
    ];

    socialItems = [
        {
            icon: 'socials/github',
            title: 'GITHUB',
            description: 'View my projects\' source code.',
            action: () => this.navigateToGitHub()
        },
        {
            icon: 'socials/linkedin',
            title: 'LINKEDIN',
            description: 'Connect with and contact me.',
            action: () => this.navigateToLinkedIn()
        }
    ];

    timelineItems = [
        {
            icon: 'timeline/code',
            date: 'July 2025',
            description: 'Joined Motorola Solutions as a Software Engineer, transitioning from intern to full-time contributor'
        },
        {
            icon: 'timeline/gradcap',
            date: 'June 2025',
            description: 'Graduated summa cum laude from Northwestern University with a Bachelor of Science in Computer Science (4.0 GPA)'
        },
        {
            icon: 'timeline/trophy',
            date: 'May 2025',
            description: 'Recognized as an "Outstanding CS Senior" by Northwestern\'s Computer Science department'
        },
        {
            icon: 'timeline/code',
            date: 'June 2024',
            description: 'Launched my software engineering career as an intern at Motorola Solutions'
        },
        {
            icon: 'timeline/trophy',
            date: 'May 2024',
            description: 'Earned the "Peter and Adrienne Barris Outstanding Peer Mentor" award for exceptional teaching impact'
        },
        {
            icon: 'timeline/potion',
            date: 'May 2024',
            description: 'Established programming languages research collaboration with Dr. Christos Dimoulas'
        },
        {
            icon: 'timeline/potion',
            date: 'January 2024',
            description: 'Discovered programming languages theory through coursework—a turning point that shaped my Northwestern experience'
        },
        {
            icon: 'timeline/bullhorn',
            date: 'January 2024',
            description: 'Began mentoring students as a teaching assistant in Northwestern\'s Computer Science department'
        },
        {
            icon: 'timeline/waves',
            date: 'August 2023',
            description: 'Launched Swimeeter, my first large-scale full-stack application developed from concept to deployment'
        },
        {
            icon: 'timeline/bullhorn',
            date: 'June 2023',
            description: 'Began mentoring military veterans transitioning to software engineering at Code Platoon'
        },
        {
            icon: 'timeline/code',
            date: 'September 2022',
            description: 'Started my computer science journey at Northwestern University'
        },
        {
            icon: 'timeline/gradcap',
            date: 'May 2022',
            description: 'Graduated from New Trier High School with highest honors (4.0 GPA, unweighted)'
        },
        {
            icon: 'timeline/trophy',
            date: 'September 2021',
            description: 'Named a 2022 National Merit Semifinalist'
        }
    ];

    scrollToNonMainSection() {
        const nonMainElement = this.nonMainSection();
        if (nonMainElement) {
            nonMainElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    navigateToSkills() {
        this.router.navigate(['/skills']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    navigateToProjects() {
        this.router.navigate(['/projects']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    navigateToResearch() {
        this.router.navigate(['/research']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    navigateToExperience() {
        this.router.navigate(['/experience']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    navigateToEducation() {
        this.router.navigate(['/education']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    navigateToGitHub() {
        window.open('https://github.com/bennettlindberg', '_blank');
    }

    navigateToLinkedIn() {
        window.open('https://www.linkedin.com/in/bennett-lindberg', '_blank');
    }
}
