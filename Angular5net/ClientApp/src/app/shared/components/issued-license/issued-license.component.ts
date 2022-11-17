import { Component, OnInit } from '@angular/core';
import { licenseData } from 'src/app/datasource';
import { PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel, ToolbarItems, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-issued-license',
  templateUrl: './issued-license.component.html',
  styleUrls: ['./issued-license.component.css'],
  providers: [CommandColumnService]
})
export class IssuedLicenseComponent implements OnInit {

  public data!: object[];
  public pageSettings!: PageSettingsModel;
  public editSettings!: EditSettingsModel;
  public editparams: Object | undefined;
  public toolbar!: ToolbarItems[];
  public filterSettings!: object;
  public filterType: object[] = [{ Id: 'Menu', type: 'Menu' },
  { Id: 'CheckBox', type: 'CheckBox' },
  { Id: 'Excel', type: 'Excel' }];
  public ddldata!: Object[];
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public start: Date = new Date();
  public end: Date = new Date();
  public commands!: CommandModel[];
  public Employeerules: Object | undefined;
  public softwarerules: Object | undefined;
  public licenseAvailablerules: Object | undefined;
  public LicenseKeyrules: Object | undefined;
  public formatoptions!: Object;
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public minDate: Object = new Date(this.currentYear, this.currentMonth, this.currentDay);
  public id: any = licenseData.length;
  public TaskID: any = this.id + 1;

  ngOnInit(): void {
    this.data = licenseData;
    this.pageSettings = { pageSize: 10 };
    this.editSettings = { allowEditing: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Dialog', };
    this.editparams = { params: { popupHeight: '300px' } };
    this.filterSettings = { type: 'Menu' };
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } }];
    this.ddldata = this.filterType;
    this.Employeerules = { required: true };
    this.softwarerules = { required: true };
    this.licenseAvailablerules = { required: true };
    this.LicenseKeyrules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' }
  }
  public items: string[] = ['Visual Studio 2017', 'Skype for Business', 'MSOffice 365', 'QuikBook Enterprise', 'CCleaner', 'SQL Server 2017'
    , 'Window10', 'Adobe Photoshop', 'Visual Studio code', 'Bamboo HR', 'JIRA cloud server', 'Adobe Illustrator', 'CoreIDRAW graphics..',
    'FileZilla', 'Blender', 'Git', 'ZipBooks'];


  public content_normal = "Issued License";
  issueForm = new FormGroup({
    TaskID: new FormControl([this.TaskID]),
    Employee: new FormControl('', Validators.required),
    Software: new FormControl(''),
    LicenseAvailable: new FormControl(''),
    LicenseKey: new FormControl(''),
    IssuedOn: new FormControl('', Validators.required),


  });

  get f() {
    return this.issueForm.controls;
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.issueForm.patchValue({ TaskID: licenseData.length + 1 });
    console.log(this.issueForm.value);
    licenseData.push(this.issueForm.value);
    this.issueForm.reset();
    if (this.issueForm.valid) {
      console.log("Successfully submitted");
    }

  }

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


