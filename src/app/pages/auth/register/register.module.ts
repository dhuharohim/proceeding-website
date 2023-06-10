import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  {
    path:'',
    component: RegisterComponent
  },
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,  
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
