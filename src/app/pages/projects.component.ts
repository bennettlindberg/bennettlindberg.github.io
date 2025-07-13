import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent, ProjectData } from '../components/project-card.component';
import { TitleComponent } from "../components/title.component";
import { PageComponent } from "../components/page.component";

@Component({
    selector: 'app-projects',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ProjectCardComponent, TitleComponent, PageComponent],
    template: `
    <app-page>
        <!-- Header -->
        <app-title text="PROJECTS" />
        
        <!-- Projects Grid -->
        <div class="flex flex-col gap-y-10">
            @for (project of projects; track project.name; let isLast = $last) {
                <app-project-card
                    [name]="project.name"
                    [tagline]="project.tagline"
                    [date]="project.date"
                    [description]="project.description"
                    [features]="project.features"
                    [tools]="project.tools"
                    [image]="project.image"
                    [links]="project.links"
                    [isLast]="isLast"
                />
            }
        </div>
    </app-page>
    `
})
export class ProjectsComponent {
    projects: ProjectData[] = [
        {
            name: 'Twitter Clone',
            tagline: 'Full-stack AI-drafted MVP clone of Twitter',
            date: 'June 2025',
            description: [
                [
                    'Generative AI tools have sharply transformed software development practices, but AI-driven software construction coursework remains in its infancy. In my final semester at Northwestern, I enrolled in a brand-new AI-driven software course to address this educational gap. There, ',
                    'I recreated Twitter\'s core functionality using generative AI as extensively as possible',
                    '. This full-stack Twitter clone serves as a ',
                    'comprehensive case study examining generative AI capabilities',
                    ' and best practices in modern software construction.'
                ],
                [
                    'The project revealed AI\'s impressive ability to generate functioning code and make sound architectural decisions—selecting appropriate frameworks, languages, libraries, and databases with minimal guidance. However, significant limitations emerged in high-quality test generation and project configuration debugging. Human oversight proved critical for preventing AI agents from making poor decisions and ensuring proper security implementation.'
                ]
            ],
            features: [
                'Real-time social media functionality including tweets, retweets, comments, and likes',
                'User relationship management with follow and block capabilities',
                'Dynamic feed algorithm that respects user preferences and blocking relationships',
                'User account system with secure authentication, session management, and credential storage',
                'Personalized profiles with customizable bios, profile pictures, and usernames'
            ],
            tools: [
                {
                    name: 'Generative AI',
                    tools: ['Copilot Chat', 'Copilot Agent', 'GPT 4.0', 'Claude Sonnet 3.7']
                },
                {
                    name: 'Front-End',
                    tools: ['Next', 'React', 'TypeScript', 'HTML', 'Tailwind CSS']
                },
                {
                    name: 'Back-End',
                    tools: ['Next', 'TypeScript', 'JWTs']
                },
                {
                    name: 'Database',
                    tools: ['SQLite', 'SQL']
                }
            ],
            image: '/images/projects/twitter-clone.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/TwitterClone' },
                { text: 'ARCHITECTURE DOCS', url: 'https://github.com/bennettlindberg/TwitterClone/tree/main/docs' },
                { text: 'VIDEO WALKTHROUGH', url: 'https://drive.google.com/file/d/1GH6XYjyn4pfBgjyvXbtuRKFvv3962ias/view?usp=sharing' }
            ]
        },
        {
            name: 'Graph Theory Tool Suite',
            tagline: 'Cloud-native AWS graph generator, analyzer, and visualizer',
            date: 'March 2025',
            description: [
                [
                    'Graph theory problems are difficult to visualize and analyze manually. This full-stack, cloud-native application tackles that challenge by providing ',
                    'an intuitive platform for graph manipulation and analysis',
                    ' built on AWS\'s scalable infrastructure.'
                ],
                [
                    'Users start by uploading their own graph data or generating random graphs. Then, this application can analyze those graphs using algorithms like Dijkstra\'s shortest path, Prim\'s minimum spanning tree, and cycle detection. For visualization, this project provides graph depictions on demand as PNG images.'
                ],
                [
                    '',
                    'This system leverages cloud technologies to deliver scalability and reliability',
                    ' for graph tooling workloads. In particular, graph analysis is performed asynchronously to handle arbitrarily large graphs without timeout limitations. Furthermore, the serverless compute tier automatically scales to meet varying user demand.'
                ]
            ],
            features: [
                'Random graph generation with customizable parameters (bipartite, complete, tree, etc.)',
                "Graph algorithm implementations, including Dijkstra's shortest path and Prim's MST",
                'Automated graph visualization with PNG file output',
                'Asynchronous job processing for large-scale graph analysis',
                'Scalable cloud architecture that handles large user loads'
            ],
            tools: [
                {
                    name: 'Routing',
                    tools: ['AWS API Gateway']
                },
                {
                    name: 'Compute',
                    tools: ['AWS Lambda', 'Python']
                },
                {
                    name: 'Visuals',
                    tools: ['Matplotlib', 'NumPy', 'NetworkX']
                },
                {
                    name: 'Storage',
                    tools: ['AWS S3', 'AWS RDS']
                }
            ],
            image: '/images/projects/graph-app.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/GraphApp' },
                { text: 'ARCHITECTURE DOCS', url: 'https://github.com/bennettlindberg/GraphApp/blob/main/docs/Graph-App-Specification.pdf' },
                { text: 'VIDEO WALKTHROUGH', url: 'https://drive.google.com/file/d/1hW6dbTfwhly3ayByUACvJGDWqCeozDQ2/view?usp=sharing' }
            ]
        },
        {
            name: 'Swimeeter',
            tagline: 'Full-stack swim competition event management system',
            date: 'August 2023',
            description: [
                [
                    'Organizing and generating heat sheets for large-scale swim competitions is complex, requiring the coordination of thousands of data points across swimmers, teams, events, pools, and sessions. Swimeeter provides ',
                    'an intuitive, comprehensive platform for swim meet management, saving time and avoiding errors',
                    ' when compared to manual meet coordination.'
                ],
                [
                    'This full-stack web application establishes ',
                    'a streamlined digital workflow for swim meet construction and organization',
                    '. Users can create detailed meet structures, generate professional heat sheets with automated seeding algorithms, and share meets publicly to facilitate transparent communication with participants and spectators.'
                ]
            ],
            features: [
                'Complete swim meet lifecycle management from creation to heat sheet generation',
                'Automated event seeding with competition-standard heat and lane assignments',
                'Comprehensive data validation and duplicate detection systems',
                'User account system with secure authentication, personalized settings, and meet persistence',
                'Responsive design supporting both desktop and mobile interfaces',
                'Real-time error handling with contextual guidance messages'
            ],
            tools: [
                {
                    name: 'Hosting',
                    tools: ['AWS EC2', 'AWS Route 53']
                },
                {
                    name: 'Front-End',
                    tools: ['React', 'Vite', 'TypeScript', 'HTML', 'Tailwind CSS']
                },
                {
                    name: 'Back-End',
                    tools: ['Django', 'Django REST Framework', 'Python', 'JWTs']
                },
                {
                    name: 'Database',
                    tools: ['PostgreSQL', 'SQL']
                }
            ],
            image: '/images/projects/swimeeter.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/Swimeeter' }
            ]
        },
        {
            name: '2D CARTESIAN GRAPHER',
            tagline: 'Desktop-native Cartesian function plotter and calculator',
            date: 'July 2022',
            description: [
                [
                    'Creating mathematical function visualizations by hand is tedious and often inaccurate. This desktop application ',
                    'makes function plotting effortless, enabling users to generate polished mathematical graphs with just a few keystrokes',
                    '.'
                ],
                [
                    'The application displays and manages many functions simultaneously, enabling the creation of complex plots. With its streamlined interface, users can quickly add, modify, and organize numerous functions on a single coordinate plane. These features are ',
                    'excellent for comparing and presenting mathematical relationships',
                    ' with clarity and precision.'
                ]
            ],
            features: [
                'Real-time function plotting with support for standard mathematical operations',
                'Interactive coordinate plane with smooth zooming and panning capabilities',
                'Advanced management system for editing, hiding, and organizing multiple functions',
                'Customizable visual elements including colors, tick marks, and graph line styling',
                'Resizable desktop interface that adapts to different screen sizes'
            ],
            tools: [
                {
                    name: 'Visuals',
                    tools: ['SFML']
                },
                {
                    name: 'Logic',
                    tools: ['C++']
                }
            ],
            image: '/images/projects/2d-grapher.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/2DGrapher' }
            ]
        }
    ];
}
