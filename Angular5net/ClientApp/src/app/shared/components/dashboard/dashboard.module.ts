import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TreeMapModule } from '@syncfusion/ej2-angular-treemap';
import { TreeMapAllModule } from '@syncfusion/ej2-angular-treemap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    NgbModule,
    ListViewModule,
    ChartModule,
    BrowserModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    RouterModule,
    TreeMapAllModule,
    TreeMapModule,
    AppRoutingModule

  ]
})
export class DashboardModule { }
