export class Employee {
    langs: any;
      
      constructor(
          public firstName:string,
          public lastName:string,
          public email:string,
          public contactNo:string,
          public address:string,
          public userName:string,
          public password:string,
          public gender:string,
          public qualification:string,
          public experience:string,
          public lang:Array<string>=[]
      )
      {}
  }
  