
var guesses = 9;
document.querySelector('p').innerText = guesses;

function updateguessnum() {
    if (guesses == 0) {
        guesses = 9;
        document.querySelector('p').innerText = guesses;
    } else {
        guesses = guesses - 1;
        document.querySelector('p').innerText = guesses;
    }
}

document.onkeypress = updateguessnum;

var arrToGuess = ["r", "i", "c", "k", "y"];
var inputletter = [];
function printWord() {
    inputletter.push(event.key);

    var str = "";

    for (var i = 0; i < arrToGuess.length; i++) {
        if (inputletter.includes(arrToGuess[i])) {
            str += arrToGuess[i];
            //alternativelty
            // str = str + strToGuess[i];
        } else {
            str += "_";
        }
    }

    document.querySelector('p1').innerText = str;
}

document.onkeypress = printWord;

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


