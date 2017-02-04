/**
 * @ngdoc function
 * @name superProductivity.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the superProductivity
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .controller('WelcomeCtrl', WelcomeCtrl);

  /* @ngInject */
  function WelcomeCtrl($mdDialog, $localStorage, IS_ELECTRON) {
    let vm = this;

    vm.IS_ELECTRON = IS_ELECTRON;

    vm.isShowDialogAgain = $localStorage.isShowWelcomeDialog;

    vm.hideDialogChange = (isHide) => {
      $localStorage.isShowWelcomeDialog = !isHide;
    };

    vm.cancel = () => {
      $mdDialog.cancel();
    };
  }
})();
