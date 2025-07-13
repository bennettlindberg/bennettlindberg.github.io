import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-highlight',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
    <mark class="dark:bg-orange-600 bg-orange-500 font-bold dark:text-white text-black">
        <ng-content></ng-content>
    </mark>
  `
})
export class HighlightComponent { }
