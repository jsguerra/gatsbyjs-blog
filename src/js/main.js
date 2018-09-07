(function (window, document, undefined) {
  'use strict';

  // store tabs variable
  //=============================
  var myTabs = document.querySelectorAll('ul.nav-tabs > li'),
      myContentPanes = document.querySelectorAll('.tab-panel'),
      i = 0;
  
  // My Tab Function
  function myTabClicks(tabClickEvent) {
    tabClickEvent.preventDefault();

    // Count the number of tabs and get the index
    // ==============================================
    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('active');
      myContentPanes[i].classList.remove('active');
    }

    var clickedTab = tabClickEvent.currentTarget;
    
    clickedTab.classList.add('active');

    var anchorReference = tabClickEvent.target,
        activePaneId = anchorReference.getAttribute('href'),
        activePane = document.querySelector(activePaneId);

    activePane.classList.add('active');
  } // End of myTabClicks

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks);
  }

})(window, document);
