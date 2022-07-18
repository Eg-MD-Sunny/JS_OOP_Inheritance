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
class employee{
    constructor(){
        console.log('Constructor: Manager');
    }
}
class manager extends employee{}
let a = new manager();












