// =====================calculator=================
let FirstNumber = parseFloat(prompt("Your first number"));
let SecondNumber = parseFloat(prompt("Your second number"));
let OperationType = prompt("Your type of operation");
let result = 0;
if (OperationType == "+") {
    result = FirstNumber + SecondNumber;
    console.log("Your value after '+' operation =", result );
}
else if (OperationType == "-"){
    result = FirstNumber - SecondNumber;
    console.log("Your value after '-' operation =", result);
}
else if (OperationType == "*"){
    result = FirstNumber * SecondNumber;
    console.log("Your value after '*' operation =", result);
}
else if (OperationType == "/"){
    if(FirstNumber !=0 && SecondNumber !=0){
    result = FirstNumber / SecondNumber;
    console.log("Your value after '/' operation =", result);
  }
  else{
    alert('Wrong operation, you cannot devide on zero')
  }
}
// ===================================парні значення числа 20 ===========================
for(let i=0; i<20;){
    i=i+2;
   console.log(i)
}
// ===================================вариант 2====================================
for(let i=0; i<=20; i++){
    if(i % 2 == 0){
    console.log(i)
   }
}
// ==============================cума чисел між А і В (А<В)====================================
let A=5;
let B=21;
let ResultValue=0;
if(A>=B){
    alert("A must be less than B");
}
for(let i=A; i<B;i++){
    ResultValue=i+ResultValue;
}
console.log(ResultValue);
// =======================цикл від більшого до меншого==========================
for(let i=20; i>=0; i--){
    console.log(i)
}
// ========================отримвйте два значення за допомогою * в консоль фігуру=========
let a=4; //(width)
let b=6;  //(height)
for(let i=0; i<b;i++){
 let Item="";
 for(let j=0; j<a; j++){
 Item+='*';
}
console.log(Item);
}

// ================================запит логіна та пароля===============================
let login = prompt('Please enter your login');
let password =parseInt(prompt("Please enter your password"));
if(login == 'admin' && password == 12345 ){
    alert("вітаємо в системі!");
}
    else{
        alert("пароль чи логін не вірні");
    }
// ==============================середнє значення 3 чисел введених користувачем======================
let firstValue=parseFloat(prompt('Please enter the first number'));
let secondValue=parseFloat(prompt('Please enter the second number'));
let thirdValue=parseFloat(prompt('Please enter the third number'));
let resValue=0;
 if(firstValue>=0 && secondValue>=0 && thirdValue>=0){
    resValue=(firstValue + secondValue + thirdValue) / 3;
    console.log(resValue);
 }
 else{
    alert('Error!')
 }
//==================================Спитати вік користувача================================
let userAge=prompt("How old are you?");
 let permis=18;
 result = userAge >= permis?"Welcome!":"This content only 18 yers old!";
 alert(result);
 console.log(result);
//==============================Switch з назвами планети=================================
let name = prompt("please enter the planet name");
switch(name){
        case "Mercury":
        case "mercury":
            alert('Mercury is the planet of the solar system!!!');
        console.log('Mercury is the planet of the solar system!!!');
        break;
        case 'Venus':
        case 'venus':
            alert('Venus is the planet of the solar system!!!');
        console.log('Venus is the planet of the solar system!!!');
        break;
        case "Earth":
        case "earth":
            alert('Earth is the planet of the solar system!!!');
        console.log('earth is the planet of the solar system!!!');
        break;
        case "Mars":
        case "mars":
            alert('Mars is the planet of the solar system!!!');
        console.log('Mars is the planet of the solar system!!!');
        break;
        case "Jupiter":
        case "jupiter":
            alert('Jupiter is the planet of the solar system!!!');
        console.log('Jupiter is the planet of the solar system!!!');
        break;
        case "Saturn":
        case "saturn":
            alert('Saturn is the planet of the solar system!!!');
        console.log('Saturn is the planet of the solar system!!!');
        break;
        case "Uranus":
        case "uranus":
            alert('Uranus is the planet of the solar system!!!');
        console.log('Uranus is the planet of the solar system!!!');
        break;
        case "Neptune":
        case "neptune":
            alert('Neptune is the planet of the solar system!!!');
        console.log('Neptune is the planet of the solar system!!!');
        break;
        default:
            alert("The solar system doesnt have this planet" );
            console.log("The solar system doesnt have this planet" );
        }
// ===============Знижки користувача=============================
let userBasket=parseFloat(prompt('Please enter your basket price'));
if(userBasket<=0){
    alert('Wrong price!!!!!!!!!')
}
else if(userBasket>=100 && userBasket<3000 ){
    let discount =userBasket * 0.03;
   let totalPrice = userBasket - discount;
   alert(`Your discount ${discount}$,total price after discount${totalPrice}$`);
   console.log('Your discount ',discount,' $');
   console.log('Total price after discount',totalPrice,'$');
}
else if(userBasket>=3000 && userBasket<10000){
    let discount = userBasket * 0.05;
   let totalPrice = userBasket - discount;
   alert(`Your discount ${discount}$,total price after discount${totalPrice}$`);
   console.log('Your discount ',discount,' $');
   console.log('Total price after discount',totalPrice,'$');
}
else if (userBasket>=10000){
    let discount = userBasket * 0.07;
   let totalPrice = userBasket - discount;
   alert(`Your discount ${discount}$,total price after discount${totalPrice}$`);
   console.log('Your discount ',discount,' $');
   console.log('Total price after discount',totalPrice,'$');
}
else{
    alert('Sorry,you dont have discount');
    console.log('Sorry,you dont have discount');
    console.log('Your total price is',userBasket,'$');
}
// ==========================назва тварини=============================
let animal=prompt('Please enter your animal');
switch(animal){
    case 'cow':
        case 'Cow':
            alert('mooooooooooooo');
            console.log('Cow says mooooooo');
            break;
            case 'cat':
            case 'Cat':
            alert('miauuuu');
            console.log('Cat says miauuuu');
            break;    
            case 'dog':
            case 'Dog':
                alert('haw');
            console.log('Dog says haw');
            break;
            case 'Goat':
            case 'goat':
                alert('meeeeee');
            console.log('Goat says meeee');
            break;        
}







