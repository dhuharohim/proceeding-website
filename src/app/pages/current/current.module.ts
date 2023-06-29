import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { CurrentComponent } from './current.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: CurrentComponent
  },
  {
    path: 'view/:slug',
    component: ViewComponent
  }
]

@NgModule({
  declarations: [
    CurrentComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatePipe],
})
export class CurrentModule { }
