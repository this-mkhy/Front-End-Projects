/*jslint es6:true, plusplus: true, evil:true */
/*global console, alert, prompt*/
 
//Declared variables and get element from HTML
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

var savedCards = [];
const deck = document.getElementById("card-deck");
let counts = document.querySelector(".moves");
let matchedCard = document.getElementsByClassName("match");
let starsList = document.querySelectorAll(".stars li");
const stars = document.querySelectorAll(".fa-star");

let started,moves = 0;

/*
 *  functionality
 */

//to return shuffled cards
function shuffle(array) {
    var curr = array.length,temp,x;
    while (curr !== 0) 
    {
        x=Math.floor(Math.random()*curr);
        curr-=1;
        temp=array[curr];
        
        array[curr] = array[x];
        array[x] = temp;
    }

    return array;
}

document.body.onload=startGame();

//when start new game 
function startGame(){
    started = false;
    savedCards = [];
    cards = shuffle(cards);
    for (var i=0; i<cards.length ;++i)
    {
        deck.innerHTML = "";
        [].forEach.call(cards, function(item){
            deck.appendChild(item);
        });
        cards[i].classList.remove("appear","open","match","disabled");
    }
    
    //reset moves and timer and rating
    moves = 0;
    counts.innerHTML = moves;
    for (var j=0; j<stars.length ;++j)
    {
        stars[j].style.color = "#858ECE";
        stars[j].style.visibility = "visible";
    }
    second = 0;
    minute = 0; 
    hour = 0;
    
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}


//toggle functionality
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("appear");
    this.classList.toggle("disabled");
};

//Function to check if cards are match or not with cards in savedCards list 
function cardOpen() {
    if (!started) 
    { 
        second = 0,minute=0,hour=0;
        startTimer(); 
        started = true; 
    }
    
    //push the current card in the savedCards array then check if the sum=2
    savedCards.push(this);
    var sum = savedCards.length;
    if(sum === 2)
    {
        moveCounter();
        if(savedCards[0].type === savedCards[1].type)
        {
            matched();
        } 
        else
        {
            unmatched();
        }
    }
};


//if the sum=2 then the cards are match, 
//so make matched cards => disabled and remove them
function matched()
{
    savedCards[0].classList.add("match", "disabled");
    savedCards[1].classList.add("match", "disabled");
    savedCards[0].classList.remove("appear", "open", "no-event");
    savedCards[1].classList.remove("appear", "open", "no-event");
    savedCards = [];
}


//if the sum is not equal to 2 then the cards don't match,
//so make them unmatched and repeat the operation again
function unmatched(){
    savedCards[0].classList.add("unmatched");
    savedCards[1].classList.add("unmatched");
    disable();
    
    setTimeout(function(){
        savedCards[0].classList.remove("appear", "open", "no-event","unmatched");
        savedCards[1].classList.remove("appear", "open", "no-event","unmatched");
        enable();
        savedCards = [];
    },1100);
}


//disable cards function: to avoid openning card when we click more 2 cards once 
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable function: for enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i=0; i<matchedCard.length ;++i)
        {
            matchedCard[i].classList.add("disabled");
        }
    });
}


//moveCounter function: to count moves and rates moves
function moveCounter(){
    moves++;
    counts.innerHTML = moves;
    
    //rates
    if (moves>15 && moves<20)
    {
        for(i=0; i<3 ;++i)
        {
            if(i>1)
            {
                stars[i].style.visibility="collapse";
            }
        }
    }
    else if(moves >= 21)
    {
        for(i=0; i<3 ;++i)
        {
            if(i>0)
            {
                stars[i].style.visibility="collapse";
            }
        }
    }
}


//setup time
var second = 0,minute = 0,hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" mins and "+second+"secs";
        second++;
        if(second == 60)
        {
            minute++;
            second = 0;
        }
        if(minute == 60)
        {
            hour++;
            minute = 0;
        }
    },1000);
}

//congratulations form to show message and final result of moves,time and rating
let congratsMessage = document.getElementById("congrats")
function congratulationsForm(){
    if(matchedCard.length == 16)
    {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        congratsMessage.classList.add("appear");
        var starsRating = document.querySelector(".stars").innerHTML;

        document.getElementById("end-move").innerHTML = moves;
        document.getElementById("stars-rating").innerHTML = starsRating;
        document.getElementById("all-time").innerHTML = finalTime;

        closeIcon();
    }
}


//close icon function: to congratulations label 
let closeicon=document.querySelector(".shutdown");
function closeIcon(){
    closeicon.addEventListener("click", function(e){
        congratsMessage.classList.remove("appear");
        startGame();
    });
};

//to play again
function repeatGame(){
    congratsMessage.classList.remove("appear");
    startGame();
}


//to add event listeners
for (var i=0; i<cards.length ;++i)
{
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulationsForm);
};
