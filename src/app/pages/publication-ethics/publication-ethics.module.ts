import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicationEthicsComponent } from './publication-ethics.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';

const routes: Routes = [
  {
    path:'',
    component: PublicationEthicsComponent
  }
]


@NgModule({
  declarations: [
    PublicationEthicsComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicationEthicsModule { }
