import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css','../../../assets/admin/css/admin-styles.css']
})
export class UsersComponent {
  users:any[] = [];
  constructor(private _router: Router, private userService: UserService) {}

  ngOnInit()
  {
   this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }
  deleteUser(id:number){

  }
}
