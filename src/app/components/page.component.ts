import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
    <div class="appear">
        <div class="max-w-6xl mx-auto min-h-screen px-4">
            <ng-content></ng-content>
        </div>
    </div>
    `
})
export class PageComponent { }
