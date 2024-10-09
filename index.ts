let num:number[] = [1,2,3,4,5]
function add(a:number, b:number) {
    return a + b
}
console.log(add(50,20));

interface Preson{
    firstName:string;
    lastName:string;
    age:number;
}
let user:Preson ={
    firstName : 'ezeh' ,
    lastName :  'emeka',
    age : 30
}
console.log(
    `user:${user.firstName} ${user.lastName} ${user.age}`
);

class student {
    studentName : string

    constructor(name:string) {
        this.studentName= name;
    }

    greet():string {
        return `Hello, my name is ${this.studentName}`;
    }
}

let student1 = new student('emeka ezeh')
console.log(student1.greet())