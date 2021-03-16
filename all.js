(function() {
  window.addEventListener('load', init);

  function init() {
    window.addEventListener('resize', change)
    change();
  }

  function change() {
    if (window.innerWidth < 1100) {
      removeAllChildNodes(document.querySelector('body'));
    }
    let text = document.createElement('p');
    text.textContent = "Please open this page on a desktop and in a larger window. Refresh when you are done."
    document.querySelector('body').appendChild(text)
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
})();