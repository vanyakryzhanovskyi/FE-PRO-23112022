// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути 
// унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

function UserConstructor(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.UserId = Math.round(Math.random()*10);
    
}
UserConstructor.prototype.info=function(){
return`User name:${this.name};User surname:${this.surname}User age:${this.age};User ID:${this.UserId}`;
}
const newUser= new UserConstructor('Grisha','Ivanov',18);
const newUser1= new UserConstructor('Jora','Petrov',20);
console.log(newUser);
console.log(newUser1);
console.log(newUser.info());
console.log(newUser1.info());
// 2)Створити методи на прототайп для оновлення ключів обєкту юзер
//  наприклад змінити імя , вік користувача.ІD не міняється

UserConstructor.prototype.ChangeAge=function(name,surname,age){
 this.name=name;
 this.surname=surname;
 this.age=age;
 return
}
console.log(newUser);
console.log(newUser.info())
newUser.ChangeAge('Innokentiy','Mazerati',30);
console.log(newUser);
console.log(newUser.info());
// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі,
//  переметра, та визначення діагоналі

function figure (sideA,sideB){
    this.sideA=sideA;
    this.sideB=sideB;
}
figure.prototype.area = function(){
  return this.sideA*this.sideB;
  
}
figure.prototype.perimeter = function(){
    return 2*this.sideA + 2*this.sideB;
  
}
figure.prototype.diagonal = function(){
    return Math.sqrt(Math.pow(this.sideA,2) + Math.pow(this.sideB,2));

}
const myFigure = new figure(5,6);
console.log(myFigure.area());
console.log(myFigure.perimeter());
console.log(myFigure.diagonal());
// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.
let userName = prompt("Please enter your name");
let userNameUpper = userName.toUpperCase()
let userNameTrim = userNameUpper.trim();
let userNameStart = userNameTrim.slice(0,1);
let userNameLast = userNameTrim.slice(userNameTrim.length-1,userNameTrim.length);
let userNameCut = userNameStart+userNameLast;
console.log(userNameCut);
// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, 
// якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки
 function stringCut(){
    let string= prompt('Please enter something');
    string = string.trimEnd();
    string = string.trimStart();
    if(string.length>10){
       string = string.substring(0,10) +'...';
    }
    return string;
 }
 console.log(stringCut());





