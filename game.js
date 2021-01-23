var squares = document.getElementsByClassName('sq');
var rgb = document.getElementById('colh1');
var again = document.getElementById('again');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var result = document.getElementById('result');
var circles = 6;
var colors = []; 
var pickedcolor;
var bool = false;
//генерує випадковий колір
function generate_color(){ 
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let res = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')'
	return res;
}
//створює список кольорів, залежно від кількості кружечків
function for_list(){
	var c = [];
	for (var i = 0; i < circles; i++) {
	 	c.push(generate_color());
	}
	return c;
}
//
function new_game(){
	colors = for_list();
	var n = Math.floor(Math.random() * circles);
	pickedcolor = colors[n]; //вибраний колір
	rgb.textContent = pickedcolor;
	if( bool == true){
		result.textContent = '';
		bool = false;
	}
	else{
		result.textContent = 'try again';
	}
	for (var i = 0; i < squares.length; i++) {
		if (i < circles){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}
}



function change_col(but){
	if(but.id == 'easy'){
		easy.style.color = '#b3b3ff';
		hard.style.color = '#000099';
		circles = 3;
	}

	else{
		hard.style.color = '#b3b3ff';
		easy.style.color = '#000099';
		circles = 6;
	}
}

function correct_or_not(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function(){
			if(this.style.backgroundColor === pickedcolor){
				result.textContent = 'correct';
				paint_all()
				bool = true;
			}
			else{
				result.textContent = 'try again';
				new_game()
				bool = false;
			}
		})
	}
}


function paint_all(){
	let body = document.getElementsByTagName('h1')[0];
	body.style.backgroundColor = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedcolor;
	}
}

function start_game(){
	new_game()
	result.textContent = '';
	correct_or_not()
}
start_game()
