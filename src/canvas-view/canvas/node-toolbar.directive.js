(function () {
  'use strict';

  angular.module('patternfly.canvas')
    .directive('nodeToolbar', nodeToolbarDirective);

  function nodeToolbarDirective ($document) {
    var directive = {
      restrict: 'E',
      scope: {
        node: '=',
        nodeActions: '=',
        actionHandler: '='
      },
      controller: NodeToolbarController,
      templateUrl: 'canvas-view/canvas/node-toolbar.html',
      controllerAs: 'vm',
      bindToController: true,
    };

    return directive;

    function NodeToolbarController ($scope) {
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
          actionHandler('nodeActionClosed');
        }
      };
    }
  }
})();
