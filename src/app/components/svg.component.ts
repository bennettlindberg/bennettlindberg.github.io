import { Component, ChangeDetectionStrategy, input, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-svg',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe],
    template: `
    @if (svgContent$ | async; as content) {
        <div 
            [innerHTML]="content"
            [class]="wrapperClasses()"
        ></div>
    }
  `
})
export class SvgComponent {
    private http = inject(HttpClient);
    private sanitizer = inject(DomSanitizer);

    // Input properties
    name = input.required<string>();
    size = input<string>('24');
    color = input<string>('currentColor');
    class = input<string>('');

    // Computed properties
    wrapperClasses = computed(() => {
        const baseClasses = 'flex items-center justify-center';
        const customClasses = this.class();
        return customClasses ? `${baseClasses} ${customClasses}` : baseClasses;
    });

    // Convert signals to observables and create the SVG content stream
    svgContent$: Observable<SafeHtml> = toObservable(this.name).pipe(
        switchMap(iconName => {
            const iconColor = this.color();
            const iconSize = this.size();

            return this.http.get(`/svgs/${iconName}.svg`, { responseType: 'text' }).pipe(
                map((svgText: string) => {
                    // Replace fill color and size in the SVG
                    let modifiedSvg = svgText
                        .replace(/fill="[^"]*"/g, `fill="${iconColor}"`)
                        .replace(/width="[^"]*"/g, `width="${iconSize}"`)
                        .replace(/height="[^"]*"/g, `height="${iconSize}"`);

                    return this.sanitizer.bypassSecurityTrustHtml(modifiedSvg);
                }),
                catchError(error => {
                    console.error(`Failed to load SVG icon: ${iconName}`, error);
                    return of(this.sanitizer.bypassSecurityTrustHtml(''));
                })
            );
        })
    );
}
