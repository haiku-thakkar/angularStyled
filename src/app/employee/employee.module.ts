import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./employee-list.component";
import { SharedModule } from "../shared/shared.module";
import { EmployeeService } from "./employee.service";
import { RouterModule } from "@angular/router";

// import { EmployeeResolver } from './employee-resolver.service';
import { EmployeeComponent } from "./employee.component";
import { EmployeeEditComponent } from './employee-edit.component';


@NgModule({
    imports:[      
        RouterModule, 
        SharedModule
    ],

    declarations:[
        EmployeeListComponent,
        EmployeeComponent,
        EmployeeEditComponent
    ],

    providers:[
        EmployeeService,
        // EmployeeResolver
    ]

})
export class EmployeeModule{}