import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeerReviewListComponent } from './peer-review-list.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';

const routes: Routes = [
  {
    path:'',
    component: PeerReviewListComponent
  }
]

@NgModule({
  declarations: [
    PeerReviewListComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class PeerReviewListModule { }
