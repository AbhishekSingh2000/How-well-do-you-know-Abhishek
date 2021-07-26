var readlinesync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
var userName = readlinesync.question("Enter your name? \n ");
console.log(chalk.red("Hello " + userName) + "! Welcome to the Game -" + chalk.black.bold.bgWhite("How well do you know \n Abhishek! "));

function check(ques, answer){
  var question= readlinesync.question(ques);
  if (question.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("you are right"));
    score++;
  }
  else{
    console.log(chalk.red("you are wrong"));
  }
  console.log("Your score - "+ score);
  console.log("----------");
};

var questions = [{
  question: "Where does he live? ",
  answer: "New Delhi"
},

{
  question: "How old is he? ",
  answer: "20"
},

{
  question: "Who is his favourite SuperHero? ",
  answer: "Iron Man"
},

{
  question: "What's his favourite movie? \nchoose the correct option \n a. Iron Man \n b. Avengers \n c. Main Hoon Na \n d. none \n  ",
  answer: "d"
}];

for(var i=0; i<questions.length; i++){
  check(questions[i].question, questions[i].answer)
};

var score1={
  name: "Abhishek",
  score: "4"
}

var score2={
  name: "Praduman",
  score: "3"
}
console.log(chalk.rgb(255,131,0)("your Final Score is "+ score + "\n"));
if (score>=3){
console.log(chalk.yellow("Congratulations")+", you have beaten the high score, Text abhishek with a screenshot to update your name in high scores. \n")
console.log("Previous high scores are \n" + "1. name : "+ score1.name +"\n   score "+ score1.score + "\n \n" + "2. name : "+ score2.name +"\n   score "+ score2.score )
}
 