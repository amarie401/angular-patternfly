(function () {
  'use strict';

  angular.module('patternfly.canvas')
  .component('toolboxItems', {
    templateUrl: 'canvas-view/canvas-editor/toolbox-items.html',
    controllerAs: 'vm',
    bindings: {
      items: '=',
      startDragCallback: '=',
      clickCallback: '=',
      searchText: '='
    },
    controller: function toolboxItemsController () {
      var vm = this;

      vm.clickCallbackfmDir = function (item) {
        if (!item.disableInToolbox) {
          vm.clickCallback(item);
        }
      };

      vm.startDragCallbackfmDir = function (event, ui, item) {
        vm.startDragCallback(event, ui, item);
      };
    }
  });
})();
