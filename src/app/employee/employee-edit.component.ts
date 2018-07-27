import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})


export class EmployeeEditComponent implements OnInit{

  @Input() employee: IEmployee;

  pageTitle:string= 'Employee Edit';
  errorMessage:string;
  qualification=[];
  experience=[];
  lang:[
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean}

  ];
  
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {  
    this.experience=new Array('0.5 year','1 year','1.5 year','2 year','2.5 year');
    this.qualification=new Array('B.E','M.E','BCA','MCA');
    this.lang=
            [
                {languageName : "C/C++",isEnable : true},
                {languageName : "Java",isEnable  : true},
                {languageName : "C#",isEnable  : false},
                {languageName : "PHP",isEnable  : false},
                {languageName : "Pyphon",isEnable  : false},
            ];
         this.getEmployee();   
  }

  onChange(langu:string, isChecked:boolean)
  {
    
    if(isChecked)
      {
      this.employee.language.push(langu);
      }
      else{
        let index =this.employee.language.indexOf(langu);
        this.employee.language.splice(index,1);
      }
  }

  getEmployee():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee)
  }

  goBack():void{
    this.location.back();
  }

  save():void{
    this.employeeService.updateEmployee(this.employee)
      .subscribe(()=> this.goBack());
  }
}
