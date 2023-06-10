import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
})
export class LoginModule { }
