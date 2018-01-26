/**
 * Aurora JS Utilities.
 * 
 * @export Utilities
 * @class Utilities
 */
export class Utilities {

  /**
   * Creates an instance of Utilities.
   * @param {string} env The development environment variable.
   * @memberof Utilities
   */
  constructor (env) {
    this.environment = env || 'DEV';
  }

  /**
   * Find the nearest ancestor matching a CSS selector for a given element.
   * 
   * @param   {string}        el       The starting element.
   * @param   {string}        selector The ancestor's selector to match.
   * @returns {(string|null)}          The matched ancestor, or null.
   * @memberof Utilities
   */
  getAncestorBySelector (el, selector) {

    let element  = el.nodeType === undefined ? document.querySelector(el) : el,
        ancestor = element.parentElement;

    while (ancestor.tagName !== 'HTML') {
      if (ancestor.classList.contains(selector) || ancestor.tagName === selector.toUpperCase() || ancestor.getAttribute('id') === selector) {
        return ancestor;
      }

      ancestor = ancestor.parentElement;
    }

    return null;
  }

  /**
   * Get all sibilings relative to a CSS selector.
   * 
   * @param   {string} selector The CSS selector to search.
   * @returns {array}           The collection of matching elements.
   * @memberof Utilities
   */
  getSiblingsBySelector (selector) {

    let sel = selector.nodeType === undefined ? document.querySelector(selector) : selector,
        children = sel.parentElement.children,
        siblings = [];

    for (const child of children) {
      siblings.push(child);
    }

    return siblings;
  }

  /**
   * Insert an element after an existing DOM node.
   * 
   * @param   {string} newNode The node to be inserted.
   * @param   {string} refNode The node to insert after.
   * @returns {string}         The inserted node.
   * @memberof Utilities
   */
  insertAfter (newNode, refNode) {

    refNode = refNode.nodeType === undefined ? document.querySelector(refNode) : refNode;

    if (refNode.nextElementSibling !== null) {
      refNode.parentElement.insertBefore(newNode, refNode.nextElementSibling);
    } else {
      refNode.parentElement.appendChild(newNode);
    }

    return newNode;
  }

  /**
   * Swaps the position of two elements within the DOM.
   * 
   * @param   {string} el1 The first element to swap.
   * @param   {string} el2 The second element to swap.
   * @returns {boolean}    Wheather the swap was successful.
   * @memberof Utilities
   */
  swapElements (el1, el2) {

    let clone1,
        clone2;

    el1 = el1.nodeType === undefined ? document.querySelector(el1) : el1;
    el2 = el2.nodeType === undefined ? document.querySelector(el2) : el2;
    clone1 = el1.cloneNode(true);
    clone2 = el2.cloneNode(true);

    try {
      el1.parentElement.insertBefore(clone2, el1);
      el2.parentElement.insertBefore(clone1, el2);

      el1.parentElement.removeChild(el1);
      el2.parentElement.removeChild(el2);

      return true;
    } catch (error) {

      if (this.environment === 'DEV') {
        console.log(error); // eslint-disable-line no-console
      }

      return false;
    }
  }

  /**
   * Removes a DOM element and all its children, returning an array of removed nodes.
   * 
   * @param   {string} selector The element to be removed.
   * @returns {array}           The removed elements.
   * @memberof Utilities
   */
  removeAll (selector) {

    let walker,
        removed = [];

    selector = selector.nodeType === undefined ? document.querySelectorAll(selector) : selector;

    for (const el of selector) {

      walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT, null);

      removed.push(walker.currentNode);

      for (let i = 0; i < walker.currentNode.children.length; i++) {

        const currentNode = walker.currentNode.children[i];

        removed.push(currentNode);

        if (currentNode.hasChildNodes()) {

          for (let j = 0; j < currentNode.children.length; j++) {

            const currentChild = currentNode.children[j];

            removed.push(currentNode.children[j]);

            if (currentChild.hasChildNodes()) {
              for (let k = 0; k < currentChild.children.length; k++) {
                removed.push(currentNode.children[k]);
              }
            }
          }
        }
      }

      el.parentElement.removeChild(el);
    }

    return removed;
  }
} // end Utilities
