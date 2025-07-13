import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TitleComponent } from "../components/title.component";
import { PageComponent } from "../components/page.component";

@Component({
    selector: 'app-skills',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, PageComponent],
    template: `
    <app-page>
        <!-- Header -->
        <app-title text="SKILLS" />

        <!-- Skills Grid -->
        <div class="md:grid md:grid-cols-2 flex flex-col gap-10 max-w-6xl mx-auto">
            @for (skillArea of skillAreas; track skillArea.name) {
                <div class="md:grid flex gap-x-2">
                    <!-- Overall Skill Category -->
                    <div class="col-start-1 col-span-1 w-[30px] flex">
                        <h2 class="dark:text-white text-black font-semibold md:text-3xl text-2xl uppercase [writing-mode:sideways-lr] text-end tracking-wide">
                            {{ skillArea.name }}
                        </h2>
                    </div>
                    
                    <!-- Vertical Separator -->
                    <div class="col-start-2 col-span-1 dark:border-white border-black border-r-[1px] w-[5px] pl-2 mr-2"></div>
                    
                    <!-- Skills and Sub-Categories -->
                    <div class="col-start-3 col-span-1">
                        <div class="flex flex-col gap-x-6 gap-y-8">
                            @for (category of skillArea.categories; track category.name) {
                                <div>
                                    <h3 class="dark:text-white text-black uppercase md:text-2xl text-xl font-bold tracking-wide mb-2">
                                        {{ category.name }}
                                    </h3>
                                    <div class="flex flex-col gap-y-2">
                                        @for (skillGroup of category.skillGroups; track skillGroup.name) {
                                            <div>
                                                @if (skillGroup.name !== "Other") {
                                                    <h4 class="dark:text-blue-500 text-blue-600 uppercase font-bold md:text-base text-sm">
                                                        {{ skillGroup.name }}
                                                    </h4>
                                                }
                                                <div class="flex flex-wrap gap-x-2">
                                                    @for (skill of skillGroup.skills; track skill; let isLast = $last) {
                                                        <span class="dark:text-white text-black md:text-base text-sm">
                                                            {{ skill + (isLast ? "" : ",") }}
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    </app-page>
  `
})
export class SkillsComponent {
    skillAreas = [
        {
            name: 'Software Engineering',
            categories: [
                {
                    name: 'Programming Languages',
                    skillGroups: [
                        {
                            name: 'Primary',
                            skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++']
                        },
                        {
                            name: 'Additional',
                            skills: ['Racket', 'MATLAB', 'x86 Assembly']
                        },
                        {
                            name: 'Query',
                            skills: ['SQL']
                        }
                    ]
                },
                {
                    name: 'Frontend Technologies',
                    skillGroups: [
                        {
                            name: 'Frameworks',
                            skills: ['React', 'Angular', 'Next.js']
                        },
                        {
                            name: 'Styling',
                            skills: ['CSS', 'Tailwind CSS']
                        },
                        {
                            name: 'Build Tools',
                            skills: ['Vite']
                        },
                        {
                            name: 'Markup',
                            skills: ['HTML']
                        }
                    ]
                },
                {
                    name: 'Backend Technologies',
                    skillGroups: [
                        {
                            name: 'Frameworks',
                            skills: ['Next.js', 'Node.js', 'Django', 'Spring Boot']
                        },
                        {
                            name: 'API Development',
                            skills: ['REST']
                        },
                        {
                            name: 'Authentication',
                            skills: ['Session Tokens', 'JSON Web Tokens (JWTs)']
                        }
                    ]
                },
                {
                    name: 'Database & Storage',
                    skillGroups: [
                        {
                            name: 'Relational',
                            skills: ['PostgreSQL', 'SQLite']
                        },
                        {
                            name: 'NoSQL',
                            skills: ['MongoDB', 'Redis']
                        },
                        {
                            name: 'Design',
                            skills: ['Database Schema Design', 'Object-Relational Mappings (ORMs)']
                        }
                    ]
                },
                {
                    name: 'Cloud & Infrastructure',
                    skillGroups: [
                        {
                            name: 'AWS Services',
                            skills: ['S3', 'RDS', 'EC2', 'Lambda', 'API Gateway', 'IAM', 'Route 53']
                        },
                        {
                            name: 'Containerization',
                            skills: ['Docker', 'Podman']
                        },
                        {
                            name: 'Real-time Communication',
                            skills: ['WebSockets', 'Server-Sent Events', 'Apache Kafka']
                        }
                    ]
                },
                {
                    name: 'Development Practices',
                    skillGroups: [
                        {
                            name: 'Methodologies',
                            skills: ['Agile Software Development']
                        },
                        {
                            name: 'Version Control',
                            skills: ['Git', 'GitHub']
                        },
                        {
                            name: 'CI/CD',
                            skills: ['GitHub Actions', 'Continuous Integration/Continuous Delivery']
                        },
                        {
                            name: 'Deployment',
                            skills: ['AWS', 'GitHub Pages']
                        }
                    ]
                },
                {
                    name: 'Programming Paradigms',
                    skillGroups: [
                        {
                            name: 'General',
                            skills: ['Object-Oriented Programming (OOP)', 'Functional Programming']
                        },
                        {
                            name: 'Scaling',
                            skills: ['Reactive Programming', 'Asynchronous Programming', 'Concurrent Programming']
                        }
                    ]
                },
                {
                    name: 'Documentation & Markup',
                    skillGroups: [
                        {
                            name: 'General',
                            skills: ['LaTeX', 'Markdown']
                        },
                        {
                            name: 'Configuration',
                            skills: ['YAML']
                        }
                    ]
                }
            ]
        },
        {
            name: 'Computer Science',
            categories: [
                {
                    name: 'Algorithms & Computational Theory',
                    skillGroups: [
                        {
                            name: 'Algorithm Design',
                            skills: ['Greedy Algorithms', 'Dynamic Programming']
                        },
                        {
                            name: 'Complexity Analysis',
                            skills: ['Asymptotic Complexity (Big-O)', 'NP-Hardness']
                        }
                    ]
                },
                {
                    name: 'Mathematics',
                    skillGroups: [
                        {
                            name: 'Calculus',
                            skills: ['Differential & Integral Calculus']
                        },
                        {
                            name: 'Linear Systems',
                            skills: ['Linear Algebra']
                        },
                        {
                            name: 'Discrete Mathematics',
                            skills: ['Combinatorics', 'Graph Theory']
                        },
                        {
                            name: 'Statistics',
                            skills: ['Probability Theory']
                        },
                        {
                            name: 'Visualization',
                            skills: ['Data Visualization (MATLAB)']
                        }
                    ]
                },
                {
                    name: 'Systems & Architecture',
                    skillGroups: [
                        {
                            name: 'Hardware',
                            skills: ['CMOS Circuitry', 'Finite State Machines']
                        },
                        {
                            name: 'Memory Management',
                            skills: ['Cache Layers', 'Virtual Memory']
                        },
                        {
                            name: 'I/O',
                            skills: ['File Systems', 'Device Drivers']
                        },
                        {
                            name: 'Concurrency',
                            skills: ['Thread Scheduling', 'Mutexes', 'Semaphores']
                        }
                    ]
                },
                {
                    name: 'Networks & Communication',
                    skillGroups: [
                        {
                            name: 'Network Protocols',
                            skills: ['HTTP/HTTPS', 'DNS', 'TLS', 'TCP/UDP', 'QUIC', 'IP', 'BGP', 'DHCP']
                        },
                        {
                            name: 'Network Infrastructure',
                            skills: ['Switches', 'Routers', 'Subnets', 'Autonomous Systems']
                        },
                        {
                            name: 'Internet Architecture',
                            skills: ['ISPs', 'Content Providers', 'Content Delivery Networks (CDNs)']
                        },
                        {
                            name: 'Network Services',
                            skills: ['Load Balancing', 'Network Address Translation (NAT)']
                        },
                        {
                            name: 'Security Protocols',
                            skills: ['Public Key Infrastructure (PKI)', 'Digital Certificates', 'Onion Routing']
                        },
                        {
                            name: 'Link Layer',
                            skills: ['Ethernet', 'Medium Access Control (MAC)']
                        }
                    ]
                },
                {
                    name: 'Cybersecurity',
                    skillGroups: [
                        {
                            name: 'Security Design',
                            skills: ['Threat Modeling', 'Access Control', 'Content Security Policies (CSPs)']
                        },
                        {
                            name: 'Cryptography',
                            skills: ['Symmetric & Asymmetric Encryption', 'Hashing & Salting']
                        },
                        {
                            name: 'Authentication',
                            skills: ['Message Authentication Codes (MACs)', 'Digital Signatures']
                        },
                        {
                            name: 'Web Security',
                            skills: ['SQL Injection Prevention', 'Cross-Site Scripting (XSS) Prevention']
                        }
                    ]
                },
                {
                    name: 'Programming Languages Theory',
                    skillGroups: [
                        {
                            name: 'Theoretical Foundations',
                            skills: ['Lambda Calculus', 'Operational Semantics']
                        },
                        {
                            name: 'Language Implementation',
                            skills: ['Parsers', 'Interpreters', 'Garbage Collection', 'PLT Redex']
                        },
                        {
                            name: 'Language Control',
                            skills: ['Type Systems', 'Software Contracts']
                        }
                    ]
                }
            ]
        }
    ];
}
