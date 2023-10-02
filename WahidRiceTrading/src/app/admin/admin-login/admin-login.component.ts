import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['../../../assets/admin/css/admin-styles.css']
})
export class AdminLoginComponent {
  userName = '';
  password = '';
  errorMsg = '';
  showErrorMsg = false;

  constructor(private _router: Router, private loginService: UserService) {}

  login() {
    this.showErrorMsg = false;
    this.errorMsg = '';

    if (!this.userName || !this.password) {
      this.showErrorMsg = true;
      this.errorMsg = 'User name and password are mandatory.';
      return;
    }

    this.loginService.login(this.userName, this.password).subscribe(
      (response) => {
        console.log(response);
    
        if (response.statusCode
          === 200) {
          this._router.navigate(["admin/dashboard"]);
        } else if (response.statusCode === 404) {
          // Check for the 400 status code (Bad Request)
          this.showErrorMsg = true;
          this.errorMsg = 'Invalid username or password. Please try again.';
        } else {
          this.showErrorMsg = true;
          this.errorMsg = 'An error occurred. Please try again later.';
        }
      },
      (error) => {
        this.showErrorMsg = true;
        this.errorMsg = error.errorMessage;
      }
    );
  }
}
