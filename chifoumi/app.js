var random = ["pierre", "feuille", "ciseaux"];
var choixOrdi;
var cptJ = 0;
var cptO = 0;

$("#pierre2").hide();
$("#feuille2").hide();
$("#ciseaux2").hide();
$("#div1").hide();
$("#div2").show();
$("#play").hide();
$("#reset").hide();

function choixOrdiRandom()
{
	choixOrdi = random[Math.floor(Math.random() * random.length)];
}

function afficherScore()
{
	$("#score").empty();
	$("#score").append("<div>Score Joueur : "+cptJ+"</div>");
	$("#score").append("<div>Score Ordinateur : "+cptO+"</div>");
}

function gagnantJ()
{
	cptJ ++;
	afficherScore();
}

function gagnantO()
{
	cptO ++;
	afficherScore();
}

$("#pierre").click(function()
{
	$("#div1").show();
	$("#div2").hide();
	if (choixOrdi == "ciseaux")
	{
		gagnantJ();
		setTimeout(function(){ alert("SUPER !"); }, 100);
		$("#ciseaux2").show();
	}
	else if (choixOrdi == "feuille")
	{
		gagnantO();
		setTimeout(function(){ alert("C'EST PERDU !"); }, 100);		
	}
	else
	{
		setTimeout(function(){ alert("MATCH NUL"); }, 100);
	}
	if (choixOrdi == "ciseaux")
	{
		$("#ciseaux2").show();
	}
	if (choixOrdi == "pierre")
	{
		$("#pierre2").show();
	}	
	if (choixOrdi == "feuille")
	{
		$("#feuille2").show();
	}	
	$("#play").show();
	$("#reset").show();
	$("#ciseaux").hide();
	$("#feuille").hide();
})

$("#feuille").click(function()
{
	$("#div1").show();
	$("#div2").hide();
	if (choixOrdi == "pierre")
	{
		gagnantJ();
		setTimeout(function(){ alert("SUPER !"); }, 100);;
		$("#pierre2").show();
	}
	else if (choixOrdi == "ciseaux")
	{
		gagnantO();
		setTimeout(function(){ alert("C'EST PERDU !"); }, 100);
	}
	else
	{
		setTimeout(function(){ alert("MATCH NUL"); }, 100);
	}
	if (choixOrdi == "ciseaux")
	{
		$("#ciseaux2").show();
	}
	if (choixOrdi == "pierre")
	{
		$("#pierre2").show();
	}	
	if (choixOrdi == "feuille")
	{
		$("#feuille2").show();
	}	
	$("#play").show();
	$("#reset").show();
	$("#pierre").hide();
	$("#ciseaux").hide();
})

$("#ciseaux").click(function()
{
	$("#div1").show();
	$("#div2").hide();
	if (choixOrdi == "feuille")
	{
		gagnantJ();
		setTimeout(function(){ alert("SUPER !"); }, 100);
		$("#feuille2").show();
	}
	else if (choixOrdi == "pierre")
	{
		gagnantO();
		setTimeout(function(){ alert("C'EST PERDU !"); }, 100);
	}
	else
	{
		setTimeout(function(){ alert("MATCH NUL"); }, 100);
	}
	if (choixOrdi == "ciseaux")
	{
		$("#ciseaux2").show();
	}
	if (choixOrdi == "pierre")
	{
		$("#pierre2").show();
	}	
	if (choixOrdi == "feuille")
	{
		$("#feuille2").show();
	}
	$("#play").show();
	$("#reset").show();
	$("#pierre").hide();
	$("#feuille").hide();	
})

$("#play").click(function(){
	choixOrdiRandom();
	console.log(choixOrdi);
	$("#div1").hide();
	$("#div2").show();
	$("#pierre").show();
	$("#feuille").show();
	$("#ciseaux").show();
	$("#play").hide();
	$("#pierre2").hide();
	$("#feuille2").hide();
	$("#ciseaux2").hide();
})

$("#reset").click(function(){
	location.reload();
})

choixOrdiRandom();