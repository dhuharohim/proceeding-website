import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
// import { SidenavComponent } from 'src/app/layout/sidenav/sidenav.component';

const routes: Routes = [
  {
    path:'',
    component: AboutComponent
  },
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
