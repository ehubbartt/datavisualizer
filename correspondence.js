(function () {
  window.addEventListener('load', init);

  let counter = 0;
  const paragraph = {
    text: [
      "Here is a 5 way correspondance between a SkipList, 2-3-4 Tree, ZipTree, RLRB Tree, and a Triple Pivot Quicksort",
      "The shape and connections are the only thing that matter to these structures, the color in diagrams has been added purely to show how these structures line up. All these structures work in a very similar way, and have interesting connections. Perhaps the most suprising is how a Zip Tree is nearly identical to a Right - Leaning Red Black Tree, just one has 'ranks' while the other has colors.",
      "Beyond that, all these trees have an 'upper layer' of sorts, which divides the rest of the values into ranges. We have colored these dividing values, pivots and nodes in blue, and the ranges are the other colors.",
      "So for example, in all structures 13 and 48 are either pivots, the top nodes, or are on the heighest Skip Tree. Between them, all the values between 13 anad 48 exist in a zone marked in green. This shows how all these structures line up, and have a lot of similarities in how they represent and store data."
    ]
  }

  function init() {
    id('next-button').addEventListener('click', (e)=> {
      e.preventDefault();
      move(true);
    });
    id('back-button').addEventListener('click', (e)=> {
      e.preventDefault();
      move(false);
    });
  }

  function move(isNext) {
    let text;
    let paragraphText = id('paragraph-text');
    removeAllChildNodes(paragraphText);
    if(isNext) {
      counter++;
    } else {
      counter--;
    }
    if (counter === 0) { text = document.createElement('h1') }
    else { text = document.createElement('h3') }
    text.textContent = paragraph.text[counter];
    paragraphText.appendChild(text);
    if(counter <= 0) {
      id('back-button').classList.add('hidden')
    } else if(counter >= paragraph.text.length - 1) {
      id('next-button').classList.add('hidden')
    } else {
      id('back-button').classList.remove('hidden');
      id('next-button').classList.remove('hidden')
    }
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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