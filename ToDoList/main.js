
$("#ajouterTache").click(function(){
        var nouvelleTache = $("#nouvelleTache").val();
        console.log(nouvelleTache);
        $("#listeTache").append("<li>"+nouvelleTache+"</li>");
    });