var random = ["pierre", "feuille", "ciseaux"];
var choixOrdi = random[Math.floor(Math.random() * random.length)];
console.log(choixOrdi);
var jouer =$("#jouer");
var ok = $("#ok");
var prenom = $('#prenom');
var affichage1 = $("#affichage1");
var affichage2 = $("#affichage2");
var cpt_joueur = $("#cpt_joueur");
$("#pierre2").hide();
$("#feuille2").hide();
$("#ciseaux2").hide();
$("#div1").hide();
$("#reset").hide();

function cache()

{  $("#joueur").hide();
	affichage2.hide();
}

 

$("#pierre").click(function()
{
	$("#div1").show();
	if (choixOrdi == "ciseaux")
		{
			alert("SUPER !");
			$("#ciseaux2").show();
		}
	else if (choixOrdi == "feuille")
		{
			alert("C'EST PERDU !");
		}
		else
		{
			alert("MATCH NUL");
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
		$("#reset").show();
		$("#ciseaux").hide();
		$("#feuille").hide();
})

$("#feuille").click(function()
{
	$("#div1").show();
	if (choixOrdi == "pierre")
		{
			alert("SUPER !");
			$("#pierre2").show();
		}
	else if (choixOrdi == "ciseaux")
		{
			alert("C'EST PERDU !");
		}
		else
		{
			alert("MATCH NUL");
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
		$("#reset").show();
		$("#pierre").hide();
		$("#ciseaux").hide();
})

jouer.click (function()
{
	jouer.hide();
	$("#joueur").show();
});

ok.click(function()
{
	prenom = $("#prenom").val();
	$("#joueur").hide();
	pierre.show();
	papier.show();
	ciseaux.show();
	affichage1.html(prenom);
	affichage2.show();
}); 

$("#ciseaux").click(function()
{
	$("#div1").show();
	if (choixOrdi == "feuille")
		{
			alert("SUPER !");
			$("#feuille2").show();
		}
	else if (choixOrdi == "pierre")
		{
			alert("C'EST PERDU !");
		}
		else
		{
			alert("MATCH NUL");
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
		$("#reset").show();
		$("#pierre").hide();
		$("#feuille").hide();	
})

$("#reset").click(function(){
	location.reload();
})


