import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-addedit-user",
  templateUrl: "./addedit-user.component.html",
  styleUrls: ["./addedit-user.component.css", "../../../assets/admin/css/admin-styles.css"],
})
export class AddeditUserComponent {
  user: any = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
    // Add more fields here and initialize them as needed
  };
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.userService.getUserById(params["id"]).subscribe((data: any) => {
          this.user = data;
        });
      }
    });
  }

  onSubmit() {
    debugger;
    if (this.isEditMode) {
      // Update existing user
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(["/admin/users"]);
      });
    } else {
      // Create new user
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(["/admin/users"]);
      });
    }
  }
}
