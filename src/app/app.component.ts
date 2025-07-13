import { Component, ChangeDetectionStrategy, inject, signal, viewChild, ElementRef } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ButtonComponent } from "./components/button.component";
import { BoardComponent } from "./components/board.component";

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, ButtonComponent, BoardComponent],
    template: `
    <div #topOfPage class="min-h-screen dark:bg-black bg-white relative overflow-hidden">
        <!-- Dot Grid Background -->
        <div class="absolute inset-0 dark:opacity-30 opacity-45 dark:bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        
        <!-- Navigation Bar -->
        <nav class="fixed w-full h-[100px] z-100 mx-auto p-4 flex justify-between items-start bg-gradient-to-b dark:from-black from-white to-transparent">
            <!-- Logo -->
            <app-button
                type="svg"
                color="orange"
                svgContent="nav/logo-foreground"
                svgSize="40"
                (click)="navigateToHome()"
            />
                
            <!-- Desktop Navigation Links -->
            <div class="hidden lg:flex gap-x-4 items-center">
                <app-button
                    type="text"
                    textContent="HOME"
                    color="blue"
                    (click)="navigateToHome()"
                />
                <app-button
                    type="text"
                    textContent="SKILLS"
                    color="blue"
                    (click)="navigateToSkills()"
                />
                <app-button
                    type="text"
                    textContent="PROJECTS"
                    color="blue"
                    (click)="navigateToProjects()"
                />
                <app-button
                    type="text"
                    textContent="RESEARCH"
                    color="blue"
                    (click)="navigateToResearch()"
                />
                <app-button
                    type="text"
                    textContent="EXPERIENCE"
                    color="blue"
                    (click)="navigateToExperience()"
                />
                <app-button
                    type="text"
                    textContent="EDUCATION"
                    color="blue"
                    (click)="navigateToEducation()"
                />
            </div>

            <!-- Utility Buttons -->
            <div class="flex items-center gap-x-4">
                <!-- Theme Button -->
                <app-button
                    type="svg"
                    color="orange"
                    svgContent="nav/theme-left"
                    svgSize="40"
                    (click)="toggleTheme()"
                />
                
                <!-- Mobile Menu Button -->
                <div class="lg:hidden">
                    <app-button
                        type="svg"
                        color="orange"
                        svgContent="nav/menu-foreground"
                        svgSize="40"
                        (click)="toggleMobileMenu()"
                    />
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="flex justify-end w-full">
            <div class="fixed top-[80px] z-100 lg:hidden mx-auto p-4 pt-0 flex flex-col space-y-4 items-end">
                <app-button
                    type="text"
                    textContent="HOME"
                    color="blue"
                    (click)="navigateToHome()"
                    [class.mobile-menu-enter-1]="isMobileMenuOpen()" [class.mobile-menu-exit-1]="!isMobileMenuOpen()"
                />
                <app-button
                    type="text"
                    textContent="SKILLS"
                    color="blue"
                    (click)="navigateToSkills()"
                    [class.mobile-menu-enter-2]="isMobileMenuOpen()" [class.mobile-menu-exit-2]="!isMobileMenuOpen()"
                />
                <app-button
                    type="text"
                    textContent="PROJECTS"
                    color="blue"
                    (click)="navigateToProjects()"
                    [class.mobile-menu-enter-3]="isMobileMenuOpen()" [class.mobile-menu-exit-3]="!isMobileMenuOpen()"
                />
                <app-button
                    type="text"
                    textContent="RESEARCH"
                    color="blue"
                    (click)="navigateToResearch()"
                    [class.mobile-menu-enter-4]="isMobileMenuOpen()" [class.mobile-menu-exit-4]="!isMobileMenuOpen()"
                />
                <app-button
                    type="text"
                    textContent="EXPERIENCE"
                    color="blue"
                    (click)="navigateToExperience()"
                    [class.mobile-menu-enter-5]="isMobileMenuOpen()" [class.mobile-menu-exit-5]="!isMobileMenuOpen()"
                />
                <app-button
                    type="text"
                    textContent="EDUCATION"
                    color="blue"
                    (click)="navigateToEducation()"
                    [class.mobile-menu-enter-6]="isMobileMenuOpen()" [class.mobile-menu-exit-6]="!isMobileMenuOpen()"
                />
            </div>
        </div>

        <!-- Main Content -->
        <main class="relative z-10">
            <router-outlet (activate)="closeMobileMenu()"/>
        </main>

        <!-- Footer -->
        <footer class="appear relative z-10 flex md:flex-row flex-col-reverse flex-wrap gap-4 md:items-end items:start justify-between p-4 pt-10 bg-gradient-to-t dark:from-black from-white to-transparent">
            <!-- Boards -->
            <div class="flex flex-wrap gap-4 md:flex-row flex-col-reverse md:items-end items-start">
                <app-board
                    type="text"
                    textContent="(C) 2023–2025 BENNETT LINDBERG"
                    [style]="'default'"
                />
                <app-board
                    type="text"
                    textContent="SITE VERSION 2.0.0"
                    [style]="'default'"
                />
            </div>

            <!-- Back to Top Button -->
            <app-button
                type="text"
                textContent="⬆ BACK TO TOP ⬆"
                color="orange"
                (click)="scrollToTop()"
            />
        </footer>
    </div>
    `
})
export class AppComponent {
    private router = inject(Router);
    private document = inject(DOCUMENT);
    private isToggling = false;

    // Template reference to top of page
    topOfPage = viewChild<ElementRef>('topOfPage');

    // Mobile menu state
    isMobileMenuOpen = signal(false);

    // Theme state - initialize based on current HTML class
    isDarkMode = signal(this.document.documentElement.classList.contains('dark'));

    toggleMobileMenu() {
        if (this.isToggling) {
            return;
        }

        this.isToggling = true;
        this.isMobileMenuOpen.set(!this.isMobileMenuOpen());

        // Reset the flag after a short delay
        setTimeout(() => {
            this.isToggling = false;
        }, 100);
    }

    toggleTheme() {
        const htmlElement = this.document.documentElement;
        const newIsDarkMode = !this.isDarkMode();

        if (newIsDarkMode) {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
        }

        this.isDarkMode.set(newIsDarkMode);
    }

    closeMobileMenu() {
        this.isMobileMenuOpen.set(false);
    }

    navigateToHome() {
        this.router.navigate(['/']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    navigateToSkills() {
        this.router.navigate(['/skills']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    navigateToProjects() {
        this.router.navigate(['/projects']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    navigateToResearch() {
        this.router.navigate(['/research']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    navigateToExperience() {
        this.router.navigate(['/experience']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    navigateToEducation() {
        this.router.navigate(['/education']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.closeMobileMenu();
    }

    scrollToTop() {
        const topElement = this.topOfPage();
        if (topElement) {
            topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
