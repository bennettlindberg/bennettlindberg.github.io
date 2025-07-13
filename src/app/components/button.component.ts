import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { SvgComponent } from './svg.component';

type ButtonType = 'text' | 'svg' | 'html';
type ButtonColor = 'blue' | 'orange';

@Component({
    selector: 'app-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SvgComponent],
    template: `
    <div class="group relative inline-block leading-0">
        <!-- Offset Background Div -->
        <div class="absolute -z-5 -right-1 -top-1 dark:border-white border-black border-[1px] w-full h-full dark:bg-white bg-black"></div>
        
        <!-- Foreground Button -->
        <button
            type="button"
            [class]="buttonClasses()"
            (click)="handleClick($event)"
        >
            @if (type() === 'text') {
                {{ textContent() }}
            } @else if (type() === 'svg') {
                <app-svg
                    [name]="svgContent()"
                    [size]="svgSize()"
                    color="white"
                    class="hidden dark:block"
                />
                <app-svg
                    [name]="svgContent()"
                    [size]="svgSize()"
                    color="black"
                    class="dark:hidden"
                />
            } @else { <!-- Arbitrary HTML Content -->
                <ng-content></ng-content>
            }
        </button>
    </div>
    `
})
export class ButtonComponent {
    // Content Inputs
    type = input<ButtonType>('text');
    textContent = input<string>('');
    svgContent = input<string>('logo-foreground');
    svgSize = input<string>('24');

    // Style Inputs
    color = input<ButtonColor>('blue');
    class = input<string>('');

    // Output
    click = output<void>();

    // Computed styles
    buttonClasses = () => {
        const baseClasses = [
            'relative',
            'hover:-top-0.5',
            'hover:-right-0.5',
            'active:-top-1',
            'active:-right-1',
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
            'dark:bg-black bg-white',
            'dark:text-white text-black'
        ];

        // Size classes
        const typeClasses = {
            text: ['px-4', 'py-2', 'md:text-sm', 'text-xs'],
            svg: [''],
            html: ['px-4', 'py-2']
        };

        // Color classes
        let colorClasses: Record<ButtonColor, string[]> = {
            blue: [
                'dark:group-hover:bg-blue-600',
                'dark:group-active:bg-blue-500',
                'group-hover:bg-blue-500',
                'group-active:bg-blue-600',
            ],
            orange: [
                'dark:group-hover:bg-orange-600',
                'dark:group-active:bg-orange-500',
                'group-hover:bg-orange-500',
                'group-active:bg-orange-600',
            ]
        };

        return [
            ...baseClasses,
            ...typeClasses[this.type()],
            ...colorClasses[this.color()],
            this.class()
        ].join(' ');
    };

    handleClick(event: Event) {
        event.stopPropagation();
        this.click.emit();
    }
}
