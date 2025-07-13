import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent, ProjectData } from '../components/project-card.component';
import { TitleComponent } from "../components/title.component";
import { PageComponent } from "../components/page.component";

@Component({
    selector: 'app-research',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, ProjectCardComponent, PageComponent],
    template: `
    <app-page>
        <!-- Header -->
        <app-title text="RESEARCH" />

        <!-- Research Grid -->
        <div class="flex flex-col gap-y-10">
            @for (research of researchProjects; track research.name; let isLast = $last) {
                <app-project-card
                    [name]="research.name"
                    [tagline]="research.tagline"
                    [date]="research.date"
                    [description]="research.description"
                    [features]="research.features"
                    [tools]="research.tools"
                    [image]="research.image"
                    [links]="research.links"
                    [isLast]="isLast"
                />
            }
        </div>
    </app-page>
    `
})
export class ResearchComponent {
    researchProjects: ProjectData[] = [
        {
            name: 'Contract Program Tracer',
            tagline: 'Racket program debug tracing driven by software contract imitation',
            date: 'June 2025',
            description: [
                [
                    'Although software contracts are highly expressive in defining and monitoring program behavior, their real-world adoption remains small. This research is part of a broader effort lead by Dr. Christos Dimoulas to maximize the practical utility (and subsequent adoption) of software contracts. In this work, ',
                    'we demonstrate an ability to trace and debug Racket programs using techniques derived from Racket\'s underlying contract implementation',
                    '.',
                ],
                [
                    'Leveraging impersonation of data structures, we monitor program behavior on procedures and structs and capture program metadata at each event. When combined with Racket\'s macro system, ',
                    'contract-like impersonation allows us to capture trace events in chronological order on arbitrary programs',
                    ', illustrating a broader capability of software contracts to yield meaningful program insights even when contract violations do not occur.'
                ],
            ],
            features: [
                'We trace Racket programs without requiring developers to rewrite their code',
                'We supply macros and contracts that enable fine-grained trace control',
                'Our approach captures all meaningful events corresponding to structs and procedures',
                'Various executables and export utilities exist for retrieving traces from Racket programs (for example, export to JSON)'
            ],
            tools: [
                {
                    name: 'Languages',
                    tools: ['Racket', 'JSON']
                },
                {
                    name: 'Concepts',
                    tools: ['Macros', 'Software Contracts', 'Impersonation', 'Code Tracing']
                }
            ],
            image: '/images/research/contract-program-tracer.png',
            links: [
                // { text: 'GITHUB REPO', url: '#' }
            ]
        },
        {
            name: 'Symbolic Type Inference Engine',
            tagline: 'Automated Racket type inference engine powered by symbolic evaluation and SMT solvers',
            date: 'March 2025',
            description: [
                [
                    'Software developers often begin projects with dynamically-typed languages for rapid prototyping, but later need static typing for maintainability and type safety. However, manual type annotation of large codebases is prohibitively time-consuming, and existing automated type generation approaches are either imprecise or limited to small-scale programs. This research addresses the fundamental challenge of ',
                    'automatically generating precise type annotations for large, real-world programs',
                    '.',
                ],
                [
                    'Advised by Dr. Christos Dimoulas, fellow undergraduate Andrew Li and I ',
                    'developed a novel approach using symbolic evaluation and SMT solvers to automatically infer types',
                    ' by observing program behavior during execution. Our implementation in Racket/Rosette represents values as symbolic unions and builds concrete type trees that expand dynamically as compound types are discovered. This allows us to ',
                    'generate precise types without requiring any concrete inputs from programmers',
                    ', naturally exploring all possible execution paths through symbolic reasoning.'
                ]
            ],
            features: [
                'Our approach generates precise types without requiring concrete test cases or user annotations',
                'We leverage symbolic evaluation to cover infinitely-sized value spaces and explore all execution paths',
                'Compound type structures (structs, functions) are naturally discovered during program evaluation by observing usage patterns',
                'We leverage the Z3 theorem prover to resolve type constraints and assign concrete types to symbolic unions',
                'Our work supports higher-order functions, struct types, conditionals, and variable assignments'
            ],
            tools: [
                {
                    name: 'Languages',
                    tools: ['Racket']
                },
                {
                    name: 'Concepts',
                    tools: ['Macros', 'Symbolic Evaluation', 'SMT Solvers', 'Type Systems', 'Type Inference']
                }
            ],
            image: '/images/research/symbolic-type-inference.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/SymbolicTypeInference' },
                { text: 'RESEARCH POSTER', url: 'https://github.com/bennettlindberg/SymbolicTypeInference/blob/main/docs/ResearchPoster.pdf' },
                { text: 'RESEARCH PROPOSAL', url: 'https://github.com/bennettlindberg/SymbolicTypeInference/blob/main/docs/ResearchProposal.pdf' }
            ]
        },
        {
            name: 'Clighter Mechanized Semantics',
            tagline: 'Mechanized big-step operational semantics for subset of the C programming language',
            date: 'June 2024',
            description: [
                [
                    'Operational semantics provide formal mathematical definitions of programming language behavior, which can be useful in verifying the correctness of code produced by compilers. To explore the validity of CompCert (a verified C compiler), Northwestern Master\'s student Jerry Lu and I ',
                    'implemented Clighter, a mechanized big-step operational semantics for a subset of C',
                    '.',
                ],
                [
                    'Our implementation ',
                    'transpiles the formal semantics of Clight (CompCert\'s source language) into executable PLT Redex code',
                    ', creating a working interpreter that precisely captures C\'s behavior for control flow, memory operations, and data structures. Through comprehensive testing on programs including binary search, linked list manipulation, and the Collatz conjecture, we demonstrated that our mechanized semantics accurately reflects expected C behavior across complex scenarios.'
                ],
            ],
            features: [
                'This work mechanizes C language reduction rules from academic literature, allowing for direct testing of those rules through code execution',
                'We validate the correctness of our semantics (and the reduction rules from prior literature) through extensive test suites covering edge cases and complex program behaviors',
                'We support branching, loops, pointers, structs, and several more C features while eliminating ambiguous C language behavior',
                'Our semantics accurately and formally models standout C features like pointer arithmetic and memory management'
            ],
            tools: [
                {
                    name: 'Languages',
                    tools: ['Racket', 'PLT Redex', 'C', 'Clight']
                },
                {
                    name: 'Concepts',
                    tools: ['Operational Semantics']
                }
            ],
            image: '/images/research/clighter.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/Clighter' },
                { text: 'RESEARCH PRESENTATION', url: 'https://github.com/bennettlindberg/Clighter/blob/master/docs/Background-Presentation.pdf' },
                { text: 'ORIGINAL CLIGHT PAPER', url: 'https://link.springer.com/article/10.1007/s10817-009-9148-3' }
            ]
        },
        {
            name: 'Esterel Wristwatch',
            tagline: 'Racket-Esterel implementation of Gérard Berry\'s 1989 Esterel wristwatch',
            date: 'June 2024',
            description: [
                [
                    'Esterel is an esoteric synchronous programming language from the 1980s featuring signal-based control flow and pause-synchronized parallelism (somewhat similar to finite-state machines and digital circuits). To empirically explore Esterel\'s capabilities and development feasibility, I collaborated with Ph.D. student Nathaniel Hejduk to ',
                    'transpile Gérard Berry\'s original 1989 Esterel wristwatch implementation into a Racket-based implementation of Esterel',
                    '.',
                ],
                [
                    'Our work illustrates Esterel\'s unique programming paradigm through a ', 'fully-functional wristwatch GUI',
                    ' that handles complex state management via signal emission and presence detection. Esterel\'s synchronous parallelism proved useful in communicating state changes between disparate watch elements but also made state persistence more challenging.'
                ],
            ],
            features: [
                'We implement a complete wristwatch interface with real-time display and button press interactions',
                'Our approach implements complex wristwatch logic using Esterel\'s signal emission and detection paradigm instead of traditional state variables',
                'Our work leverages pause-synchronized execution to allow button press handling and time logic to run in parallel "threads"',
                'We use signals to persist state, keeping track of watch operation modes and toggles',
                'We extend Racket\'s Esterel implementation with "await-cases" syntax for multi-condition signal waiting'
            ],
            tools: [
                {
                    name: 'Languages',
                    tools: ['Racket', 'Esterel']
                },
                {
                    name: 'Concepts',
                    tools: ['FSMs']
                }
            ],
            image: '/images/research/esterel-wristwatch.png',
            links: [
                { text: 'GITHUB REPO', url: 'https://github.com/bennettlindberg/RacketEsterelWatch' },
                { text: 'ORIGINAL ESTEREL PAPER', url: 'https://www.researchgate.net/publication/43611052_Programming_a_digital_watch_in_Esterel_v3' }
            ]
        }
    ];
}
