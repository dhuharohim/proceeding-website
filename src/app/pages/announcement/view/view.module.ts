import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SidenavModule
  ]
})
export class ViewModule { }
