// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems = [];


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

let createdBySpan = document.querySelector('#createdBy');
createdBySpan.innerHTML += ' Franco';


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description) {
  this.description = description;
  this.complete = false;
}

  
//   let myToDo = new ToDo('Hacer la tarea');
// console.log(myToDo.description); // Output: 'Hacer la tarea'
// console.log(myToDo.complete); // Output: false

// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function() {
  this.complete = true;
};

// let myToDo = new ToDo('Hacer la tarea');
// console.log(myToDo.complete); // Output: false
// myToDo.completeToDo();
// console.log(myToDo.complete); // Output: true


// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

function buildToDo(todo, index) {
  // Tu código acá:

    // Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
    const toDoShell = document.createElement('div');
  
    // Asignarle a 'toDoShell' la clase 'toDoShell'
    toDoShell.classList.add('toDoShell');
  
    // Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
    const toDoText = document.createElement('span');
  
    // Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
    // asignándole el valor de la propiedad 'description' del objeto ToDo.
    toDoText.innerHTML = todo.description;
  
    // Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
    toDoText.id = index;
  
    // En función del atributo 'complete' del objeto ToDo recibido como argumento:
    // - Si es true: asignarle a 'toDoText' la clase 'completeText'
    // - Si es false: no asignarle ninguna clase
    if (todo.complete) {
      toDoText.classList.add('completeText');
    }
  
    // Agregar 'toDoText' como hijo de 'toDoShell'
    toDoShell.appendChild(toDoText);
  
    // Devolver la variable toDoShell
    return toDoShell;
  }

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array


function buildToDos(toDos) {
  // Tu código acá:
    // Utilizar el método map para crear un nuevo array de objetos ToDo
    const newToDos = toDos.map((todo, index) => {
      // Llamar a la función buildToDo para crear cada objeto ToDo
      return buildToDo(todo, index);
    });
  
    // Devolver el nuevo array de objetos ToDo
    return newToDos;
  }
  
  // const toDoContainer = document.getElementById('toDoContainer');
  // const toDos = [
  //   { description: 'Hacer la tarea', complete: false },
  //   { description: 'Comprar leche', complete: true },
  //   { description: 'Ir al gimnasio', complete: false }
  // ];
  
  // const newToDos = buildToDos(toDos);
  // newToDos.forEach((toDo) => {
  //   toDoContainer.appendChild(toDo);
  // });
  
// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  // Seleccionar el elemento 'toDoContainer' y almacenarlo en la variable 'toDoContainer'
  const toDoContainer = document.getElementById('toDoContainer');

  // Setear el innerHTML de 'toDoContainer' como un string vacío
  toDoContainer.innerHTML = '';

  // Llamar a la función 'buildToDos' pasando el array 'toDoItems' como argumento
  const toDos = buildToDos(toDoItems);

  // Iterar sobre el resultado devuelto por 'buildToDos' y agregar cada elemento a 'toDoContainer'
  toDos.forEach((toDo) => {
    toDoContainer.appendChild(toDo);
  });
}

// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // 1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
  const toDoInput = document.getElementById('toDoInput');
  const newToDo = new ToDo(toDoInput.value);

  // 2) Agregar el objeto ToDo recién creado al array toDoItems
  toDoItems.push(newToDo);

  // 3) Setear el valor del input toDoInput como un string vacío ("")
  toDoInput.value = '';

  // 4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla
  displayToDos();
}


// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

// 1) Seleccionar el elemento cuyo id es 'addButton'
const addButton = document.getElementById('addButton');

// 2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback
addButton.addEventListener('click', addToDo);


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;
  // Tu código acá:
}

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
