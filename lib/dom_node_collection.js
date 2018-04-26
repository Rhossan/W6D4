class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(str) {
    if (typeof str === "string") {
      this.each((node) => {
        node.innerHTML = html;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  append(children) {
    if (this.nodes.length === 0) return;

    if (typeof children === 'object' && !(children instanceof DOMNodeCollection)){
      children = $l(children);
    }

    if (typeof children === 'string') {
      this.each((node) => {
        node.innerHTML += children;
      });
    } else if (children instanceof DOMNodeCollection){
      this.each((node) => {
        children.each((childNode) => {
            node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(key, val) {
    if (typeof val === "string") {
      this.each(node => node.setAttribute(key, val));
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(Class) {
    this.each(node => node.classList.add(Class));
  }

  removeClass(Class) {
    this.each(node => node.classList.remove(Class));
  }

}


module.exports = DOMNodeCollection;
