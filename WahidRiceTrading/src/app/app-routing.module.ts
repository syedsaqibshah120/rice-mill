import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { AboutUsComponent } from './client/about-us/about-us.component';
import { HomeComponent } from './client/home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { UsersComponent } from './admin/users/users.component';
import { AddeditUserComponent } from './admin/addedit-user/addedit-user.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/edit/:id', component: AddeditUserComponent },
      { path: 'user/add', component: AddeditUserComponent },
    ],
  },
  { path: 'login', component: AdminLoginComponent },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'about-us', component: AboutUsComponent },
      { path: 'home', component: HomeComponent },
      {path: 'login', component:ClientLoginComponent},
    ],
  },
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
