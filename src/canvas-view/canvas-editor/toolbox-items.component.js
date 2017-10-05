(function () {
  'use strict';

  angular.module('patternfly.canvas')
  .component('toolboxItems', {
    templateUrl: 'canvas-view/canvas-editor/toolbox-items.html',
    bindings: {
      items: '=',
      startDragCallback: '=',
      clickCallback: '=',
      searchText: '='
    },
    controller: function toolboxItemsController () {
      var ctrl = this;

      ctrl.clickCallbackfmDir = function (item) {
        if (!item.disableInToolbox) {
          ctrl.clickCallback(item);
        }
      };

      ctrl.startDragCallbackfmDir = function (event, ui, item) {
        ctrl.startDragCallback(event, ui, item);
      };
    }
  });
})();
