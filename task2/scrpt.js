let object = Object.create(null);
// я погуглил и нашел несколько источников, 
// Object.create(null) создаёт пустой объект без прототипа ([[Prototype]] будет null)

let obj = new Object;
// const obj = Object.create(Object.prototype);

/* по факту разница между  const student = Object.create(person)  и
 let object = Object.create(null); заключается в том что null это пустота, отсутствие чего либо в целом, 
 плэотму при использовании такого метода, создается объект без прототипа
 
 
 
 Недостаток в том, что у таких объектов не будет встроенных методов объекта*/

// вот тут при развертывании obj я увидел разницу наглядно (без практики понимал как-то туго)
 console.log(object);
 console.log(obj); 