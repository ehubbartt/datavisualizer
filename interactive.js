(function () {
  window.addEventListener('load', init);
  let skipList = new Map();
  let size = 0;
  let isNum = true;

  function init() {
    qs('.button').addEventListener('click', addToList);
    id('type').addEventListener('click',changeType)
  }

  function changeType() {
    let typeText = id('type');
    let toggleText = id('type1');
    let input = id('input1');
    if(isNum) {
      typeText.innerHTML = "Word";
      toggleText.innerHTML = "\"Word\"";
      input.type = 'text';
      isNum = false;
    } else {
      typeText.innerHTML = "Number";
      toggleText.innerHTML = "\"Number\"";
      input.type = 'number'
      isNum = true;
    }
    removeAllChildNodes(id('container'));
    skipList.clear();
  }

  function random() {
    return (Math.floor(Math.random() * 2 + 1) === 2);
  }

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  function setHeight(height) {
    let is = random();
    while(is) {
      // if(height > getBaseLog(2,height)) {
      //   return height;
      // }
      height += 1;
      is = random();
    } 
    return height;
  }

  function addToList() {
    let value = id('input1').value;
    let height = setHeight(1);
    if(isNum) {
      value = parseInt(value);
    }
    if(!skipList.has(value)) {
      skipList.set(value, height);
      size++;
      loadSkipList();
    } else {
      alert('value added already');
    }
  }

  function loadSkipList() {
    let sortedMap;
    if(isNum) {
    sortedMap = new Map([...skipList].sort(function(a,b) {
      return a[0] - b[0];
     }));
    } else { 
      sortedMap = new Map([...skipList].sort());
    }
    removeAllChildNodes(id('container'));
    sortedMap.forEach(function(height, num) {
      let stack = document.createElement('div');
      stack.classList.add('column');
      id('container').appendChild(stack);
      for(let j = 0; j < height; j++) {
        let number = document.createElement('p');
        number.classList.add('number');
        number.innerHTML = num;
        stack.appendChild(number);
      }
    })
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