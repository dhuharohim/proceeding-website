import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexingSitesComponent } from './indexing-sites.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';

const routes: Routes = [
  {
    path:'',
    component: IndexingSitesComponent
  }
]

@NgModule({
  declarations: [
    IndexingSitesComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexingSitesModule { }
