import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { HardwareModule } from './shared/components/hardware/hardware.module';
import { LayoutModule } from './shared/components/layout/layout.module';
import { SoftwareModule } from './shared/components/software/software.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './shared/components/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    DefaultModule,
    LayoutModule,  
    HardwareModule,
    DashboardModule,
    SoftwareModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}

