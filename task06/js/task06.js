// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає
//  результат обчислень

function sumElemet(...Arg){
    let sum=0;
    Arg.forEach(element=>{
        sum+=element
    })
    return sum;
}
 console.log(sumElemet(1,2,3,5,7,10));
 function sumElement1(...Arg){
    let sum=0;
    for(item of Arg){
        sum+=item
    }
    return sum;

 }
 console.log(sumElement1(1,2,3,5,100));


// 2)Створити функцію яка отримує від користувача день народження,місяць, рік
//  і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.
 function ageCounter(){
    let dateToday=new Date()
    let dayBirth=parseInt(prompt('Please enter your day of birth'));
    let monthBirth=parseInt(prompt("Please enter your month of birth"));
    let yearBirth=parseInt(prompt("Please enter your year of birth"));
    let dateBirthday=new Date(yearBirth,monthBirth-1,dayBirth);
    if(dateBirthday.getDate() === dateToday.getDate() && dateBirthday.getMonth === dateToday.getMonth ){
        console.log('Congratulation you have a birthday today!!!');
    }
    else if(dateToday.getMonth() === dateBirthday.getMonth() && dateToday.getDate()>dateBirthday.getDate()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear()} years old`);
    }
    else if(dateToday.getMonth() === dateBirthday.getMonth() && dateToday.getDate()<dateBirthday.getDate()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear() - 1} years old`);
    }
    else if(dateToday.getMonth() < dateBirthday.getMonth()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear() - 1} years old`);
    }
    else if(dateToday.getMonth() > dateBirthday.getMonth()){
        console.log(`You are ${(dateToday.getFullYear() - dateBirthday.getFullYear())} years old`);
    }
 }
 ageCounter();


// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, 
// і в разі дня народження буде вітати користувача
function birthday(){
    console.log('Congratulation you have a birthday today!!!');
}
   


function ageCounter(cbFn){
    let dateToday=new Date()
    let dayBirth=parseInt(prompt('Please enter your day of birth'));
    let monthBirth=parseInt(prompt("Please enter your month of birth"));
    let yearBirth=parseInt(prompt("Please enter your year of birth"));
    let dateBirthday=new Date(yearBirth,monthBirth-1,dayBirth);
    if(dateBirthday.getDate() === dateToday.getDate() && dateBirthday.getMonth === dateToday.getMonth ){
        cbFn();
    }
    else if(dateToday.getMonth() === dateBirthday.getMonth() && dateToday.getDate()>dateBirthday.getDate()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear()} years old`);
    }
    else if(dateToday.getMonth() === dateBirthday.getMonth() && dateToday.getDate()<dateBirthday.getDate()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear() - 1} years old`);
    }
    else if(dateToday.getMonth() < dateBirthday.getMonth()){
        console.log(`You are ${dateToday.getFullYear() - dateBirthday.getFullYear() - 1} years old`);
    }
    else if(dateToday.getMonth() > dateBirthday.getMonth()){
        console.log(`You are ${(dateToday.getFullYear() - dateBirthday.getFullYear())} years old`);
    }
 }
 ageCounter(birthday);


// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20
function centuryCalc(){
    let year=parseInt(prompt('Please enter the year'));
    if(year>100 && year % 100 !== 0){
        console.log(`Your year its ${Math.floor(year/100 + 1)} century`);
    }
    else if( year>100 && year % 100 == 0){
        console.log(`Your year its ${Math.floor(year/100 )} century`);
    }
    else if (year=NaN||undefined||null||String){
        console.log('Wrong year!');
    }
    else{
        console.log('Your year its 1 century');
    }

}
centuryCalc();


// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному 
//  ( В цьому місяці 30 днів в наступному 31 )
function daysAmount (year,month) {
    let monthUser = new Date(year,month,0).getDate();
    let nextMonthUser=new Date(year,month + 1,0).getDate();
    console.log (`Your month has ${monthUser} days and  the next month will has ${nextMonthUser} days`);
  }
 daysAmount(2023,1);