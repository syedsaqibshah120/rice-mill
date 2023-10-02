import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './admin/users/users.component';
import { AddeditUserComponent } from './admin/addedit-user/addedit-user.component';
@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, ClientLayoutComponent, AdminLoginComponent, ClientLoginComponent, UsersComponent, AddeditUserComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}