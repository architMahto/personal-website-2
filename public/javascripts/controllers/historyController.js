(function() {
  'use strict';

  angular.module('historyControllers', [])
    .controller('historyController', historyController);

  function historyController() {
    var historyCtrl = this;

    historyCtrl.workHistoryArea = true;

    historyCtrl.workHistory = [
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Teaching Assistant',
        organization : "RefactorU",
        timeframe: 'May 2016 - present',
        content: 'Some awesome content.'
      },
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Sales Assistant',
        organization : "Artiv Controls Ltd.",
        timeframe: 'May 2010 - August 2010',
        content: 'More awesome content.'
      },
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Technical Support',
        organization : "Tempotech Controls Inc.",
        timeframe: 'July 2008 - August 2008',
        content: 'More awesome content.'
      }
    ];

    historyCtrl.voluteeringHistory = [
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Secretary',
        organization : "Carelton Toastmasters",
        timeframe: 'July 2015 - January 2016',
        content: 'Some awesome content.'
      },
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Tutor',
        organization : "Carelton University",
        timeframe: 'September 2014 - April 2015',
        content: 'More awesome content.'
      },
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Sergeant-At-Arms',
        organization : "Carelton Toastmasters",
        timeframe: 'July 2012 - July 2013',
        content: 'More awesome content.'
      }
    ];

    historyCtrl.switchTabs = function () {
      historyCtrl.workHistoryArea = !historyCtrl.workHistoryArea;
    }
  }

}());
