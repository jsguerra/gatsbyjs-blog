(function (window, document, undefined) {
  'use strict';

/*
Research this recommended method targeting anchor linkgs instead of the tabs
https://stackoverflow.com/questions/29223502/how-to-get-href-of-anchor-when-the-event-target-is-htmlimageelement/29223563
*/


  // store tabs variable
  //=============================
  var myTabs = document.querySelectorAll('ul.nav-tabs > li'),
      myTabPanels = document.querySelectorAll('.tab-panel'),
      myTabAnchors = document.querySelectorAll('ul.nav-tabs li > a'),
      i = 0;
  
  // My Tab Function
  function myTabClicks(tabClickEvent) {
    tabClickEvent.preventDefault();

    // Count the number of tabs and get the index
    // ==============================================
    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('active');
      myTabPanels[i].classList.remove('active');
    }

    var clickedTab = tabClickEvent.currentTarget;

    clickedTab.classList.add('active');
    
    // if (!clickedTab.classList.contains('active')) {
    //   // clickedTab.classList.add('active');
    //   this.classList.add('active');
    //   console.log(this);
    // } else {
    //   clickedTab.classList.add('active');
    // }

    var anchorReference = tabClickEvent.target,
        activePaneId = anchorReference.getAttribute('href'),
        activePanel = document.querySelector(activePaneId);

    activePanel.classList.add('active');
  } // End of myTabClicks

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks);
  }

})(window, document);
