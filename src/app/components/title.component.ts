import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
    selector: 'app-title',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <div class="pb-10 pt-[140px] w-fit">
            <h1 class="md:text-5xl text-4xl dark:text-white text-black space-mono-bold mb-2">{{ text() }}</h1>
            <div class="md:border-t-[6px] border-t-[5px] dark:border-orange-600 border-orange-500 sliding-underline"></div>
        </div>
    `
})
export class TitleComponent {
    text = input.required<string>();
}
