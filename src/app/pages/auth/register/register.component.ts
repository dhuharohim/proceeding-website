import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { countries } from 'src/app/shared/model/country-data-store';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  givenName: any;
  familyName: any;
  affiliation: any;
  country: any;
  email: any;
  username: any;
  password: any;
  repeatPassword: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public countries:any = countries;
  registerForm: any;
  privacyStatement: any;
  publicationStatement: any;
  contactedStatement: any;

  constructor(
    private _snackBar: MatSnackBar,
  ) {
    
  }

  async register() {

    if(this.password !== this.repeatPassword) {
      this._snackBar.open('Repeat password doesnt match', 'OK', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
      });
          return;
    }
    
    // if(this.password !== this.repeatPassword) {
    //   this._snackBar.open('Repeat password doesnt match', 'OK', {
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    //   return;
    // }
  }

  ngOnInit() {
  
  }
}
