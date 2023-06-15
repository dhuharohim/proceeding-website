import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import axios from 'axios';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any = '';
  password: any = '';
  hide:boolean = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _snackBar: MatSnackBar,
  ) {
    
  }
  async login() {
    // if(this.email == '') {
    //   this._snackBar.open('email field is required', 'OK', {
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    //   return;
    // }
    // if(this.password == '') {
    //   this._snackBar.open('Password field is required', 'OK', {
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    //   return;
    // }
    try {
      const response = await axios.post(`${environment.apiUrl}/auth/login`, {
        email: this.email,
        password: this.password
      }, {
        headers: {
          Accept: 'application/json',
          "Content-Type" : 'application/json'
        },
      });
      console.log(response.data);
      // Lakukan pemrosesan data selanjutnya di sini
    } catch (error) {
      // Lakukan penanganan kesalahan di sini
    }
  }
}
