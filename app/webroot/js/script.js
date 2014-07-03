$(function(){

	var x;
	var rojo = [];
	var verde =[];

	var scoreRojo=0;
	var scoreVerde=0;
	var ganador=null;
	var empieza=null;

	setPlayer();

	$('#gato-main .col-md-4').click(function(){
		var col = $(this);
		var id = col.attr("id");

		if(col.hasClass("turn")){
			return false;
		}
		col.addClass("turn");
		x++;
		turnRed(col);
		rojo.push(id[3]);
		if(verify(rojo)){
			scoreRojo++;
		}
		

		setAiTurn();
		setScore();
		
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
		console.log("reset");
		saveGameService();
		$('#gato-main .col-md-4').removeClass("turn red-background green-background");
		rojo=[];
		verde=[];
		setPlayer();
		
	}
	function saveGameService(){
		var request=$.ajax({
			data: {empieza:empieza,ganador:ganador,rojo:rojo.join("-"),verde:verde.join("-")}, 
			type: "GET",
			url: "http://localhost/Gato/pages/api_set_save_game"
		})
	}

	function setScore(){
		console.log("setScore");
		$("#scoreboard .rojo").last().text(scoreRojo+ " ");
		$("#scoreboard .verde").last().text(scoreVerde+ " ");
	}

	function setAiTurn(){
		x++;
		if(verde.length>0){
			var y=verde[verde.length-1];
			if(verde.length==1||true){
				do{
					var num=getAdjacent(y);
					var col= $("#col"+num);
					console.log("#col"+num);
				}while($.inArray(num,rojo)!=-1 || $.inArray(num,verde)!=-1);
			}
		}else{

			do{
				var num= Math.floor(Math.random() * 9) + 1;
				var col= $("#col"+num);
				
			}while($.inArray(num,rojo)!=-1 || $.inArray(num,verde)!=-1);
	
		}

		turnGreen(col);
		var id = col.attr("id");
		verde.push(id[3]);
		if(verify(verde)){
			scoreVerde++;
		}
	}

	function getAdjacent(y){
		
		var rand= Math.floor(Math.random() * 5) + 1;
		console.log('rand',rand);
		console.log('y',y)
		switch(rand){
			case 1:
				var n=y-3;
			break;
			case 2:
				var n=y+3;
			break;
			case 3:
				var n=y+1;
			break;
			case 4:
				var n=y-1;
			break;
			case 5:
				if(y==1||y==3||y==7||y==9){
					var n=5;
				}
				else if(y==5){
					var diagRand= Math.floor(Math.random() * 3) + 0;
					var diagonal=[1,3,7,9];
					var n=diagonal[diagRand];
				}
				else{
					var n=20;
				}
			break;
		}
		console.log('n',n);
		
		if(n>=1&&n<10){
			return n;
		}
		return getAdjacent(y);
	}

	function turnRed(col){
		console.log("turnRed");
		col.addClass("red-background");
		$("#turno-de span").text("Jugador Verde");
	}

	function turnGreen(col){
		console.log("turnGreen");
		col.addClass("green-background");
		$("#turno-de span").text("Jugador Rojo");
	}


	function getRandom(){
		console.log("getRandom");
		return Math.random() >= 0.5;
	}

	function setPlayer(){
		console.log("setPlayer");
		if (getRandom()){
			x=0;
			empieza="rojo";
			$("#turno-de span").text("Jugador Rojo");
		}else{
			x=1;
			empieza="verde";
			$("#turno-de span").text("Jugador Verde");
			setAiTurn();	
			
		}
		
	}

	function setWinner(){
		if(x%2!=0){
			ganador="rojo";
			$.jGrowl("Ganó rojo");
		}

		else{
			ganador="verde";
			$.jGrowl("Ganó verde");
		}
	}

	function verify(arr){
		console.log("verify");
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
		if(arr.length>=6){
			
			console.log("Gato");
			ganador=null;
			$.jGrowl("Gato!!");
			reset();
			return false;
		}
		for (var x=0; x<arr.length; x++) {
			for (var y=0; y<winner.length;y++) {
				if($.inArray(parseInt(arr[x]),winner[y])!=-1){
					score[y]++;
					if(score[y]>=3){
						console.log("You've won byrch");
						setWinner();
						reset();
						return true;
					}
				}
			}
			
		}
		return false;
	}

})