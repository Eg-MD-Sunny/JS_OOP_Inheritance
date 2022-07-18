//OOP Inheritance

//Example-01
// class employee{
//     constructor(){
//         console.log("Constructor: Employee");
//     }
// }
// class manager extends employee{}
// let a = new employee();


//Example-02
// class employee{
//     constructor(){
//         console.log("Constructor: Manager");
//     }
// }
// class manager extends employee{}
// let b = new manager();


//Example-03
//Example of how i use one class property to another class.
// class employee{
//     constructor(){
//         console.log('Constructor: Manager');
//     }
// }
// class manager extends employee{}
// let a = new manager();


//Example-04
// class employee{
//     constructor(name){
//         console.log(`Constructor: Manager ${name}`);
//     }
// }
// class manager extends employee{}
// let a = new manager("Raba");


//Example-05
// class employee{
//     constructor(name){
//         console.log(`Constructor: Employee ${name}`);
//     }
// }
// class manager extends employee{
//     constructor(name){
//         super();
//         console.log(`Constructor: Manager ${name}`);
//     }
// }
// let a = new manager("Raba");


//Example-06
// class employee{
//     constructor(name){
//         this.empName = name;
//         console.log("Constructor: Employee! " + name);
//     }
//     info(){
//         console.log("Employee name: " + this.empName);
//     }
// }
// class manager extends employee{

// }
// let a = new manager("Naim");
// a.info();


//Example-07
// class employee{
//     constructor(name){
//         this.empName = name;
//         console.log("Constructor: Employee! " + name);
//     }
//     info(){
//         console.log("Employee name: " + this.empName);
//     }
// }
// class manager extends employee{
//     info(){
//         console.log("Student Info : " + this.empName);
//     }
// }
// let a = new manager("Naim");
// a.info();


//Example-08
// class employee{
//     constructor(name){
//         this.empName = name;
//         console.log("Constructor: Employee! " + name);
//     }
//     info(){
//         console.log("Employee name: " + this.empName);
//     }
// }
// class manager extends employee{
//     info(){
//         super.info();     ///One Method using Another ethod
//         console.log("Student Info : " + this.empName);
//     }
// }
// let a = new manager("Naim");
// a.info();



//Example-09
// class employee{
//     constructor(name,age,salary){
//         this.empName = name;
//         this.empAge = age;
//         this.empSalary = salary;
//         console.log("Constructor: Employee! " + name);
//     }
//     info(){
//         document.write(`<h3>Employee Class</h3>
//                         Name: ${this.empName} <br>
//                         Age: ${this.empAge} <br>
//                         Salary: ${this.empSalary}
//                         `)
//     }
// }
// class manager extends employee{
//     info(){
//         let ta = 1000;
//         let pa = 300;
//         let totalSalary = this.empSalary + ta + pa;

//         document.write(`<h3>Manager Class</h3>
//                         Name: ${this.empName} <br>
//                         Age: ${this.empAge} <br>
//                         Salary: ${totalSalary}
//                         `)
//     }
// }
// let a = new manager("Naim",25,15000);
// let b = new employee("Kisna",22,11000);
// a.info();
// b.info();


//Example-10
class employee{
    constructor(name,age,salary){
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
        console.log("Constructor: Employee! " + name);
    }
    info(){
        document.write(`<h3>Employee Class</h3>
                        Name: ${this.empName} <br>
                        Age: ${this.empAge} <br>
                        Salary: ${this.empSalary}
                        `)
    }
}
class manager extends employee{
    info(){
        let ta = 1000;
        let pa = 300;
        let totalSalary = this.empSalary + ta + pa;

        document.write(`<h3>Manager Class</h3>
                        Name: ${this.empName} <br>
                        Age: ${this.empAge} <br>
                        Salary: ${totalSalary}
                        `)
    }
}

class test extends manager{};

let a = new test("Naim",25,15000);

//let a = new manager("Naim",25,15000);
//let b = new employee("Kisna",22,11000);
a.info();
//b.info();




