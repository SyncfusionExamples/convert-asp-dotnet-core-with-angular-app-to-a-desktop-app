import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SidebarModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,DropDownButtonModule
  ]
})
export class LayoutModule { }
