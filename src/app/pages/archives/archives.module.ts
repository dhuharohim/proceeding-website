import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import { ArchivesComponent } from './archives.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component: ArchivesComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
]

@NgModule({
  declarations: [
    ArchivesComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule
  ]
})
export class ArchivesModule { }
