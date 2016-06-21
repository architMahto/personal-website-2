(function() {
  'use strict';

  angular.module('skillsControllers', [])
    .controller('skillsController', skillsController);

  function skillsController() {
    var skillsCtrl = this;

    skillsCtrl.techSkillsArea = true;
    skillsCtrl.softSkillsArea = false;

    skillsCtrl.techSkills = [
      {
        category  : "Programming Languages",
        techs     : [ {name: "C", rating: "60%"},
                      {name: "C++", rating: "70%"},
                      {name: "Java", rating: "90%"},
                      {name: "JavaScript", rating: "100%"},
                      {name: "Prolog", rating: "40%"},
                      {name: "Python", rating: "90%"},
                      {name: "Ruby", rating: "90%"},
                      {name: "SQL", rating: "90%"},
                      {name: "Scheme", rating: "50%"},
                      {name: "UML", rating: "40%"}
                    ]
      },
      {
        category  : "Markup Languages",
        techs     : [
                      {name: "HTML", rating: "100%"},
                      {name: "LaTeX", rating: "80%"},
                      {name: "Markdown", rating: "100%"}
                    ]
      },
      {
        category  : "Style Sheet Languages",
        techs     : [
                      {name: "CSS", rating: "80%"}
                    ]
      },
      {
        category  : "Source Code Management Systems",
        techs     : [
                      {name: "Git", rating: "90%"},
                      {name: "SVN", rating: "60%"}
                    ]
      },
      {
        category  : "Database Management Systems",
        techs     : [
                      {name: "Firebase", rating: "80%"},
                      {name: "MongoDB", rating: "90%"},
                      {name: "MySQL", rating: "70%"}
                    ]
      },
      {
        category  : "Operating Systems",
        techs     : [
                      {name: "Android OS", rating: "30%"},
                      {name: "Linux/Unix", rating: "80%"},
                      {name: "Microsoft Windows", rating: "70%"},
                      {name: "Mac OSX", rating: "80%"}
                    ]
      },
      {
        category  : "Software",
        techs     : [
                      {name: "Eclipse", rating: "80%"},
                      {name: "Microsoft Visual Studio", rating: "50%"},
                      {name: "Qt Creator", rating: "10%"},
                      {name: "XCode", rating: "10%"}
                    ]
      },
      {
        category  : "Text Editors",
        techs     : [
                      {name: "Atom", rating: "100%"},
                      {name: "Brackets", rating: "100%"},
                      {name: "Emacs", rating: "80%"},
                      {name: "Geany", rating: "30%"},
                      {name: "Notepad++", rating: "40%"},
                      {name: "Sublime Text", rating: "50%"},
                      {name: "Vim", rating: "80%"}
                    ]
      },
      {
        category  : "JavaScript Libraries",
        techs     : [
                      {name: "AngularJS", rating: "80%"},
                      {name: "Backbone.js", rating: "60%"},
                      {name: "Express.js", rating: "80%"},
                      {name: "JQuery", rating: "70%"},
                      {name: "Node.js", rating: "80%"},
                      {name: "Videogular", rating: "80%"}
                    ]
      },
      {
        category  : "Web Frameworks",
        techs     : [
                      {name: "Bootstrap", rating: "70%"},
                      {name: "Materialize", rating: "70%"},
                      {name: "Spring", rating: "20%"}
                    ]
      },
      {
        category  : "Testing Frameworks",
        techs     : [
                      {name: "Cucumber", rating: "30%"},
                      {name: "JUnit", rating: "90%"},
                      {name: "Jasmine", rating: "10%"},
                      {name: "Selenium", rating: "30%"}
                    ]
      },
      {
        category  : "Programming Paradigms",
        techs     : [
                      {name: "Functional", rating: "60%"},
                      {name: "Imperative", rating: "30%"},
                      {name: "Object-Oriented", rating: "90%"},
                      {name: "Procedural", rating: "30%"}
                    ]
      },
      {
        category  : "Software Development Processes",
        techs     : [
                      {name: "Agile", rating: "70%"},
                      {name: "Behavior-Driven-Development", rating: "40%"},
                      {name: "Scrum", rating: "70%"},
                      {name: "Test-Driven-Development", rating: "90%"}
                    ]
      }
    ]

    skillsCtrl.softSkills = [
        {
          category : "Communication Skills",
          types    : [
                      {name: "Documentation", rating: "70%"},
                      {name: "Humorously Speaking Skills", rating: "80%"},
                      {name: "Interpersonal Communication", rating: "60%"},
                      {name: "Networking", rating: "50%"},
                      {name: "Storytelling", rating: "50%"},
                      {name: "Toastmaster", rating: "70%"}
                    ]
        },
        {
          category : "Analytical Skills",
          types    : [
                      {name: "Debugging", rating: "80%"},
                      {name: "Problem Solving", rating: "80%"}
                    ]
        },
        {
          category : "Leadership Skills",
          types    : [
                      {name: "Mentoring", rating: "85%"}
                     ]
        },
        {
          category : "Languages",
          types    : [
                      {name: "English", rating: "100%"},
                      {name: "French", rating: "90%"},
                      {name: "Hindi", rating: "70%"}
                     ]
        }
    ]

    skillsCtrl.showTechSkills = function() {
      skillsCtrl.techSkillsArea = true;
      skillsCtrl.softSkillsArea = false;
    }

    skillsCtrl.showSoftSkills = function() {
      skillsCtrl.techSkillsArea = false;
      skillsCtrl.softSkillsArea = true;
    }
  }
}());
