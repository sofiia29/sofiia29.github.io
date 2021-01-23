var squares = document.getElementsByClassName('sq');
var rgb = document.getElementById('colh1');
var again = document.getElementById('again');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var result = document.getElementById('result');
var circles = 6;
var colors = []; 
var pickedcolor;
//генерує випадковий колір
function generate_color(){ 
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let res = 'rgb' + '(' + r + ',' + g + ',' + b + ')'
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
	result.textContent = '';
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
new_game()

function easy_or_hard(){
	if(easy.style.color == '#b3b3ff'){
		circles = 3;
	}
	else{
		circles = 6;
	}
}

function change_col(but){
	if(but.id == easy){
		easy.style.color == '#b3b3ff';
	}
	else{
		hard.style.color == '#b3b3ff';
	}
}