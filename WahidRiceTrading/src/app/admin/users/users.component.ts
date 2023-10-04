import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [
    './users.component.css',
    '../../../assets/admin/css/admin-styles.css',
  ],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  // columns = [
  //   { name: 'firstName' },
  //   { name: 'lastName' },
  //   // ... other columns
  // ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    // Implement delete logic
  }
}
