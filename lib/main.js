const DOMNodeCollection = require("./dom_node_collection");


const test = function test (arg) {
  console.log("this is a test: " + arg);
};



getNodesFromDom = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArr = Array.from(nodes);
  return new DOMNodeCollection(nodesArr);
};


const $l = function $l (el) {
  let array = [];
  if (el instanceof HTMLElement) {
    array.push(el);
    return new DOMNodeCollection(array);
  } else if (el instanceof String) {
      return getNodesFromDom(el);
  }
};

window.test = test;
window.$l = $l;
window.DOMNodeCollection = DOMNodeCollection;
