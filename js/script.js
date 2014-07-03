$(function(){

	var x=1;
	var rojo = [];
	var verde =[];

	var scoreRojo=0;
	var scoreVerde=0;

	$('#gato-main .col-md-4').click(function(){
		var col = $(this);
		var id = col.attr("id");

		if(col.hasClass("turn")){
			return false;
		}
		col.addClass("turn");

		if(x%2==0){
			turnRed(col);
			rojo.push(id[3]);
			if(verify(rojo)){
				scoreRojo++;
			}
		}
		else{
			turnGreen(col);
			verde.push(id[3]);
			if(verify(verde)){
				scoreVerde++;
			}
		}
		setScore();
		x++;
		console.log(x);
	})


	$('#gato-main .col-md-4').mouseover(function(){
		var col = $(this);

		if(col.hasClass("turn")){
			return false;
		}
		if(x%2==0){
			col.addClass("hover-red-col");
		}
		else{
			col.addClass("hover-green-col")
		}

	})

	$('#gato-main .col-md-4').mouseout(function(){
		var col = $(this);
		col.removeClass("hover-red-col");
		col.removeClass("hover-green-col");
	})

	function reset(){
		$('#gato-main .col-md-4').removeClass("turn red-background green-background");
		rojo=[];
		verde=[];
		x=0;
		
	}


	function setScore(){
		$("#scoreboard .rojo").last().text(scoreRojo+ " ");
		$("#scoreboard .verde").last().text(scoreVerde+ " ");
	}





	function turnRed(col){
		col.addClass("red-background");
		$("#turno-de span").text("Jugador Verde");
	}

	function turnGreen(col){
		col.addClass("green-background");
		$("#turno-de span").text("Jugador Rojo");
	}

	function verify(arr){
		var winner=[
			[1,2,3],
			[1,4,7],
			[1,5,9],
			[4,5,6],
			[2,5,8],
			[3,6,9],
			[3,5,7],
			[7,8,9]
		];
		var score=[0,0,0,0,0,0,0,0];
		if(arr.length>=5){
			
			console.log("Gato");
			alert("Gato encerrado!");
			reset();
			return false;
		}
		for (var x=0; x<arr.length; x++) {
			for (var y=0; y<winner.length;y++) {
				// console.log("-----------------------");
				// console.log("arr",arr);
				// console.log(winner[y]);console.log("score",score);
				// console.log(arr;[x]+winner[y]);
				// console.log("bool",$.inArray(parseInt(arr[x]),winner[y]));
				// console.log("-----------------------")
				if($.inArray(parseInt(arr[x]),winner[y])!=-1){
					score[y]++;
					if(score[y]>=3){
						console.log("You've won byrch");
						alert("Juego terminado");
						reset();
						return true;
					}
				}
			}
			
		}
		return false;
	}

})