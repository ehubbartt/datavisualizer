(function() {
  window.addEventListener('load', init);

  function init() {
    let diagramSelections = qsa('.diagram-button');
    for (let i = 0; i < diagramSelections.length; i++) {
      diagramSelections[i].addEventListener('click', e => {
        e.preventDefault();
        selections(diagramSelections[i].innerHTML);
      });
    }
  }

  function selections(name) {
    let sections = qsa('.scroll-container')
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === name) {
        console.log('here')
        sections[i].classList.remove('hidden');
      } else {
        sections[i].classList.add('hidden');
      }
    }
  }

  /**
* Returns the array of elements that match the given CSS selector.
* @param {string} selector - CSS query selector
* @returns {object[]} array of DOM objects matching the query (empty if none).
*/
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector string.
   * @returns {object} first element matching the selector in the DOM tree (null if none)
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} idName - element ID
 * @returns {object} DOM object associated with id (null if none).
 */
  function id(idName) {
    return document.getElementById(idName);
  }

})();