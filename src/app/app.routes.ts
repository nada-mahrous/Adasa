import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { WhousComponent } from './components/whous/whous.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'whous', component: WhousComponent },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/privacy.component').then((c) => c.PrivacyComponent),
  },
  {
    path: 'terms',
    loadComponent: () => import('./components/terms/terms.component').then((c) => c.TermsComponent),
  },

  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then((c) => c.BlogComponent),
    title: 'Blog',
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./components/blog-details/blog-details.component').then(
        (c) => c.BlogDetailsComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () => import('./components/error/error.component').then((c) => c.ErrorComponent),
  },
];
