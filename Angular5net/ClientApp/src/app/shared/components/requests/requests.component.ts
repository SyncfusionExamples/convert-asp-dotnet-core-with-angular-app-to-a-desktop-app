declare var window :any;
import { Component,OnInit,ViewChild } from '@angular/core';
import { data, requestData } from 'src/app/datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Validators,FormBuilder} from '@angular/forms';
import { GridComponent, FilterService, FilterType, SortService  } from '@syncfusion/ej2-angular-grids';
import { EditService,  PageService,CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { Popup } from '@syncfusion/ej2-popups';
import { Data } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  providers: [FilterService, SortService, EditService, PageService,CommandColumnService]
})
export class RequestsComponent implements OnInit {
  public requestData: object[] | undefined;
  // public Status :object[] | undefined;
  public ddldata: Object[] | undefined;
  public editSettings: Object | undefined;
  public pageSettings: Object | undefined;
  public filterSettings: Object | undefined;
  public filteringType: Object[] = [
      { Id: 'Menu', type: 'Menu' },
      { Id: 'CheckBox', type: 'Checkbox' },
      { Id: 'Excel', type: 'Excel' }
  ];
  public ddlfields: Object = { text: 'type', value: 'Id' };
  public formatoptions: Object | undefined;
  public editparams: Object | undefined;
  public commands: CommandModel[] | undefined; 
@ViewChild('grid')
public grid: GridComponent | any;
title = 'requestpage';
form:any;
show_value:any;
public month: number = new Date().getMonth();
public fullYear: number = new Date().getFullYear();
public start: Date = new Date(this.fullYear, this.month - 1 , 7);
public end: Date = new Date(this.fullYear, this.month, 25);
formModal: any;
submitted: any;
public id : any=requestData.length;
  private _TaskID: any = this.id + 1;
  public get TaskID(): any {
    return this._TaskID;
  }
  public set TaskID(value: any) {
    this._TaskID = value;
  }
constructor(private fb:FormBuilder) {
  this.form = fb.group({
    TaskID :([this.TaskID]),
    Employee:['',[Validators.required]],
    Status:['Pending'],
    RequestType:['',Validators.required],
    RequestedItem:['',Validators.required],
    RequestedOn:['',Validators.required],
    Priority:['',Validators.required],
    Note:['',Validators.required]
  })
}

onsubmit(){
  this.submitted=true;
  console.log(this.form.value);
  requestData.push(this.form.value);
  this.form.reset(); 
}
public data1: string[] = [ 'Lenova Yoga','Acer Aspire','Apple MacBook','Lenova ThinkBad','Dell inspiron','HP Pavillion','Azus ZenBook','HpEliteBook','Apple MacBook Air','Apple IpadAir','Sony Vaio','Dell Ultrasharp U321'];
public data2: string[] = [ 'Low','Normal','High','Critical'];
ngOnInit(): void {
    this.requestData = requestData;
    // this.Status = this.Status;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,showDeleteConfirmDialog:true, mode: 'Dialog' };
    this.pageSettings = { pageSize: 10 };
    this.filterSettings = { type: 'Menu' };
    this.ddldata = this.filteringType;
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    this.editparams = { params: { popupHeight: '300px' }};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } },
    ];
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    ); 
}
public onChange(e: ChangeEventArgs): void {
  this.grid.filterSettings.type = <FilterType>e.value;
  this.grid.clearFiltering();
}
openModal()
{ 
    this.formModal.show();
}
dosomething()
{
      this.formModal.hide();  
}
popup = false
popup1 = false
approve = false
approve1=false
approve2=false
reject = false
reject1=false
reject2=false
button = true
button1 = true
button2 = true

onclick(data:any)
{ 
  data.Status = 'Approved';
        
}
onclick1(data:any)
{ 
  data.Status = 'Rejected';
       
}
}
