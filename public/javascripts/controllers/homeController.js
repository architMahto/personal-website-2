(function() {
  'use strict';

  angular.module('homeControllers', [])
    .controller('homeController', homeController);

  function homeController() {
    var homeCtrl = this;

    console.log("Included Home Controller");

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
          "Since I switched to Computer Science, I have been involved in various projects for school and online courses. Through those projects and online courses, I have learnt and become proficient in many languages such as C, C++, Java, Javascript, and Python.",
          "However, languages are not everything in programming. I’m currently learning new web frameworks and technologies. <span>My specialities are object-oriented programming, full-stack web development, computer networking, and video technologies.</span>",
          "<span>My personal interest in web development has resulted in work on so many projects and learning as many frameworks along the way.</span> As a popular Pokemon trainer said, 'Gotta catch ‘em all' for Pokemon; my philosophy towards web frameworks is, 'Gotta learn ‘em all'."]
      },
      {
        header: "I'm also a Toastmaster",
        paragraphs: [
          "At the start of 2011, I joined Carleton Toastmasters as I felt that my communication skills were not up to the mark. I was shy and tentative at that time, which made me hesitant about preparing and performing speeches. <span>Once my first speech was delivered, I never looked back with regards to my communication skills.</span>",
          "A year later, I achieved my first distinction at Carleton Toastmasters as a Competent Communicator. A year after that, I got my Advanced Bronze Communicator distinction after delivering ten speeches on Interpersonal Communication and Humorous Speeches (a little similar to standup comedy)."]
      },
      {
        header: "Other factoids",
        paragraphs: [
          "I am also a huge sports fan. I watch soccer, football, hockey, basketball, baseball and my favourite teams are Manchester United FC, Juventus FC, Pittsburgh Steelers, Ottawa Senators, San Antonio Spurs, Toronto Raptors, and the Toronto Blue Jays. I’m involved in many sports blogs and I also play Fantasy Football. You may probably also notice that the colour scheme of my website are based on two of my favourite soccer clubs.",
          "Just because I’m an avid sports watcher, it doesn’t mean that I don’t like being athletic. I like exercising 3-5 times a week to keep my body fit and my mind alert and fresh. I also like playing pickup soccer and hope to join other sports leagues in my spare time."]
      }
    ]
  }

}());
