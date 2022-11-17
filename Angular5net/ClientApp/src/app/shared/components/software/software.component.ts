declare var window :any;
import { Validators,FormBuilder} from '@angular/forms';
import { NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Component,ViewChild,OnInit } from '@angular/core';
import { softwareData } from 'src/app/datasource';
import { CommandModel,CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { EditSettingsModel,GridComponent, FilterService, FilterType, SortService ,EditService,  PageService} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
  providers: [FilterService, SortService, EditService, PageService, CommandColumnService, NgbModal]   
})
export class SoftwareComponent implements OnInit {
  date = new Date();
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public minDate: Date = new Date(this.fullYear, this.month ,this.date.getUTCDate() );
  form : any;
  submitted = false;
    show_value: any;
    public id : any=softwareData.length;
    public TaskID : any = this.id + 1;
    LicenseTyperules: { required: any; } | undefined;
    constructor(private fb:FormBuilder, ){
      this.form=fb.group({
        TaskID :([this.TaskID]),
        Name:['',[Validators.required,Validators.minLength(4)]],
        Edition:['',Validators.required],
        Version:['',Validators.required],
        Vendor:['',Validators.required],
        LicenseType:['',Validators.required],
        NoofLicense:['',Validators.required],
        DateofPurchase:['',Validators.required],
        ExpiredOn:[''],
        Catagory:[]
      });
    }
    get f(){return this.form.controls;}
    onsubmit(){
      this.submitted=true;
      this.form.patchValue({TaskID:softwareData.length+1});
      console.log(this.form.value);
      this.OnPressEnter(this.show_value);
      this.form.reset(); 
    }
    title(title: any) {
      throw new Error('Method not implemented.');
    }
  formModal : any;
  formModal1:any;
  public softwareData: object[] | undefined;
  public editSettings: EditSettingsModel | undefined;
  public toolbar: string[] | undefined;
  public taskidrules: Object | undefined;
  public namerules: Object | undefined;
  public categoryrules: Object | undefined;
  public serialnorules: Object | undefined;
  public invoicerules: Object | undefined;
  public purchasedate: Object | undefined;
  public warrentdate: Object | undefined;
  public statusrules:Object | undefined;
  public assignedrules:Object|undefined;
  public pageSettings: Object | undefined;
  public editparams: Object | undefined;
  public ddldata: Object[] | undefined;
  public filterSettings: Object | undefined;
  public filteringType: Object[] = [
      { Id: 'Menu', type: 'Menu' },
      { Id: 'CheckBox', type: 'Checkbox' },
      { Id: 'Excel', type: 'Excel' }
  ];
  public commands: CommandModel[] | undefined;
  public ddlfields: Object = { text: 'type', value: 'Id' };
  public formatoptions: Object | undefined;
  public start: Date = new Date(this.fullYear, this.month - 1 , 7);
  public end: Date = new Date(this.fullYear, this.month, 25);
  public data1: string[] = [ 'Free','Yearly(UserBasis)','LifeTime'];
  public data2: string[] = [ 'Development','Graphics','Accounting','HR','Common','Miscellaneous'];
  // set a value to pre-select
  @ViewChild('grid')
  public grid: GridComponent | any;
  ngOnInit(): void {
      this.softwareData = softwareData;
      this.pageSettings = { pageSize: 10 };
      this.filterSettings = { type: 'Menu' };
      this.ddldata = this.filteringType;
      this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,showDeleteConfirmDialog:true, mode: 'Dialog' };
      this.namerules = { required: true };
      this.categoryrules = { required: true };
      this.serialnorules =  { required: true };
      this.invoicerules =  { required: true };
      this.statusrules =  { required: true };
      this.assignedrules =  { required: true };
      this.LicenseTyperules = { required: true};
      this.editparams = { params: { popupHeight: '300px' }};
      this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }},
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
      this.formModal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      this.formModal1 = new window.bootstrap.Modal(
        document.getElementById("exampleModal1")
      ); 
    }
    openModal1()
    {
      this.formModal1.show();
    }
    openModal()
    {
      this.formModal.show();
    }
    dosomething()   
    {
        this.form.reset();
        this.formModal.hide();  
    }
    dosomething1()   
    {
        this.formModal1.hide(); 
    }
    OnPressEnter(show_value: any){ 
      var inputValue = show_value;
      this.show_value = show_value;
     softwareData.push(this.form.value);
    }
    public onChange(e: ChangeEventArgs): void {
        this.grid.filterSettings.type = <FilterType>e.value;
        this.grid.clearFiltering();
    }
    

  }
    
      
      
    
  
  