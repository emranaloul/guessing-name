'use strict'

let userName = prompt('What is your name?')
alert('Our Greeting, ' + userName)

let myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no');

while (myFavTeam.toLowerCase() != 'yes' && myFavTeam.toLowerCase() != 'no') {
    myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no');
}
if(myFavTeam.toLowerCase() == 'yes'){
    alert('yes, you are right!!');
} 
else if(myFavTeam.toLowerCase() == 'no'){

    alert('WRONG!! barcelona is my favourite team');
} 
console.log('Do you think Barcelona is my favourite team? ' + myFavTeam);

let myFavPlayer = prompt('Do you think messi is my favourite player?', 'yes or no');

while (myFavPlayer.toLowerCase() != 'yes' && myFavPlayer.toLowerCase() != 'no') {
    myFavPlayer = prompt('Do you think messi is my favourite player?', 'yes or no');
}
if(myFavPlayer.toLowerCase() == 'yes'){
    alert('yes, you are definitely right!!');
} 
else if(myFavPlayer.toLowerCase() == 'no'){

    alert('WRONG!! messi is my favourite player');
} 
console.log('Do you think messi is my favourite player? ' + myFavPlayer);

let myFavLeague = prompt('Do you think I like premiere leage over la liga?', 'yes or no');

while (myFavLeague.toLowerCase() != 'yes' && myFavLeague.toLowerCase() != 'no') {
    myFavLeague = prompt('Do you think I like premiere leage over la liga?', 'yes or no');
}
if(myFavLeague.toLowerCase() == 'yes'){
    alert('No, I`m not!!');
} 
else if(myFavLeague.toLowerCase() == 'no'){

    alert('you are right');
} 
console.log('Do you think I like premiere leage over la liga? ' + myFavLeague);

let footballPlaying = prompt('Do you think I`m a good football player?', 'yes or no');

while (footballPlaying.toLowerCase() != 'yes' && footballPlaying.toLowerCase() != 'no') {
    footballPlaying = prompt('Do you think I`m a good football player?', 'yes or no');
}
if(footballPlaying.toLowerCase() == 'yes'){
    alert('No, I`m not!!');
} 
else if(footballPlaying.toLowerCase() == 'no'){

    alert('unfortunately, you are right');
} 
console.log('Do you think I`m a good football player? ' + footballPlaying);

let historyPlayer = prompt('I believe that messi is the best player in the history, Am I wrong?', 'yes or no');

while (historyPlayer.toLowerCase() != 'yes' && historyPlayer.toLowerCase() != 'no') {
    myFavTeam = prompt('I believe that messi is the best player in the history, Am I wrong?', 'yes or no');
}
if(historyPlayer.toLowerCase() == 'yes'){
    alert('NO, You are Wrong!!');
} 
else if(historyPlayer.toLowerCase() == 'no'){

    alert('gladly, we have the same belief');
} 
console.log('I believe that messi is the best player in the history, Am I wrong? ' + historyPlayer);

alert('welcome ' + userName + ' to our website');

