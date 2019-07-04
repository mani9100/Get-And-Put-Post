import { Routes } from '@angular/router';
import { ValidationConsoleComponent } from './validation-console/validation-console.component';
import { MonComponent } from './DropDownWithAnotherDropDown/mon.component';
import { TableComponent } from './table/table.component';
import { Day5Component } from './FormWithDisable/day5.component';
import { Task2Component } from './TwowayBinding/task2.component';
import { Task3Component } from './serviceData/task3.component';
import { MaterialComponent } from './material/material.component';
import { SelectvaluewithAnothervalueComponent } from './selectvaluewith-anothervalue/selectvaluewith-anothervalue.component';
import { MatstepperComponent } from './matstepper/matstepper.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { MatcardComponent } from './matcard/matcard.component';
import { GetDataComponent } from './get-data/get-data.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { PostComponent } from './post/post.component';
import { GetDataConsoleComponent } from './get-data-console/get-data-console.component';
import { CacadingDropDownComponent } from './cacading-drop-down/cacading-drop-down.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
 export const AppRoutes:Routes=[{
     path:"Validations",
     component:ValidationConsoleComponent
 }, 
 {
     path:"Login",
     component:MonComponent
 },
{
    path:"Table",
      component:TableComponent
  },
  {
      path:"DiableButton",
      component:Day5Component
  },
  {
      path:"TwowayBinding",
      component:Task2Component
  },
  {
      path:"DolguBox",
      component:Task3Component
  },
  { 
      path:"Rstration",
      component:MaterialComponent
  },
  {
      path:"selectionWithAnotherForm",
      component:SelectvaluewithAnothervalueComponent
  },
  {
      path:"mathsteper",
      component:MatstepperComponent
  },
 {
     path:'crud',
     component:CrudTableComponent
 },
 {
     path:"card",
     component:MatcardComponent
 },
 {
     path:"GetData",
     component:GetDataComponent
 },
 {
     path:"Swag",
     component:SwaggerComponent
 },
 {
     path:"Post",
     component:PostComponent
 },
 {
     path:"Console",
     component:GetDataConsoleComponent
 },
 {
     path:"Cascading",
     component:CacadingDropDownComponent
 },{
     path:"DatePicker",
     component:DatepickerComponent
 }
]
    
 

