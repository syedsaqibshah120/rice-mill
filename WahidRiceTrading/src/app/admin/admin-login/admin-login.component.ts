import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['../../../assets/css/admin-styles.css']
})
export class AdminLoginComponent {

    constructor(private _router : Router){
      
    }

  login(){
this._router.navigate(['admin/dashboard']);
  }
}
