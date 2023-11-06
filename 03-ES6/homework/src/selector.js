var traverseDomAndCollectElements = function (matchFunc, startEl) { // '.photos'
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)

  // ? fijarnos en los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    let resultado = traverseDomAndCollectElements(matchFunc, startEl.children[i]) //h1
    
    // * Concatenando los resultados
    resultSet = [...resultSet, ...resultado]
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {// '.photos'  '#photos' 'div' 'div.photos'
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class'

  // * Opción for:
  // for (let i = 1; i < selector.length; i++) {
  //   if(selector[i] === '.') return 'tag.class'
    
  // }

  // * Opción includes:
  if(selector.includes('.')) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {//'.photos' 'div.photos'
  var selectorType = selectorTypeMatcher(selector);//'tag'
  var matchFunction;//función
  if (selectorType === "id") {
    matchFunction = function(elemento){ // recibe como parámetro un elemento HTML - div
      return '#' + elemento.id === selector
    }
  } else if (selectorType === "class") {
    // * ES5
    // matchFunction = function(elemento){
    //   // * For tradicional:
    //   for (let i = 0; i < elemento.length; i++) {
    //     if('.' + elemento.classList[i] === selector) return true;
    //   }
    //   return false;
    // }

    //* ES6:
    matchFunction = elemento => elemento.classList.contains(selector.substring(1))

  } else if (selectorType === "tag.class") { // * 'div.photos'
    matchFunction = function(elemento){ // ? ['div','photos']
      let [tag, clase] = selector.split('.') // * [tag, class] -> tag = 'div' - class = 'photos'

      // * recursión + closure
      return matchFunctionMaker(tag)(elemento) && matchFunctionMaker('.' + clase)(elemento)
    }

  } else if (selectorType === "tag") {
    matchFunction = function(elemento){
      return elemento.tagName.toLowerCase() === selector.toLowerCase()
    }
  }
  return matchFunction;// * función
};

var $ = function (selector) { // '.photos'
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); //función
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

$('.photos') // * document.querySelectorAll('.photos') -> Nos devuelve todos los elementos que coincidan con la clase.
