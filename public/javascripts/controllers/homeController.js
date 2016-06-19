(function() {
  'use strict';

  angular.module('homeControllers', [])
    .controller('homeController', homeController);

  function homeController() {
    var homeCtrl = this;

    homeCtrl.imageLinks = [
      "/images/background-image-2.jpg",
      "/images/background-image-3.jpg",
      "/images/background-image-4.jpg"
    ]

    homeCtrl.content = [
      {
        header: "What inspired me to write code and go into CS?",
        paragraphs: ["It all started in my first course in programming for Electrical Engineering. Having never programmed before, I didn’t do too well in that course and it made me want to get better at programming. As I started writing more code, <span>I figured I liked programming more than being in engineering and I made the switch to Computer Science.</span>"]
      },
      {
        header: "What have I been up to in code and tech?",
        paragraphs: [
          "Since I switched to Computer Science, I have been involved in various projects for school and online courses. Through those projects, online courses, and an intensive 10-week bootcamp, I have learnt and became proficient in many languages such as C, C++, Java, Javascript, and Python. On the side, I’m currently learning new web frameworks and technologies to <span>expand my knowledge of web development principles and computer science fundamentals</span>."]
      },
      {
        header: "I'm also a Toastmaster",
        paragraphs: [
          "At the start of 2011, I joined Carleton Toastmasters as I felt that my communication skills were not up to the mark. I was shy and tentative at that time, which made me hesitant about preparing and performing speeches. Once my first speech was delivered, <span>I never looked back with regards to my communication skills and achieved more than I could have imagined.</span>"]
      }
    ]
  }

}());
