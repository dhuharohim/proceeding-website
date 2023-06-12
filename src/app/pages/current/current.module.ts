import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { CurrentComponent } from './current.component';

const routes: Routes = [
  {
    path:'',
    component: CurrentComponent
  }
]

@NgModule({
  declarations: [
    CurrentComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class CurrentModule { }
