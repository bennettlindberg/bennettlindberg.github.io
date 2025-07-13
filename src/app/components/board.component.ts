import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { SvgComponent } from './svg.component';

type BoardType = 'text' | 'svg' | 'html';
type BoardStyle = 'default' | 'timeline' | 'motorola' | 'northwestern' | 'codePlatoon';

@Component({
    selector: 'app-board',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SvgComponent],
    template: `
    <div class="group relative inline-block leading-0">
        <!-- Offset Background Div -->
        <div class="absolute -z-5 -right-1 -top-1 dark:border-white border-black border-[1px] w-full h-full dark:bg-white bg-black"></div>
        
        <!-- Foreground Div -->
        <div [class]="boardClasses()">
            @if (type() === 'text') {
                {{ textContent() }}
            } @else if (type() === 'svg') {
                <app-svg
                    [name]="svgContent()"
                    [size]="svgSize()"
                    color="white"
                    [class]="darkModeSvgClasses()"
                />
                <app-svg
                    [name]="svgContent()"
                    [size]="svgSize()"
                    color="black"
                    [class]="lightModeSvgClasses()"
                />
            } @else { <!-- Arbitrary HTML Content -->
                <ng-content></ng-content>
            }
        </div>
    </div>
    `
})
export class BoardComponent {
    // Content Inputs
    type = input<BoardType>('text');
    textContent = input<string>('');
    svgContent = input<string>('logo-foreground');
    svgSize = input<string>('24');

    // Style Inputs
    style = input<BoardStyle>('motorola');
    class = input<string>('');

    // Output
    click = output<void>();

    // Computed styles
    boardClasses = () => {
        const baseClasses = [
            'relative',
            'dark:border-white border-black',
            'border-[1px]',
            'inline-flex',
            'items-center',
            'justify-center',
            'font-medium',
            'transition-all',
            'ease-in-out',
            'duration-100',
            'space-mono-bold',
            'dark:text-white text-black'
        ];

        // Size classes
        const typeClasses = {
            text: ['px-4', 'py-2', 'md:text-sm', 'text-xs'],
            svg: [''],
            html: ['px-4', 'py-2']
        };

        // Style classes
        let styleClasses: Record<BoardStyle, string[]> = {
            default: [
                'bg-white dark:bg-black',
            ],
            timeline: [
                'bg-white dark:bg-black',
                'p-2'
            ],
            motorola: [
                'bg-[#2961C2]',
            ],
            northwestern: [
                'bg-[#511788]',
            ],
            codePlatoon: [
                'bg-[#2B93A2]',
            ]
        };

        return [
            ...baseClasses,
            ...typeClasses[this.type()],
            ...styleClasses[this.style()],
            ...this.class()
        ].join(' ');
    };

    lightModeSvgClasses = () => {
        if (this.style() === 'motorola' || this.style() === 'northwestern' || this.style() === 'codePlatoon') {
            return "hidden";
        }
        return "dark:hidden";
    };

    darkModeSvgClasses = () => {
        if (this.style() === 'motorola' || this.style() === 'northwestern' || this.style() === 'codePlatoon') {
            return "block";
        }
        return "hidden dark:block";
    };
}
