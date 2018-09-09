/*!
 * joseguerra-uk
 * Just a personal design for my domain
 * https://joseguerra.uk
 * @author Jose Guerra
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
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

    var anchorReference = tabClickEvent.target,
        activePaneId = anchorReference.getAttribute('href'),
        activePanel = document.querySelector(activePaneId);

    activePanel.classList.add('active');
  } // End of myTabClicks

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks);
  }

})(window, document);
