import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


import { IEmployee } from './employee';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({providedIn:'root'})
export class EmployeeService{
   
    private employeeUrl='api/employees';

    constructor(private http: HttpClient) {}
               
         getEmployees():Observable<IEmployee[]>{
             return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
                 tap(employees => console.log('fetched employees')),
                 catchError(this.handleError('getEmployees',[]))
             )
         }

         getEmployee(id: number):Observable<IEmployee>{
             const url = `${this.employeeUrl}/${id}`;
             return this.http.get<IEmployee>(url).pipe(
                 tap(_=>console.log(`fetched employee id=${id}`))
             )
         }
        
          //delete hero

          deleteEmployee(employee:IEmployee |number ):Observable<IEmployee>{
            const id =typeof employee === 'number'? employee:employee.id;
            const url= `${this.employeeUrl}/${id}`;

            return this.http.delete<IEmployee>(url,httpOptions).pipe(
                tap(_=> console.log(`Deleted employee id =${id}`)),
                catchError(this.handleError<IEmployee>('deleteEmployee'))
            );
          }

          updateEmployee(employee:IEmployee):Observable<IEmployee>{
              return this.http.put(this.employeeUrl,employee,httpOptions).pipe(
                tap(_ => console.log(`Updated employee id= ${employee.id}`)),
                catchError(this.handleError<any>(`updateEmployee`))
              );
          }

          addEmployee(employee:IEmployee):Observable<IEmployee>{
            return this.http.post<IEmployee>(this.employeeUrl,employee,httpOptions).pipe(
                tap((employee:IEmployee)=>console.log(`added hero with id=${employee.id}`)),
                catchError(this.handleError<IEmployee>('addEmployee'))
            );
          }
          
         private handleError<T> (operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {
         
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
         
              // TODO: better job of transforming error for user consumption
              console.log(`${operation} failed: ${error.message}`);
         
              // Let the app keep running by returning an empty result.
              return of(result as T);
            };
          } 
}
