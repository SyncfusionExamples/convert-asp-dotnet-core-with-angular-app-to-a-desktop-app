
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridComponent, FilterService, EditService, CommandColumnService, ToolbarService, GroupService, CommandModel, PageService } from '@syncfusion/ej2-angular-grids';
import { data } from 'src/app/datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css'],
  providers: [PageService, FilterService, EditService, ToolbarService, GroupService, CommandColumnService]
})
export class HardwareComponent implements OnInit {

  public data: object[] | undefined;
  public ddldata!: Object[];
  public toolbar: string[] | undefined;
  public pageSettings!: PageSettingsModel;
  public editSettings!: EditSettingsModel;
  public filterSettings!: Object;
  public editparams: Object | undefined;
  public filteringType: Object[] = [
    { Id: 'Menu', type: 'Menu' },
    { Id: 'CheckBox', type: 'Checkbox' },
    { Id: 'Excel', type: 'Excel' }

  ];

  closeResult = '';
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();

  public content_normal = "Add new Hardware";
  public ddlfields: Object = { text: 'type', value: 'Id' };
  public formatoptions!: Object;
  public commands!: CommandModel[];

  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public minDate: Object = new Date(this.currentYear, this.currentMonth, this.currentDay);


  public selecteRecords: any;
  public start: Date = new Date("");
  public end: Date = new Date("");


  selectedRecords = data.filter((f: any) => new Date(f.DOP) > this.start && new Date(f.DOP) < this.end);

  @ViewChild('grid')
  public grid!: GridComponent;


  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 10 };
    this.editSettings = { allowEditing: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Dialog', };
    this.editparams = { params: { popupHeight: '600px' } };
    this.filterSettings = { type: 'Menu' };
    this.ddldata = this.filteringType;


    this.editparams = { params: { popupHeight: '600px' } };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' }
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } }];

  }
  public value: string[] = ['Ordered', 'Pending', 'Assigned', 'In-repair'];

  public item: string[] = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Mobile', 'Tablet', 'Miscellanenous'];


  public id: any = data.length;

  public TaskID: any = this.id + 1;

  submitted = false;
  registerForm = new FormGroup({
    TaskID: new FormControl([this.TaskID]),
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Category: new FormControl('', Validators.required),
    SerialNo: new FormControl('', Validators.required),
    InvoiceNo: new FormControl('', Validators.required),
    DOP: new FormControl('', Validators.required),
    WEO: new FormControl('', Validators.required),
    Status: new FormControl('', Validators.required),

  });

  get f() {
    return this.registerForm.controls;
  }

  submit() {

    this.submitted = true;
    this.registerForm.patchValue({ TaskID: data.length + 1 })
    data.push(this.registerForm.value);
    this.registerForm.reset();
  }

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


