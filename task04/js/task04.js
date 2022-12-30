// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

const userWallet = {
    amountUsa : 100,
    amountEuro :100,
    amountUa : 1000,
    
}
const bank = [
    {
    buy:10,
    sell:12,
    name:'usd',
},
{
    buy:0.9,
    sell:1.1,
    name:'uah',
},
{
    buy:12,
    sell:14,
    name:'eu',
},
];
function buyInfo(arr){
    if (userWallet.amountUa == 0) {
        alert("Try next time");
        return;
      }
    let buyInfoArr = [];
    arr.forEach(element => {
        buyInfoArr.push(`You can buy ${userWallet.amountUa/element.buy} ${element.name}`)
    });
    console.log(buyInfoArr);
    return(buyInfoArr);
}
buyInfo(bank)

function sellInfo(arr,userObj){
 let sellAll= 0;
  arr.forEach(element => {
    if(element.name == "usd"){
        sellAll += userObj.amountUsa * element.buy;
    }
    else if(element.name == "uah"){
        sellAll += userObj.amountUa * element.buy;
    }
    else if(element.name == "eu"){
        sellAll += userObj.amountEuro * element.buy;
    }
});
  return (sellAll);
 }
sellInfo(bank,userWallet);
console.log(`After selling all curency you have ${sellInfo(bank,userWallet)} UAH`);

// 2)Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. 
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
let Steps = 10;
let Heading = "North";
function move(a,b){
   let info= `on ${a} on ${b}`;
   return (info);
}

function moveUser(a,b,callback){
 return`User will gone:${callback(a,b)} steps`;
}
console.log(moveUser(Heading,Steps,move));

// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], 
// Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
const Array=["Keep", "Remove", "Keep", "Remove","Keep", "Remove", "Keep", "Remove"];
 function arrayRemove(arr){
    if(arr.length>0){
        for(let i=0; i<arr.length; i++){
      arr.splice(i+1,1);
      }
    }
    else {
        alert('This array is empty');
    }
 }

 arrayRemove(Array);
 console.log(Array);
// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,
let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
function totalArea(fn){
    let totalAreaArray=[];
  for(let i=0 ; i<fn.length ; i++){
totalAreaArray.push(fn[i].sizeA*fn[i].sizeB);
console.log(` total area ${fn[i].figure} is ${totalAreaArray[i]}`);
}
return (totalAreaArray);
}
// totalArea(figurs);
console.log(totalArea(figurs));
// 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
const Arr=[2,3,5,4,8,7,9,10];
const newArray=[];
 for(let i=0; i<Arr.length; i++){
    if(Arr[i] % 2 == 0){
       newArray.push(Arr[i] * 4);
    }
 }
 console.log(newArray);