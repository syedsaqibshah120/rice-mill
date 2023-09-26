import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'pending-orders', component: PendingOrdersComponent, outlet: 'dashboardContent' }
    ]
  },
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: '**', redirectTo: '/dashboard' }, // Handle any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
