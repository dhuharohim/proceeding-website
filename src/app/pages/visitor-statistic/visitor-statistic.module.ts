import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisitorStatisticComponent } from './visitor-statistic.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';

const routes: Routes = [
  {
    path:'',
    component: VisitorStatisticComponent
  }
]

@NgModule({
  declarations: [
    VisitorStatisticComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class VisitorStatisticModule { }
