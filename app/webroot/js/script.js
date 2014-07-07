$(function(){
	//Farid hajnal callejas
	//omar gonzález
	var x;
	var rojo = [];
	var verde =[];
	var scoreRojo=0;
	var scoreVerde=0;
	var ganador=null;
	var empieza=null;
	allGamesService();
	setPlayer();

	$('#gato-main .col-md-4').click(function(){ //acción que ocurre cada vez que se presiona un espacio
		console.log("click");
		var col = $(this);
		var id = col.attr("id");

		if(col.hasClass("turn")){
			return false;
		}
		col.addClass("turn");
		x++;
		turnRed(col);
		rojo.push(id[3]);
		if(verify(rojo)){ //rojo es el color del usuario
			scoreRojo++;
			setScore();
			return false;
		}
		

		setAiTurn();
		setScore();
		databaseConsultService();
		console.log("contador",x);
	})



	$('#gato-main .col-md-4').mouseover(function(){ //mouse pasando por el bloque, indica cambio de color dependiendo del contador
		console.log("over");
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

	$('#gato-main .col-md-4').mouseout(function(){ //elimina el color cuando el mouse queda fuera del área
		var col = $(this);
		col.removeClass("hover-red-col");
		col.removeClass("hover-green-col");
	})

	function reset(){
		console.log("reset");
		saveGameService(); //envío de la información a la tabla en la base de datos
		$('#gato-main .col-md-4').removeClass("turn red-background green-background"); //todos los espacios en blanco de nuevo
		rojo=[];
		verde=[];//registro de movimiento
		empieza=null;
		setPlayer(); //jugador que inicia
		allGamesService();
	}
	function saveGameService(){
		var request=$.ajax({
			data: {empieza:empieza,ganador:ganador,rojo:rojo.join("-"),verde:verde.join("-")}, //se utilizan delimitantes
			type: "GET",
			url: "http://localhost/Gato/pages/api_set_save_game", //regreso tipo json o variables sencillas
			success: function(data){
				lastGamePlayedService(data);
			}
		})
	}

	function lastGamePlayedService(id){
		var request=$.ajax({
			type: "GET",
			url: "http://localhost/Gato/pages/ajax_last_game_played/"+id,
			success: function(data){
				$("#last-game").html(data);
			}
		})
	}

	function allGamesService(){
		var request=$.ajax({
			type: "GET",
			url: "http://localhost/Gato/pages/ajax_all_games",
			success: function(data){
				$("#all-games").html(data);
			}
		})
	}

	function databaseConsultService(){
		var request=$.ajax({
			type: "GET",
			data: {empieza:empieza,rojo:rojo.join("-"),verde:verde.join("-")}, //se utilizan delimitantes
			url: "http://localhost/Gato/pages/api_database_consult",
			success: function(data){
				$("#consult-data").html(data);
			}
		})

	}

	function setScore(){
		console.log("setScore");
		$("#scoreboard .rojo").last().text(scoreRojo+ " ");
		$("#scoreboard .verde").last().text(scoreVerde+ " ");
	}

	function setAiTurn(){//turno de la máquina
		console.log("setAiTurn");
		x++;
		if(verde.length>0){
			var y=verde[verde.length-1];
			if(verde.length==1){//segundo tiro
				do{
					var num=getAdjacent(y);
					var col= $("#col"+num);
					console.log("#col"+num);
				}while($.inArray(num+"",rojo.concat(verde))!=-1)
			}
			else if(verde.length>=2){
				console.log("third shot");
				do{
				var num= Math.floor(Math.random() * 9) + 1;
				console.log('rand',num)
				var col= $("#col"+num);
				console.log("#col"+num);

			}while($.inArray(num+"",rojo.concat(verde))!=-1)
	
			}
		}else{
			console.log("First AI shot");
			do{
				var num= Math.floor(Math.random() * 9) + 1;
				console.log('rand',num)
				var col= $("#col"+num);
				console.log("#col"+num);

			}while($.inArray(num+"",rojo.concat(verde))!=-1)
	
		}

		turnGreen(col);//asignando el color del computador
		var id = col.attr("id");
		verde.push(id[3]);//ingresándolo a sus tiros
		if(verify(verde)){ //verificando si ha ganado
			scoreVerde++;
		}
		console.log("----------------------------------------------------------------------")
	}

	function getAdjacent(y){
		console.log("getAdjacent");
		var rand= Math.floor(Math.random() * 5) + 1;
		console.log('rand',rand);//generando un valor aleatorio, dependiendo de este, se desplazará a otro bloque
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
		console.log("----------------------------------------------------------------------")
		}
		return getAdjacent(y);
	}


	function turnRed(col){ //volver un bloque de color rojo
		console.log("turnRed");
		col.addClass("red-background");
		$("#turno-de span").text("Jugador Verde");
	}

	function turnGreen(col){ //volverlo de color verde
		console.log("turnGreen");
		col.addClass("green-background");
		$("#turno-de span").text("Jugador Rojo");
	}


	function getRandom(){ //devuelve true o false, dependiendo del número aleatorio obtenido
		console.log("getRandom");
		rndum= Math.random() >= 0.5;
		console.log(rndum);
		return rndum;
	}

	function setPlayer(){
		console.log("setPlayer");
		if (getRandom()){
			x=0;//el contador varía su valor inicial dependiendo de a quien se le asignó el primer turno, para de este modo definir los siguientes
			empieza="rojo";
			console.log('contador inicial',x);
			$("#turno-de span").text("Jugador Rojo");
		}else{
			x=1;
			console.log('contador inicial',x);
			empieza="verde";
			$("#turno-de span").text("Jugador Verde");
			setAiTurn();	
			
		}
		//console.log('contador inicial',x);
	}

	function setWinner(){
		console.log("setWinner");
		if(x%2!=0){ //empleamos el congtador para saber cuántos moviemientos transcurrieron desde el inicio y determinar el ganador
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
		var winner=[ //combinaciones que ocasionan ganar
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
		console.log("antes de condicion ", x);

		for (var x2=0; x2<arr.length; x2++) {
			for (var y=0; y<winner.length;y++) {
				if($.inArray(parseInt(arr[x2]),winner[y])!=-1){
					score[y]++;
					if(score[y]>=3){ //ha acumulado los tres aciertos de alguna combinación del arreglo, gana
						console.log("You've won byrch");
						setWinner(); //define el ganador
						reset(); //reinicia todos los valores (menos el marcador)
						return true;
					}
				}
			}
			

		}
		var rg=rojo.concat(verde);
		if(rg.length==9){ //no hubo combinación ganadora para ningún jugador
			
			console.log("Gato");
			ganador="gato";
			$.jGrowl("Gato!!");
			reset();
			return false;
		}
		return false;
	}

})