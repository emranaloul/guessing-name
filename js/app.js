'use strict'
let score = 0;
let userName = prompt('What is your name?');
const user  = function (userName){

alert('Our Greeting, ' + userName);
}
user(userName);

let myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no');

const question1 = function (myFavTeam){

    myFavTeam 

while (myFavTeam.toLowerCase() != 'yes' && myFavTeam.toLowerCase() != 'no') {
    myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no');
}
if(myFavTeam.toLowerCase() == 'yes'){
    alert('yes, you are right!!');
    score++;
} 
else if(myFavTeam.toLowerCase() == 'no'){

    alert('WRONG!! barcelona is my favourite team');
} 
console.log('Do you think Barcelona is my favourite team? ' + myFavTeam);
}

question1(myFavTeam);


let myFavPlayer = prompt('Do you think messi is my favourite player?', 'yes or no');

const question2 = function (myFavPlayer){

    myFavPlayer

while (myFavPlayer.toLowerCase() != 'yes' && myFavPlayer.toLowerCase() != 'no') {
    myFavPlayer = prompt('Do you think messi is my favourite player?', 'yes or no');
}
if(myFavPlayer.toLowerCase() == 'yes'){
    alert('yes, you are definitely right!!');
    score++;
} 
else if(myFavPlayer.toLowerCase() == 'no'){

    alert('WRONG!! messi is my favourite player');
} 
console.log('Do you think messi is my favourite player? ' + myFavPlayer);
}
question2(myFavPlayer);

let myFavLeague = prompt('Do you think I like premiere leage over la liga?', 'yes or no');

const question3 = function (myFavLeague){
    myFavLeague

while (myFavLeague.toLowerCase() != 'yes' && myFavLeague.toLowerCase() != 'no') {
    myFavLeague = prompt('Do you think I like premiere leage over la liga?', 'yes or no');
}
if(myFavLeague.toLowerCase() == 'yes'){
    alert('No, I`m not!!');
} 
else if(myFavLeague.toLowerCase() == 'no'){

    alert('you are right');
    score++;
} 
console.log('Do you think I like premiere leage over la liga? ' + myFavLeague);
}
question3(myFavLeague);

let footballPlaying = prompt('Do you think I`m a good football player?', 'yes or no');

const question4 = function (footballPlaying){
    footballPlaying

while (footballPlaying.toLowerCase() != 'yes' && footballPlaying.toLowerCase() != 'no') {
    footballPlaying = prompt('Do you think I`m a good football player?', 'yes or no');
}
if(footballPlaying.toLowerCase() == 'yes'){
    alert('No, I`m not!!');
} 
else if(footballPlaying.toLowerCase() == 'no'){

    alert('unfortunately, you are right');
    score++;
} 
console.log('Do you think I`m a good football player? ' + footballPlaying);
}
question4(footballPlaying);

let historyPlayer = prompt('I believe that messi is the best player in the history, Am I wrong?', 'yes or no');

const question5 = function (historyPlayer){

    historyPlayer

while (historyPlayer.toLowerCase() != 'yes' && historyPlayer.toLowerCase() != 'no') {
    myFavTeam = prompt('I believe that messi is the best player in the history, Am I wrong?', 'yes or no');
}
if(historyPlayer.toLowerCase() == 'yes'){
    alert('NO, You are Wrong!!');
} 
else if(historyPlayer.toLowerCase() == 'no'){

    alert('gladly, we have the same belief');
    score++;
} 
console.log('I believe that messi is the best player in the history, Am I wrong? ' + historyPlayer);
}

question5(historyPlayer);

alert('welcome ' + userName + ' to our website');


for ( let i=0 ; i <= 3 ; i++){

let myAgeQus = prompt('How old am I?');
let myAge = 28;

if( myAge == myAgeQus ){
    alert('Correct');
    score++;
    break;
}
else if ( myAgeQus > myAge ){
    alert('you are to high, try again..')
   
} else if( myAgeQus < myAge ) {
    alert('you are to low, try again..') 
}
}

alert('I am 28');

let myFavPl = ['messi', 'iniesta', 'xavi', 'rivaldo', 'ronaldinho', 'puyol', 'alves', 'pirlo', 'zidane','henry'];
console.log(myFavPl);

for( let i = 0 ; i < 6 ; i++){

    alert('Guess by picking from the following list: ' + myFavPl);

    let favPl = prompt('who is my  first favourite player?').toLowerCase();
        
    if(favPl == myFavPl[9]){
        alert('Correct')
        score++;
        break;
    } else{
        alert('wrong... try again')
    }
    
}

alert('your score is ' + score +' of 7')



