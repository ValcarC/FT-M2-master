// var traverseDomAndCollectElements = function (matchFunc, startEl) {
//   var resultSet = [];

//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
//   // usa matchFunc para identificar elementos que matchien

//   // TU CÓDIGO AQUÍ
//   function traverse(element) {
//     if (matchFunc(element)) {
//       resultSet.push(element);
//     }

//     var children = element.children;
//     for (var i = 0; i < children.length; i++) {
//       traverse(children[i]);
//     }
//   }

//   traverse(startEl);

//   return resultSet;
// };

// // Detecta y devuelve el tipo de selector
// // devuelve uno de estos tipos: id, class, tag.class, tag

// var selectorTypeMatcher = function (selector) {
//   if (selector.startsWith("#")) {
//     return "id";
//   } else if (selector.startsWith(".")) {
//     return "class";
//   } else if (selector.includes(".")) {
//     return "tag.class";
//   } else {
//     return "tag";
//   }
// };

// // NOTA SOBRE LA FUNCIÓN MATCH
// // recuerda, la función matchFunction devuelta toma un elemento como un
// // parametro y devuelve true/false dependiendo si el elemento
// // matchea el selector.

// var matchFunctionMaker = function (selector) {
//   var selectorType = selectorTypeMatcher(selector);
//   var matchFunction;
//   if (selectorType === "id") {
//   } else if (selectorType === "class") {
//   } else if (selectorType === "tag.class") {
//   } else if (selectorType === "tag") {
//   }
//   return matchFunction;
// };

// var $ = function (selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc);
//   return elements;
// };


// var traverseDomAndCollectElements = function (matchFunc, startEl) {
//   var resultSet = [];

//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   function traverse(element) {
//     if (matchFunc(element)) {
//       resultSet.push(element);
//     }

//     var children = element.children;
//     for (var i = 0; i < children.length; i++) {
//       traverse(children[i]);
//     }
//   }

//   traverse(startEl);

//   return resultSet;
// };



var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      traverse(children[i]);
    }
  }

  traverse(startEl);

  return resultSet;
};

var selectorTypeMatcher = function (selector) {
  if (selector.startsWith("#")) {
    return "id";
  } else if (selector.startsWith(".")) {
    return "class";
  } else if (selector.includes(".")) {
    return "tag.class";
  } else {
    return "tag";
  }
};

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = function (element) {
      return element.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      return element.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    var tag = selector.split(".")[0];
    var className = selector.split(".")[1];
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === tag && element.classList.contains(className);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    };
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
