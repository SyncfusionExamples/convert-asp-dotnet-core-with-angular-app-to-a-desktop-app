import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { PageService, SortService, FilterService, GroupService, GridModule } from '@syncfusion/ej2-angular-grids';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    GridModule,
    BrowserModule,
    FormsModule,DateRangePickerModule,
    ReactiveFormsModule,
    DatePickerModule,
    DropDownListModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
 
})
export class SoftwareModule { }
