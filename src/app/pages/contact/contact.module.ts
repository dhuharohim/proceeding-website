import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path:'',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
