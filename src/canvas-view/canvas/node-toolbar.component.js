(function () {
  'use strict';

  angular.module('patternfly.canvas')
  .component('nodeToolbar', {
    templateUrl: 'canvas-view/canvas/node-toolbar.html',
    controllerAs: 'vm',
    bindings: {
      node: '=',
      nodeActions: '=',
      actionHandler: '='
    },
    controller: function NodeToolbarController ($scope) {
      var vm = this;
      vm.selectedAction = "none";

      $scope.actionIconClicked = function (action) {
        vm.selectedAction = action;
        if (angular.isFunction(vm.actionHandler)) {
          vm.actionHandler('nodeActionClicked', {'action': action, 'node': vm.node});
        }
      };

      $scope.close = function () {
        vm.selectedAction = 'none';
        if (angular.isFunction(vm.actionHandler)) {
          vm.actionHandler('nodeActionClosed');
        }
      };
    }
  });
})();
