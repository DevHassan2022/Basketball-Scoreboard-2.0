let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let resetBtn =document.getElementById('reset-btn');
let timeOut = document.getElementById('timer');
let winner = document.getElementById('Winner');
let scoreBtn = document.getElementsByClassName('score-btn');



let count = 0;
let count2 = 0;

function showMessage() {
     
   if(count > count2){
       
    winner.textContent = "Home";
    winner.style.color = "lime";
    winner.style.backgroundColor = '#080001';
    
   } else if(count == count2) {
       
    winner.textContent = "Tough Game";
    winner.style.backgroundColor = 'silver';
    
   }
   
    if(count2 > count){
        
    winner.textContent = "Guest";
    winner.style.backgroundColor = '#080001';
    winner.style.color = 'gold';
    
   } else if(count == count2) {
       
    winner.textContent = "Tough Game";
    winner.style.backgroundColor = '#080001';
    winner.style.color = 'silver';
    
   }
}


function addOneHome() {
    
   let result= count +=1;
    homeScore.textContent = result;
    showMessage();
    
}

function addTwoHome() {
    
   let result = count +=2;
   homeScore.textContent = result;
   showMessage();
   
}

function addThreeHome() {
    
   let result = count +=3;
   homeScore.textContent = result;
   showMessage();
   
}

function addOneGuest() {
    
   let result= count2 +=1;
   guestScore.textContent = result;
   showMessage();
   
}

function addTwoGuest() {
    
   let result = count2 +=2;
   guestScore.textContent = result;
   showMessage();
   
}

function addThreeGuest() {
    
   let result = count2 +=3;
   guestScore.textContent = result;
   showMessage();
   
}

function resetGame() {
    
   count = 0;
   count2 = 0;
   homeScore.textContent = count;
   guestScore.textContent = count2;
   location.reload();
   
}

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 9 min.";
    
}, 1000);


setTimeout(function(){
    
    timeOut.textContent = "Time Left : 8 min.";
    
}, 2000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 7 min.";
    
}, 3000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 6 min.";
    
}, 4000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 5 min.";
    
}, 5000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 4 min.";
    
}, 6000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 3 min.";
    
}, 7000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 2 min.";
    
}, 8000);

setTimeout(function(){
    
    timeOut.textContent = "Time Left : 1 min.";
    
}, 9000);


setTimeout(function(){
   
   document.querySelector('#btn-one').disabled= 'true';
   document.querySelector('#btn-two').disabled= 'true';
   document.querySelector('#btn-three').disabled= 'true';
   document.querySelector('#btn-four').disabled= 'true';
   document.querySelector('#btn-five').disabled= 'true';
   document.querySelector('#btn-six').disabled= 'true';
   timeOut.textContent = "Time Left : 0 min.";
   winner.classList.add('winner');
    
    if(count > count2) {
        
    winner.textContent = "🏆Home Won";
    winner.style.color = 'lime';
    winner.style.background= 'url(https://media.giphy.com/media/8AdhxLETq6WhyyyxBk/giphy-downsized-large.gif)';
    
    } else if(count2 > count) {
        
    winner.textContent = "🏆Guest Won";
    winner.style.color =  'gold';
    winner.style.background= 'url(https://media.giphy.com/media/8AdhxLETq6WhyyyxBk/giphy-downsized-large.gif)';
    
    } else {
        
      winner.textContent = 'TIE';
      winner.style.color = 'black';
      winner.style.textShadow = '0px 0px 10px gold';
      winner.style.background= 'url(https://media.giphy.com/media/9D1ef2I9HHM5E21VQx/giphy.gif)';
      winner.style.backgroundSize = 'bottom';
      
}
}, 10000);
