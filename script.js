 // Challenge 1: Your age in Days.
function ageInDays(){
var birthYear;
birthYear = Number(window.prompt("What year were you born my friend ?"));
var age_in_Days = (2021 -birthYear) * 365;
var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("You are " + age_in_Days + " days old");
h1.setAttribute ("id","age_in_Days");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
document.getElementById("age_in_Days").remove();
}
// Challenge 2: Cat Generator.
var img_ch_2;
var aux=0;
function generateCat(){
    if(aux==0){
    img_ch_2 = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    img_ch_2.src= "https://cdn.pixabay.com/photo/2013/11/22/23/07/kitten-216019_960_720.jpg";
    div.appendChild(img_ch_2);
    aux=1;
    }
}
function deleteCat(){
    img_ch_2.parentNode.removeChild(img_ch_2);
    aux=0;
}
// Challenge 3: Rock,Paper,Scissors.

function rpsGame(yourChoice){
    var humanChoice= yourChoice.id;
    var botChoice = numberToChoice(ranToRpsInt());
    result = decideWinner(humanChoice,botChoice);
    message = finalmessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function ranToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    if (number==0){
        return 'rock';
    }else if (number==1){
        return 'paper';
    }else{
        return 'scissors';
    }
}
function decideWinner(yourChoice,computerChoice){
    var dataBaserps = {
        'rock' :{'scissors' : 1,'rock' : 0.5,'paper': 0},
        'paper' :{'rock' : 1,'paper': 0.5, 'scissors' : 0},
        'scissors':{'paper': 1,"scissors": 0.5,"rock": 0}
    };
    var yourScore = dataBaserps[yourChoice][computerChoice];
    var computerScore = dataBaserps[computerChoice][yourChoice];

    return [yourScore,computerScore];
}
function finalmessage([yourscore,computerscore]){
    console.log(yourscore);
    console.log(computerscore);
      if(yourscore==0){
          return {"message":"You Lose !","color":"red"};
      }else if(computerscore==0){
          return {"message":"You won !","color":"green"};
      }else{
          return {"message":"You tied !","color":"blue"};
       }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,message){
    var imagesDataBase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    };
    //let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var resultDiv = document.createElement('div');
    console.log(humanImageChoice);
    console.log(botImageChoice);
    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(0,255,0)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
   
    resultDiv.innerHTML = "<h1 style= 'color: " + message.color + "'; font-size: 60px; padding: 30px;>" + message.message + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(resultDiv);
    computerDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(255,0,0)'>";
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);
}