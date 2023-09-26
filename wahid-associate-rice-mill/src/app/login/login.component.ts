import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  passcode: string = '';
currentYear: string='';
  constructor(private router: Router, 
    private userService: UserService,
    private cookieService: CookieService) {}
  
  //Load function it call automatically whenever page load
  ngOnInit() {
    this.getCurrentYear();
  }
  
    getCurrentYear() {
      this.currentYear =  new Date().getFullYear().toString();
    }
  

  LoginUser() {
if(this.passcode == '')
  {
    alert('please enter passcode');
    return;
  }

    this.userService.GetUserInfo(this.passcode).subscribe(
      (response: any) => {
        if(response.data.id  == this.passcode)
        {
          this.cookieService.set('userName', response.data.first_name + ' ' + response.data.last_name);
          this.router.navigate(['./dashboard']);
          console.log(response.data);
        }
     
      },
      (error) => {
        // Handle API request error here
        console.error('Error:', error);
      }
    );
  }

  // Fetch API data 

}
