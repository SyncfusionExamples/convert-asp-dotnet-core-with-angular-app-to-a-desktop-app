import { Component,ViewChild } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs, AccumulationTheme,ILoadedEventArgs, ChartComponent,ChartTheme } from '@syncfusion/ej2-angular-charts';
import { TreeMap, TreeMapTooltip, TreeMapLegend } from '@syncfusion/ej2-angular-treemap';
import { Static } from 'src/app/datasource';
import { IItemMoveEventArgs, ILoadEventArgs, TreeMapTheme, IItemClickEventArgs } from '@syncfusion/ej2-angular-treemap';
TreeMap.Inject(TreeMapTooltip, TreeMapLegend);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  
 
  //Data sourse for Statistics by Hardware Status
  public data: Object[] = [
    { 'x': 'Assigned:', y: 15, text: '15' },
    { 'x': 'In-repair:', y: 8, text: '8' },
    { 'x': 'ordered:', y: 15, text: '15' },
    { 'x': 'Pending:', y: 14, text: '14' }
  ];
  //Data sourse for Statistics by Software License type
  public datasource: Object[] = [
    { 'x': 'Yearly(user basis)', y: 5, text: '5' },
    { 'x': 'Free:', y: 6, text: '6' },
    { 'x': 'Lifetime', y: 6, text: '6' },

  ];
   //Data sourse for Statistics by Hardware category
  public data2: Object[] = [
    { x: 'Assigned', y: 5, text: '5' }, { x: 'In-repair', y: 2, text: '2' }, { x: 'Ordered', y: 6, text: '6' }, { x: 'Pending', y: 5, text: '5' }
  ];
  public data3: Object[] = [
    { x: 'Assigned', y: 4, text: '4' }, { x: 'In-repair', y: 1, text: '1' }, { x: 'Ordered', y: 5, text: '5' }, { x: 'Pending', y: 4, text: '4' }
  ];
  public data4: Object[] = [
    { x: 'Assigned', y: 2, text: '2' }, { x: 'In-repair', y: 3, text: '3' }, { x: 'Ordered', y: 2, text: '2' }, { x: 'Pending', y: 3, text: '3' }
  ];
  public data5: Object[] = [
    { x: 'Assigned', y: 4, text: '4' }, { x: 'In-repair', y: 2, text: '2' }, { x: 'Ordered', y: 2, text: '2' }, { x: 'Pending', y: 2, text: '2' }
  ];



  @ViewChild('pie')
  public pie!: AccumulationChartComponent | AccumulationChart;
  constructor() {

  }
  public animation: Object = {
    enable: false
  };

  public legendSettings: Object = {
    visible: true,
    position:'Bottom',
  };
  //Initializing Datalabel for pie chart
  public dataLabe: Object = {
    visible: true,
    position: 'Inside', name: 'text',
    font: {
      fontWeight: '600'
    }
  };
  //custom code start for pie chart
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };


  // custom code end for pie chart
  public center: Object = { x: '50%', y: '50%' };
  public startAngle: number = 0;
  public endAngle: number = 360;
  public explode: boolean = true;
  public enableAnimation: boolean = false;
  public tooltip: Object = { enable: true, format: '${point.x} : <b>${point.y}%</b>' };
  public title: string = 'Statistics by Hardware Status'; 
  palette2: string[] = ['#AEEB8E', '#7F9FD2', '#D776A7', '#7FD29F'];

  // Statistics by Software License Type
  public title2: string = 'Statistics by Software License Type';
  palette3: string[] = ['#FFCC60', '#7F9FD2', '#D075CB'];

  //Code for Statistics by Software Category
  public itemMove = (args: any) => {
    args.item['data'].Count = args.item['weight'];
    args.treemap.tooltipSettings.format = args.item['groupIndex'] === 0 ? 'Category: ${Category}<br>License count: ${Count}' :
      '${Software}<br>License count: ${Count}';
  }
  public itemClick = (args: any) => {
    args.item['data'].Count = args.item['weight'];
    args.treemap.tooltipSettings.format = args.item === 0 ? 'Category: ${Category}<br>License count: ${Count}' :
      ' ${Software}<br>License count: ${Count}';
  }
  //Statistics by Software Category custom code start
  public load2 = (args: any) => {
    let theme: string = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    args.treemap.theme = <TreeMapTheme>(theme.charAt(0).toUpperCase() +
      theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
  }
  //Statistics by Software Category custom code end
  titleSettings: object = {
    text: 'Statistics by Software Category',
    textStyle: {
      size: '15px'
    }
  };
  public tooltipSettings: object = {
    visible: true, enable: true,
    format: ' ${Software}<br>License count: ${Count}',
  };
  public legendSettings2: object = {
    visible: true,
    position: 'Bottom',
    shape: 'Rectangle'
  };
  dataSource: object[] = Static;
  weightValuePath: string = 'Count';
  palette: string[] = ['#D075CB', '#7F9FD2', '#7E7EDC', '#7FD29F', '#81B8B3'];
  leafItemSettings: object = {
    labelPath: 'Software',
    border: { color: 'white', width: 0.5 }
  };
  border: object = {
    color: 'white',
    width: 0.5
  };

 
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
  };

  // code of Statistics by Hardware Category
  public marker: Object = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '300', color: '#ffffff' } } }
  public title1: string = 'Statistics by Hardware Category';
  public tooltip1: Object = {
    enable: true
  };
  palette1: string[] = ['#D075CB', '#7F9FD2', '#7E7EDC', '#7FD29F'];
  //Statistics by Hardware Category custom code start
  public load1(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

  };
  // Statistics by Hardware Category custom code end
  public chartArea: Object = {
    border: {
      width: 0
    }
  };



  
//List view data 
  public data1: { [key: string]: Object; }[] = [
    {
      text: "John Doe",
      Text: "A new hardware Lenovo Yoga has been added",
      id: "1",
      image:'https://img.icons8.com/color/96/user-male.png'
    },
    { text: "Mary Saveley", Text: "A new hardware Lenovo Yoga has been added", id: "2",   image:'https://img.icons8.com/color/96/businesswoman.png' },
    {
      text: "Yang Wang ",
      Text: "A new hardware Visual Studio 2017 has been added",
      id: "4",
      image:'https://img.icons8.com/color/96/user-male.png'
     
    },
    {
      text: "Mario Pontes ",
      Text: "The software SQL Server 2017 has been requested",
      id: "2",
      image:'https://img.icons8.com/color/96/user-male.png'
   
    },
    {
      text: "Karin Josephs ",
      Text: "A new hardware Brother DCP-9020CDW has been added",
      id: "5",
      image:'https://img.icons8.com/color/96/businesswoman.png'
    },
    {
      text: "Paul Henriot ",
      Text: "A new license for software Visual Studio 2017 has been issued",
      id: "7",
      image:'https://img.icons8.com/color/96/user-male.png'
     
    },
    {
      text: "David Anto",
      Text: "The software Adobe Illustrator has been requested",
      id: "8",
      image:'https://img.icons8.com/color/96/user-male.png'
    }]

}
