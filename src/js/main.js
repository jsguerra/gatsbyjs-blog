(function (window, document, undefined) {
  'use strict';

  window.addEventListener('load', function() {
    // store tabs variable
    var myTabs = document.querySelectorAll('ul.nav-tabs > li'),
        i = 0;
    
    function myTabClicks(tabClickEvent) {

      for (i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove('active');
      }

      var clickedTab = tabClickEvent.currentTarget;

      clickedTab.classList.add('active');
      tabClickEvent.preventDefault();

      var myContentPanes = document.querySelectorAll('.tab-panel');

      for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove('active');
      }

      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute('href');
      var activePane = document.querySelector(activePaneId);

      activePane.classList.add('active');
    } // End of myTabClicks

    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener('click', myTabClicks);
    }
  });

})(window, document);
