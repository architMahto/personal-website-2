(function() {
  'use strict';

  angular.module('personalApp', [])
    .controller('navController', navController);

  function navController() {
    var navCtrl = this;

    console.log("Included Nav Controller");

    navCtrl.links = [
      {
        name: "Home",
        stateRef: "home",
        class: "fa fa-home"
      },
      {
        name: "About",
        stateRef: "about",
        class: "fa fa-user"
      },
      {
        name: "Projects",
        stateRef: "projects",
        class: "fa fa-code"
      },
      {
        name: "Technical Skills",
        stateRef: "technical-skills",
        class: "fa fa-cog"
      },
      {
        name: "Soft Skills",
        stateRef: "soft-skills",
        class: "fa fa-lightbulb-o"
      },
      {
        name: "History",
        stateRef: "history",
        class: "fa fa-history"
      },
      {
        name: "Education",
        stateRef: "education",
        class: "fa fa-university"
      },
      {
        name: "Achievements",
        stateRef: "achievements",
        class: "fa fa-trophy"
      }
    ]
  }
}());
