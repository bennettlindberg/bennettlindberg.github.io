import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button.component";
import { HighlightComponent } from "./highlight.component";

export interface ProjectLink {
    text: string;
    url: string;
}

export interface ToolCategory {
    name: string;
    tools: string[];
}

export interface ProjectData {
    name: string;
    tagline: string;
    date: string;
    description: string[][];
    features: string[];
    tools: ToolCategory[];
    image: string;
    links: ProjectLink[];
}

@Component({
    selector: 'app-project-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ButtonComponent, HighlightComponent],
    template: `
    <div class="md:grid flex flex-col gap-2">
        <!-- Project Header -->
        <div class="col-start-1 col-span-1 md:w-[360px]">
            <!-- Header -->
            <div class="mb-4">
                <h3 class="md:text-3xl text-2xl font-bold dark:text-white text-black mb-1 uppercase tracking-wide">{{ name() }}</h3>
                <p class="dark:text-blue-500 text-blue-600 md:text-lg text-base font-medium mb-1">{{ tagline() }}</p>
                <p class="dark:text-white text-black md:text-base text-sm font-medium tracking-wide">{{ date() }}</p>
            </div>

            <!-- Image -->
            <img 
                [src]="image()" 
                [alt]="name() + ' project screenshot'"
                class="md:max-w-[360px] md:max-h-[360px] max-w-[240px] max-h-[240px] aspect-square object-left-top object-cover dark:bg-black bg-white dark:border-white border-black dark:text-white text-black border-[1px] mb-6"
                loading="lazy"
            />

            <!-- Links -->
            @if (links().length > 0) {
                <div class="flex flex-wrap gap-4 mt-4">
                    @for (link of links(); track link.url) {
                        <app-button
                            type="text"
                            textContent="{{ link.text }}"
                            color="blue"
                            (click)="window.open(link.url, '_blank')"
                        />
                    }
                </div>
            }
        </div>

        <!-- Vertical Separator -->
        <div class="col-start-2 col-span-1 dark:border-white border-black border-r-[1px] w-6 h-full md:visible invisible"></div>

        <!-- Project Details -->
        <div class="col-start-3 col-span-2 md:grid flex flex-col md:gap-x-6 md:gap-y-8 gap-y-2">
            <!-- Description -->
            <h4 class="col-start-1 col-span-1 dark:text-white text-black font-semibold md:text-xl text-lg uppercase md:[writing-mode:sideways-lr] md:text-end tracking-wide pt-1">Description</h4>
            <div class="col-start-2">
                @for (paragraph of description(); track $index) {
                    <p class="dark:text-white text-black md:text-base text-sm leading-relaxed mb-3 last:mb-0">
                        @for (chunk of paragraph; track $index) {
                            @if ($index % 2 === 0) {
                                <span>{{ chunk }}</span>
                            } @else {
                                <app-highlight>{{ chunk }}</app-highlight>
                            }
                        }
                    </p>
                }
            </div>

            <!-- Features -->
            <h4 class="col-start-1 col-span-1 dark:text-white text-black font-semibold md:text-xl text-lg uppercase md:[writing-mode:sideways-lr] md:text-end tracking-wide pt-1">Features</h4>
            <div class="col-start-2">
                <ul class="gap-y-2">
                @for (feature of features(); track $index) {
                    <li class="dark:text-white text-black md:text-base text-sm flex items-start">
                        <span class="font-bold text-base mr-3">–</span>
                        <span>{{ feature }}</span>
                    </li>
                }
                </ul>
            </div>
            
            <!-- Tools -->
            <h4 class="col-start-1 col-span-1 dark:text-white text-black font-semibold md:text-xl text-lg uppercase md:[writing-mode:sideways-lr] md:text-end tracking-wide pt-1">Technologies</h4>
            <div class="col-start-2">
                <div class="flex flex-col gap-y-2">
                @for (category of tools(); track category) {
                    <div>
                        @if (category.name !== "Other") {
                            <h5 class="dark:text-blue-500 text-blue-600 md:text-base text-sm font-bold uppercase tracking-wide mb-1">
                                {{ category.name }}
                            </h5>
                        }
                        <div class="flex gap-x-2 flex-wrap">
                            @for (tool of category.tools; track tool; let isLast = $last) {
                                <span class="dark:text-white text-black md:text-base text-sm">
                                    {{ tool + (isLast ? "" : ",") }}
                                </span>
                            }
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile Horizontal Separator -->
    @if (!isLast()) {
        <div class="md:hidden dark:border-white border-black border-b-[1px] h-6 w-full"></div>
    }
  `
})
export class ProjectCardComponent {
    name = input.required<string>();
    tagline = input.required<string>();
    date = input.required<string>();
    description = input.required<string[][]>();
    features = input.required<string[]>();
    tools = input.required<ToolCategory[]>();
    image = input.required<string>();
    links = input.required<ProjectLink[]>();
    isLast = input<boolean>(false);

    // Expose Object.keys for template use
    Object = Object;

    // Expose window for template use
    window = window;
}