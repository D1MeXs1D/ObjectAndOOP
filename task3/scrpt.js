// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


// абстрактная функция которая может описать любое электроустройство
function ElectricalAppliances( name ,color, power ,work){
    this.name = name,
    this.color = color,
    this.power = power,
    // включение и выключение из "розетки"
    this.work = function(){  
     if (work == true) {
        return  false;   
     }
     else {
        return   true;
     }
    }
  }
  
  const PC = new ElectricalAppliances("Компьютер","красный",  10000, false);
  const lamp = new ElectricalAppliances("Лампа","синяя",  1000, false);
  const dishwasher = new ElectricalAppliances("Посудомойка","серебристая",  5000, true);

//   for(let key in PC) {
//     console.log(`${key}: ${PC[key]}`);
// }


//   console.log(PC.work());
//   console.log(lamp.work());

  let summ  = 0; // глобальная переменная для запоминания, "кармашек"
  ElectricalAppliances.prototype.summPower = function (work, power) {
    if (work == true) {
        console.log("Потребляемая мощность",summ += power);  // "тот самый кармашек"
    }
  }

  PC.summPower(PC.work(), PC.power);
  lamp.summPower(lamp.work(), lamp.power);
  dishwasher.summPower(dishwasher.work(), dishwasher.power);


