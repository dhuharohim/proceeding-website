import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component: AnnouncementComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
]

@NgModule({
  declarations: [
    AnnouncementComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnouncementModule { }
