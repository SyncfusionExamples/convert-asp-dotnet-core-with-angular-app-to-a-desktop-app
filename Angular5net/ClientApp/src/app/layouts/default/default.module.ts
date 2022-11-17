
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './default.component';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { HardwareComponent } from 'src/app/shared/components/hardware/hardware.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TreeMapModule } from '@syncfusion/ej2-angular-treemap';

import { TreeMapAllModule } from '@syncfusion/ej2-angular-treemap';
import { IssuedLicenseComponent } from 'src/app/shared/components/issued-license/issued-license.component';
import { DashboardComponent } from 'src/app/shared/components/dashboard/dashboard.component';
import { SoftwareComponent } from 'src/app/shared/components/software/software.component';
import { RequestsComponent } from 'src/app/shared/components/requests/requests.component';
import { AboutComponent } from 'src/app/shared/components/about/about.component';
import { AccumulationChartAllModule, ChartAllModule, ChartModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    DefaultComponent,
    LayoutComponent,
    HardwareComponent,
    IssuedLicenseComponent,
    DashboardComponent,
    SoftwareComponent,
    RequestsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SidebarModule,
    GridModule,
    NgbModule,
    ListViewModule,
    AppRoutingModule,
    FontAwesomeModule,
    DateRangePickerModule,
    DatePickerModule,
    ButtonModule,
    DropDownButtonModule,
    DropDownListModule,
    FormsModule,
    TreeMapModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartAllModule,
    TreeMapAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    ListViewModule,
    ChartModule
  ]
})
export class DefaultModule { }
