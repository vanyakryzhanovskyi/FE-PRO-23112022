// let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
// // let SortNumb = []; --------Де краще ставити цю змінну?В функціі чи тут?
// function SortRandomNumb(){
//     let SortNumb = [];
//     for(i=0 ; i<arrRandomNumbers.length; i++){
//         let itemArr = arrRandomNumbers[i];
//         if (itemArr % 2 == 0)
//             {
//             SortNumb.push(itemArr);
//            }
//     }
//     console.log(SortNumb);
//     return SortNumb;
   
// }
// SortRandomNumb();
//=================варіант 2=======================
// function SortRandomNumb(arr) {
//     let SortNumb = [];
//     for (i = 0; i < arr.length; i++){                
//         if (arr[i] % 2 == 0) {
//             SortNumb.push(arr[i]);
//         }
//     }
//     return SortNumb; 
// }
// console.log (SortRandomNumb(arrRandomNumbers));


// ================================Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив.
// let MyArray=[];
// if(Array.isArray(MyArray)){
// for(i=0; i<5 ; i++){
//     let ItemToBuy= prompt('What do you have to buy ?');
//     MyArray.push(ItemToBuy);
//     }
// }
// console.log(MyArray);


//=Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. ( при розрахунках вважайте що массив може бути будьякої довжини переданий)

//  let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

// function MiddleItem(arr){
//     let a=0;
//     let MiddleItemSum = [];
//     for(let i=0 ; i<arr.length; i++){
//         let b = arr[i];
//       a += b;
//     }
//     if(a!=0){
//       c = a / arr.length;
//       MiddleItemSum.push(c);
//     }
//     return MiddleItemSum;
// }
// console.log(MiddleItem(arrRandomNumbers));

//Створити функцію яка замінює в массиві =) на ;)
// let smile = [':)', '=)',':)', '=)',':)', '=)'];
// function change(arr){
//  for(let i=0; i<arr.length; i++){
//     if(arr[i]=="=)"){
//         arr[i]=';)';
//     }
//    }
//    return arr;
// }
//  console.log(change(smile));
// створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals
// let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

// function FirstLastArg(Arg){
//     let MyArr= [];
//     if(Arg == 'first'){
//        MyArr.push(animals[0]);
//        animals.shift();
//     }
//     else if(Arg == 'last'){
//         MyArr.push(animals[animals.length -1]);
//         animals.pop();
//     }
//     return MyArr;
// }
// console.log(FirstLastArg("first",animals));
// console.log(FirstLastArg("last",animals));
// console.log(animals);


// Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

// let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

// function sumArray(Arr){
//     let sum = [];
//     let a=0;
//     for(i=0; i<Arr.length; i++){
//         let SumItem=Arr[i];
//         a += SumItem;
//     }
//     sum.push(a);
//     return sum;
// }
// console.log(sumArray(arrRandomNumbers));

//Створити функцію яка отримує в аргумент старт значення і фініш значення ( старт менше фініша) також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш
// let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
// function SliceArr (start,finish,Arr){
//     if(start < finish && Array.isArray(Arr) && Arr.length>=finish){
//       Arr =  Arr.slice(start,finish);
//     }
//     else{
//         alert("Start must bee < than finish, finish <= than lenght Arr")
//        return ;
//     }
//     return Arr;
    
    
// }
// console.log(SliceArr(0,10,arrRandomNumbers));

