import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.model';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:IEmployee[];

  qualification=[];
  experience=[];
  lang:[
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean}

    ];

  model:Employee;

  constructor(private employeeService:EmployeeService, private location: Location) { }

  ngOnInit():void {

    this.experience=new Array("0.5 year","1 year","1.5 year","2 year","2.5 year");
    this.qualification=new Array('B.E','M.E','BCA','MCA');
    this.lang=
      [
        {languageName : "C/C++",isEnable : true},
        {languageName : "Java",isEnable  : true},
        {languageName : "C#",isEnable  : false},
        {languageName : "PHP",isEnable  : false},
        {languageName : "Pyphon",isEnable  : false},
      ];

    this.model = new Employee('','','','','','','','','','',[]);

  }

  onChange(langu:string, isChecked:boolean)
  {
    if(isChecked)
    {
      this.model.lang.push(langu);
    }
    else{
      let index =this.model.lang.indexOf(langu);
      this.model.lang.splice(index,1);
    }
  }

  add(firstName:string,
      lastName:string,
      email:string,
      contactNumber:number,
      address:string,
      userName:string,
      password:string,
      gender:string,
      qualification:string,
      experience:string,
      language:[string])
  :void{
    firstName=firstName;
    lastName=lastName;
    email=email;
    contactNumber=contactNumber;
    address=address;
    userName=userName;
    password=password;
    gender=gender;
    qualification=qualification;
    experience=experience;
    //language[]:language[];
    this.employeeService.addEmployee({firstName ,lastName,email,contactNumber,address,userName,password,gender,qualification, experience, language:[]} as IEmployee)
      .subscribe(employee=>{
        this.employees.push(employee);
      });

  }
  goBack():void{
    this.location.back();
  }
}
