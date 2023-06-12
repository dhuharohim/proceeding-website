import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    data: { isActive: 'about' }
  },
  {
    path: 'submission',
    loadChildren: () => import('./pages/submission/submission.module').then(m => m.SubmissionModule),
    data: { isActive: 'submission' }
  },
  {
    path: 'editorial-team',
    loadChildren: () => import('./pages/editorial-team/editorial-team.module').then(m => m.EditorialTeamModule),
    data: { isActive: 'editorial-team' }
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    data: { isActive: 'contact' }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),
    data: { isActive: 'login' }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule),
    data: { isActive: 'register' }
  },
  {
    path: 'publication-ethics',
    loadChildren: () => import('./pages/publication-ethics/publication-ethics.module').then(m => m.PublicationEthicsModule),
  },
  {
    path: 'reviewer-acknowledgements',
    loadChildren: () => import('./pages/peer-review-list/peer-review-list.module').then(m => m.PeerReviewListModule),
  },
  {
    path: 'indexing-sites',
    loadChildren: () => import('./pages/indexing-sites/indexing-sites.module').then(m => m.IndexingSitesModule),
  },
  {
    path: 'visitor-statistic',
    loadChildren: () => import('./pages/visitor-statistic/visitor-statistic.module').then(m => m.VisitorStatisticModule),
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
