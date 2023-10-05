import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-addedit-user",
  templateUrl: "./addedit-user.component.html",
  styleUrls: ["./addedit-user.component.css", "../../../assets/admin/css/admin-styles.css"],
})
export class AddeditUserComponent {
  firstNameErrorMessage = "";
  lastNameErrorMessage = "";
  userNameErrorMessage = "";
  emailErrorMessage = "";
  phoneNumberErrorMessage = "";

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
  isFirstNameInvalid = false;
  isLastNameInvalid = false;
  isUserNameInvalid = false;
  isEmailInvalid = false;
  isPhoneNumberInvalid = false;

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
    this.isFirstNameInvalid = false;
    this.isLastNameInvalid = false;
    this.isUserNameInvalid = false;

    if (this.user.firstName == "") {
      this.isFirstNameInvalid = true;
      //this.firstNameErrorMessage = "First name is required";
      return;
    } else if (!/^[a-zA-Z]+$/.test(this.user.firstName)) {
      this.isFirstNameInvalid = true;
      this.firstNameErrorMessage = ":First name can only contain alphabets";
      return;
    }

    if (this.user.lastName == "") {
      this.isLastNameInvalid = true;
      this.lastNameErrorMessage = " :Last name is required";
      return;
    } else if (!/^[a-zA-Z]+$/.test(this.user.lastName)) {
      this.isLastNameInvalid = true;
      this.lastNameErrorMessage = ":Last name can only contain alphabets";
      return;
    }
    if (this.user.userName == "") {
      this.isUserNameInvalid = true;
      this.userNameErrorMessage = " :User name is required";
      return;
    }
    if (this.user.email == "") {
      this.isEmailInvalid = true;
      this.emailErrorMessage = " :Email is required";
      return;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.user.email)) {
      this.isEmailInvalid = true;
      this.emailErrorMessage = " :Invalid email format";
      return;
    } else {
      this.isEmailInvalid = false;
    }

    if (this.user.phoneNumber == "") {
      this.isPhoneNumberInvalid = true;
      this.phoneNumberErrorMessage = " :Phone Number is required";
      return;
    } else if (!/^[0-9]+$/.test(this.user.phoneNumber)) {
      this.isPhoneNumberInvalid = true;
      this.phoneNumberErrorMessage = ":Invalid Phone Number";
      return;
    } else if (this.user.phoneNumber.length < 9 || this.user.phoneNumber.length > 12) {
      this.isPhoneNumberInvalid = true;
      this.phoneNumberErrorMessage = ":Invalid Phone Number";
      return;
    }
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
