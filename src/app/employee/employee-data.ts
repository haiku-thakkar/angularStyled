import { InMemoryDbService} from 'angular-in-memory-web-api';
//import { IEmployee } from './employee';

export class EmployeeData implements  InMemoryDbService{
    createDb() {
        const employees=[
            {
                id:1,
                firstName:'Haiku',
                lastName:'Thakkar',
                email:'haiku@promactinfo.com',
                contactNumber:9876543210,
                address:'5,asd,vadodadra',
                userName:'haikuT',
                password:'qwerty',
                gender:'female',
                qualification:'B.E',
                experience:'1.5 year',
                language:'C/C++'
            },
            {
                id:2,
                firstName:'Jhon',
                lastName:'Doe',
                email:'jhon@promactinfo.com',
                contactNumber:986543210,
                address:'9,qwe,vadodadra',
                userName:'jhonD',
                password:'qwerty12345',
                gender:'male',
                qualification:'M.E',
                experience:'2 year',
                language:'C/C++,PHP'
            },
            {
                id:3,
                firstName:'Hammerson',
                lastName:'Rake',
                email:'hammerson@promactinfo.com',
                contactNumber:6589543210,
                address:'5,asd,L.A',
                userName:'R.hamson',
                password:'notyourbusiness',
                gender:'male',
                qualification:'MCA',
                experience:'1 year',
                language:'C/C++,JAVA,PHP'
            }
        ];
        return {employees};
        }
    }