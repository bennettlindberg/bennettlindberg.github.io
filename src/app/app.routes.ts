import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills.component').then(m => m.SkillsComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'research',
        loadComponent: () => import('./pages/research.component').then(m => m.ResearchComponent)
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'education',
        loadComponent: () => import('./pages/education.component').then(m => m.EducationComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
