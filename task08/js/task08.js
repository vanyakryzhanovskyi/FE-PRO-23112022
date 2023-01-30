// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі.
//  При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути данні
//   які введено і час створення в форматі день, номер місяця, рік і час години хвилини.
window.onload = () =>{
   
    let list = document.querySelector('.list');
    function ElCreate(){
       let UserData = prompt('Please enter information');
        let ulElement = document.createElement('li');
        console.log(ulElement);
        let date =new Date();
        ulElement.innerText=`${UserData} entered data at:${date.toLocaleString()}`;
        list.appendChild(ulElement);
        ulElement.setAttribute('style','list-style: none;font-size:25px; padding-bottom:20px; text-align: center;');
       


    };
    for(let i=0; i<7; i++){
        ElCreate();
        if(i>4){
        list.removeChild(list.firstElementChild);
        }
  }; 


// 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення
//  і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3 
//     let images = [
//         {
//             imgPath:'img/image.png',
//             alt:'png image'
//             href:'https://img.com/60903073638.jpg'
//         }
//         ...
//     ]


let images = [
            {
                imgPath:'img/da_vinchi.png',
                alt:'Леонардо Да Вінчі, Автопортрет',
                href:'https://i1.wp.com/arts-dnevnik.ru/wp-content/uploads/2017/01/IMG_2569.jpg',
            },
              {
                imgPath:'img/da_vinchi_mona_liza.png',
                alt:'Леонардо Да Вінчі, Мона Ліза',
                href:'https://i2.wp.com/arts-dnevnik.ru/wp-content/uploads/2016/10/image-9.jpeg?ssl=1',
            },
            {
                imgPath:'img/Rafael_Madonna.png',
                alt:'Рафаэль. Сикстинская Мадонна',
                href:'https://i0.wp.com/arts-dnevnik.ru/wp-content/uploads/2016/08/image-10.jpeg',
            },
             {
                imgPath:'img/mone.png',
                alt:'Моне, Автопортрет',
                href:'https://i1.wp.com/arts-dnevnik.ru/wp-content/uploads/2017/05/IMG_3468.jpg',
            },
             {
                imgPath:'img/picaso.png',
                alt:'Пабло Пикассо. Автопортрет',
                href:'https://i2.wp.com/arts-dnevnik.ru/wp-content/uploads/2017/09/IMG_5447.jpg',
            },
    ];
    
    images.forEach((item)=>{
        let ulEl = document.querySelector('.imgList');
        let liEl = document.createElement('li');
        let link = document.createElement('a');
        let linkImg = document.createElement('img');
        link.setAttribute('href',item.href);
        linkImg.setAttribute('alt',item.alt);
        linkImg.setAttribute('src',item.imgPath);
        linkImg.style.width = '100px';
        linkImg.style.height = '150px';
        liEl.style.listStyle = 'none';
        liEl.style.display = 'inline-block';
        liEl.style.padding = '20px';
        ulEl.appendChild(liEl);
        liEl.appendChild(link);
        link.appendChild(linkImg);
        
    })


// 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js. 
//  В таблиці повино бути мінімум 2 рядки

let studentList = [
    {name: 'Vasia',
     town: 'Kyiv',
     course: 'JS',
    },
    {name: 'Petia',
     town: 'Sumy',
     course: 'FE',
    },
    {name: 'Grysha',
     town: 'Odesa',
     course: 'Jawa',
    },
    {name: 'Daria',
     town: 'Dnepr',
     course: 'JS',
    },
    {name: 'Aliona',
     town: 'Kyiv',
     course: 'JS',
    },

]
 let tableHead=['Name','Town','Course'];

 let table=document.querySelector('table');
 let thead=document.createElement('thead');
 let tr=document.createElement('tr');
 let tbody = document.createElement('tbody');
 table.appendChild(thead);
 thead.appendChild(tr);
 table.appendChild(tbody);
 table.setAttribute('style','border: 1px solid black;width:100%; text-align: left;');

  function addTableHeader(arr){
    arr.forEach((item)=>{
    let th=document.createElement('th');
     th.innerText = item;
     tr.appendChild(th);
    });
};
  addTableHeader(tableHead);
 
function addTableData(arr){
        arr.forEach((item)=>{
        let trBody= document.createElement('tr')
        tbody.appendChild(trBody);
        // let tdName=document.createElement('td');
        // tdName.innerText=item.name;
        trBody.appendChild(document.createElement('td')).append(item.name);
        // let tdTown=document.createElement('td');
        // tdTown.innerText=item.town;
        trBody.appendChild(document.createElement('td')).append(item.town);
        let tdCourse=document.createElement('td');
        // tdCourse.innerText=item.course;
        trBody.appendChild(document.createElement('td')).append(item.course);
    })
}

addTableData(studentList);

}