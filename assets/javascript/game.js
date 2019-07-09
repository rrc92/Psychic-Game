
	var guesses = 9;
	document.querySelector('p').innerText = guesses;

	function updateguessnum(){
		if (guesses == 0){
			guesses=9;
			document.querySelector('p').innerText = guesses;
		}else{
			guesses = guesses - 1; 
			document.querySelector('p').innerText = guesses;
		}
	}

    document.onkeypress = updateguessnum;

    var strToGuess = "apple";
	var guesses = [];

	function printWord(){
		// alert(event.key);
		guesses.push(event.key);

		var str = "";

		for (var i=0; i<strToGuess.length; i++){
			if (guesses.includes(strToGuess[i])){
				str += strToGuess[i];
					//alternativelty
						// str = str + strToGuess[i];
			}else {
				str += "_";
			}
		}
		
		document.querySelector('p1').innerText = str;
	}

	document.onkeypress = printWord; 
    
    