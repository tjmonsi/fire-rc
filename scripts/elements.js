FIRERC.Elements = (function () {
  'use strict';

  function init() {
    FIRERC.Elements.Template = document.getElementById('nice-app');
    FIRERC.Elements.Loader = document.getElementById('showbox');
    
  }

  return {
    init: init
  };
}());