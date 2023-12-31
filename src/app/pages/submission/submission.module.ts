import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './submission.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path:'',
    component: SubmissionComponent
  }
]

@NgModule({
  declarations: [
    SubmissionComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class SubmissionModule { }
