import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidenavModule,
    FormsModule
  ],
  providers: [DatePipe],
})
export class ViewModule { }
