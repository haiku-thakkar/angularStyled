import { EmployeeListComponent } from "./employee/employee-list.component";

import { EmployeeComponent } from "./employee/employee.component";

import { RouterModule } from "@angular/router";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponent } from "./employee/employee-edit.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '' ,component:EmployeeListComponent},
      {path: 'employeeList' ,component:EmployeeListComponent},
      {path: 'employeeAdd' ,component:EmployeeComponent},
      {path: 'employeeEdit/:id',component:EmployeeEditComponent}
      
    ])
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
