import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EditorialTeamComponent } from './editorial-team.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';


const routes: Routes = [
  {
    path:'',
    component: EditorialTeamComponent
  }
]


@NgModule({
  declarations: [
    EditorialTeamComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorialTeamModule { }
