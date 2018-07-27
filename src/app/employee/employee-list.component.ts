import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";
//import { Router } from "@angular/router";

@Component({
    selector:'app-employee-list',
    templateUrl:'./employee-list.component.html',
    styles:['table th{color:white;vertical-align: middle;text-align: center;}']
})

export class EmployeeListComponent implements OnInit{
    pageTitle: string='Employee List';
    errorMessage:string;

    employees: IEmployee[];

    constructor( private employeeService:EmployeeService){}

    ngOnInit(): void {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees=employees);

    }

    delete(employee :IEmployee):void{
        if(confirm(`you really want to delete:${employee.firstName}?`)){
        this.employees=this.employees.filter(e => e !== employee);
        this.employeeService.deleteEmployee(employee).subscribe();
    }
}


}
