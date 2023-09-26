import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  userName: string = '';
  constructor(private router: Router,
    private cookieService: CookieService) {}

  ngOnInit() {
    this.userName = this.cookieService.get('userName');
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  Logout() {
    this.router.navigate(['login']);
  }

  navigateToPendingOrders() {
    // Navigate to the "Pending Orders" route
    this.router.navigate(['/pending-orders']);
  }
}
