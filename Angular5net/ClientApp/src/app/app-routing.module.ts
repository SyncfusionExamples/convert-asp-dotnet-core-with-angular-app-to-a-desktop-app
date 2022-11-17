import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './shared/components/about/about.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HardwareComponent } from './shared/components/hardware/hardware.component';
import { IssuedLicenseComponent } from './shared/components/issued-license/issued-license.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { RequestsComponent } from './shared/components/requests/requests.component';
import { SoftwareComponent } from './shared/components/software/software.component';

const routes: Routes = [{
  path: '',
  component:DefaultComponent,
  children: [
    {path:'',component:DashboardComponent},
    { path:'layout', component:LayoutComponent },
    {path:'dashboard',component:DashboardComponent},
    { path:'hardware', component:HardwareComponent },
    {path:'issued-license',component:IssuedLicenseComponent},
    {path:'software',component:SoftwareComponent},
    {path:'requests',component:RequestsComponent},
    {path:'about',component:AboutComponent}
   ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
