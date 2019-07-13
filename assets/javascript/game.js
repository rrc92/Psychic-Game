
var computerguess = ['1','2','3','4','5','6','7','8','9']
var win = 0;
var loses = 0;
var guessesleft=5;
var letteruser = [];

var compchoice = computerguess[Math.floor(Math.random()*computerguess.length)];

function guessesleftcounter (){
    document.querySelector("#gu").innerHTML="Guesses Left:"+guessesleft;

}

guessesleftcounter();

function letterpicked (){
    document.querySelector("#letter").innerHTML='Guess so far:'+letteruser.join('');
}


var restart = function(){
    guessesleft=5;

    letteruser=[];
    var compchoice = computerguess[Math.floor(Math.random()*computerguess.length)];
}

document.onkeyup= function(event){
    
    var userguess = String.fromCharCode(event.keyCode);
    guessesleft--;
    letteruser.push(userguess);
    letterpicked();
    guessesleftcounter();
    

    if (userguess==compchoice){
        win++;
        document.querySelector('#wins').innerHTML="Wins:"+win;
        alert('You Win!');
        restart();


    }else if(guessesleft==0){
        loses++;
        document.querySelector('#lose').innerHTML="Loses:"+loses;
        alert('You Lose');
        restart();
    }
};





//Background by Harry Tasci


var c = document.getElementById("c"); 
 var ctx = c.getContext("2d"); 
  
  
 c.height = window.innerHeight; 
 c.width = window.innerWidth; 
  
 
 var numbers = "012345678910"; 
  
 numbers = numbers.split(""); 
  
 var font_size = 18; 
 var columns = c.width/font_size;  
  
 var drops = []; 
  
  
 for(var x = 0; x < columns; x++) 
 	drops[x] = 1;  
  
  
 function draw() 
 { 
 	  
 	 
 	ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
 	ctx.fillRect(0, 0, c.width, c.height); 
 	 
 	ctx.fillStyle = "#0F0";  
 	ctx.font = font_size + "px arial"; 
 	 
 	for(var i = 0; i < drops.length; i++) 
 	{ 
 		 
 		var text = numbers[Math.floor(Math.random()*numbers.length)]; 
 		 
 		ctx.fillText(text, i*font_size, drops[i]*font_size); 
 		 
 	 
 		if(drops[i]*font_size > c.height && Math.random() > 0.975) 
 			drops[i] = 0; 
 		 
 		 
 		drops[i]++; 
 	} 
 } 
  
 setInterval(draw, 50); 



































// ar guesses = 9;

// document.querySelector('p').innerText = guesses;

// function updateguessnum() {
//     if (guesses == 0) {
//         guesses = 9;
//         document.querySelector('p').innerText = guesses;
//     } else {
//         guesses = guesses - 1;
//         document.querySelector('p').innerText = guesses;
//     }
// }

// document.onkeypress = updateguessnum;

// var arrToGuess = ["r", "i", "c", "k", "y"];
// var inputletter = [];
// function printWord() {
//     inputletter.push(event.key);

//     var str = "";

//     for (var i = 0; i < arrToGuess.length; i++) {
//         if (inputletter.includes(arrToGuess[i])) {

//             str += arrToGuess[i];
//             updateguessnum();
           
//         } else {
//             str += "_";
//         }
//     }

//     document.querySelector('p1').innerText = str;
// }

// document.onkeypress = printWord;

//     var strToGuess = "apple";
// 	var guesses = [];

// 	function printWord(){
// 		// alert(event.key);
// 		guesses.push(event.key);

// 		var str = "";

// 		for (var i=0; i<strToGuess.length; i++){
// 			if (guesses.includes(strToGuess[i])){
// 				str += strToGuess[i];
// 					//alternativelty
// 						// str = str + strToGuess[i];
// 			}else {
// 				str += "_";
// 			}
// 		}

// 		document.querySelector('p1').innerText = str;
// 	}

//     document.onkeypress = printWord; 

//     var letters = ["r","i","c","a","r","d","o"];

//     //example from 6.27 ex5
//     var places = [];
// for (var i=0; i<5; i=i+1){
//     var newplace= prompt('give me a place you have visited');
//     places.push(newplace);
// }
// console.log(places);

// //choose random element from an array
// var colleges = ["ucb", "ucla", "ucsb", "uci"];

// 	//this gives you a random number between 0 and 1, including 0, but not 1
// 	//Math has to be capitalized
// 	console.log(Math.random());

// 	//get me a random number between 0 and 4, including 0, but not 4
// 	console.log(Math.random()*colleges.length);

// 	//0,1,2 or 3
// 	var ranIndex = Math.floor(Math.random()*colleges.length);

// 	//this gives us our random college
//     document.write(colleges[ranIndex]);

// //ROCK PAPER SCISSORS GAME 
// var options=['r','p','s'];

// var play = true;

// while (play){

// var uO = prompt('enter r, p or s.');

// if (!options.includes(uO)){
//     alert('You did not enter a valid option')
// }
// var ranindex = Math.floor(Math.random()*options.length);
// var cO = options[ranindex];//computers ranmdom choice
// if (cO==uO){
//     alert('you tied');
// }else if((uO == "r" && cO == "s") || (uo=="s" && co=="p")|| (uO=="p" && cO=="r")){
//     alert('you won');
// }
//     else{
//         alert('you lost');
//     }

//  alert(`you chose ${uO} and the computer chose ${cO}`);

// 		play = confirm("do you want to play");

// }

// activity 1 on 6.29
// function greetings(){
//     console.log('hello');
//     console.log('bye');
//     console.log('farewell');
// }

// function write(){
//     document.write('bye<br>');
// }

// activity 2 on 6.29
    // function sum(a,b){
    //     console.log(a+b);
    // }
    // sum(5,5);

    //activity 3 on 6.29
    //     function sum(a,b){
    //     console.log(a*b);
    // }
    // sum(5,5);

 //activity 4 on 6.29
    // function verify(a,b){
    //     console.log(a==b);
    
    // }
    // verify(4,7);//false
    // verify(2,2);//true

    //act 5 on 6.29
    // function biggernum(a){
    //     console.log(a>3);
    // }
    // biggernum (2);//false
    // biggernum(5);//true

     // example 1 6.29

    // function subtract (a,b){
    //     return a-b;
    // }
    // var diff= subtract(15,7);

    // console.log(diff);

    // function add(a,b){
    //     return a+b;
    // }
    // var sum= add(diff,4);

    // console.log(sum);

    //     activity 2 on 6.29
    // function equal(a,b){
    //     return a==b;
    // }
    // var val = equal(5,8);
    // console.log(val);
    // var valtwo = equal(5,5);
    // console.log(valtwo);
    //     activity 3 on 6.29
    // function greater(a){
    //     return a>3;
    // }
    // var isit = greater(5);
    // console.log(isit);

    // var itsnot = greater(2);
    // console.log(itsnot);