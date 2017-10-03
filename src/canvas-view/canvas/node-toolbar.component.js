(function () {
  'use strict';

  angular.module('patternfly.canvas')
  .component('nodeToolbar', {
    templateUrl: 'canvas-view/canvas/node-toolbar.html',
    bindings: {
      node: '=',
      nodeActions: '=',
      nodeClickHandler: '=',
      nodeCloseHandler: '='
    },
    controller: function NodeToolbarController () {
      var ctrl = this;
      ctrl.selectedAction = "none";

      ctrl.actionIconClicked = function (action) {
        ctrl.selectedAction = action;
        if (angular.isFunction(ctrl.nodeClickHandler)) {
          ctrl.nodeClickHandler({'action': action, 'node': ctrl.node});
        }
      };

      ctrl.close = function () {
        ctrl.selectedAction = 'none';
        if (angular.isFunction(ctrl.nodeCloseHandler)) {
          ctrl.nodeCloseHandler();
        }
      };
    }
  });
})();
