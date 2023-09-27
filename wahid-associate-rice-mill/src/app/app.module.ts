import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'; // Add these imports
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { CookieService } from 'ngx-cookie-service';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';

// Create a custom HTTP interceptor
export class SkipSslValidationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Allow self-signed certificates for local development
    if (req.url.startsWith('https://localhost:7213/')) {
      req = req.clone({
        setHeaders: {
          'X-Skip-SSL-Validation': 'true',
        },
      });
    }
    return next.handle(req);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    PendingOrdersComponent,
    UserListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SkipSslValidationInterceptor, // Use the custom interceptor
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
