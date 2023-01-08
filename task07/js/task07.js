// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li ,
//  отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml
window.onload = () =>{
    let headerItem = document.querySelector('header');
    headerItem.innerHTML = 'Hello from inner html 1';
    console.log(headerItem);


    let [...headerItem2] = document.getElementsByTagName('header');
    headerItem2.forEach(item=>{
        item.innerHTML='hello from inner html 2';
    })
    console.log(headerItem2);
    let footerItem = document.querySelector('footer');
    footerItem.innerHTML = 'Hello from inner html footer';
    console.log(footerItem);
    
    let liItem = document.querySelector('ul li:nth-child(3)');
    liItem.innerHTML = 'Hello from li:nth-child(3)';
    console.log(liItem);

    let liItem2 = document.querySelectorAll("li");
    liItem2.forEach(item=>{
        item.innerHTML = 'Heloo from all li elements';
    
    })
    console.log(liItem2);

   

// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу
//  вивести в консоль отримане значення
 let liItemRelative = document.querySelector("li");
 console.log(liItemRelative.parentNode);
}
// 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
class MovieInfo{
    constructor(year,genre,name,views){
        this.year = year;
        this.genre = genre;
        this.name = name;
        this.views = views;
    }


// 4) В классі створити метод який визначає рейтинг в залежності від року
//  випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім 
//     роком і роком випуску ) 
  rating(){
    let age = new Date().getFullYear() - this.year;
    if(age === 0){
        age=1;
    }
    return `${Math.round(this.views/age)/100}`;
  }

}

// 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, 
// далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.
let theLordOfTheRings = new MovieInfo(2001,"fantasy","The Lord of the Rings", 100000);
let theGreenMile = new MovieInfo(1999,"Drama",'The green mile',120000);
let leon = new MovieInfo(1994,"Criminal","Leon",130000);
let homeAlone = new MovieInfo(1990,"comedy","Home alone",150000);

let filmsArr = [theLordOfTheRings,theGreenMile,leon,homeAlone];

for(let {year} of filmsArr){
    console.log(year);
}
for(counter of filmsArr){
    console.log(counter.rating());

}

