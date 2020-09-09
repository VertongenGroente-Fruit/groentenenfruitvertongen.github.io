/*
Copyright (C) 2020 - Tobias de Bruijn
*/


$( document ).ready(function() {
    
    var date = new Date();
    var day = date.getDay();

    var shopStatus, marketStatus, shopOpen = false, marketOpen = false;

    switch(day) {
        case 0: //Sunday
            shopStatus = " Gesloten";
            marketStatus = " Gesloten";

            shopOpen = false;
            marketOpen = false;

            break;
        case 1: //Monday
            shopStatus = " Gesloten";
            marketStatus = " Dendermonde, Heldenplein";
            
            shopOpen = false;
            marketOpen = true;

            break;
        case 2: //Tuesday
            shopStatus = " Winkel: Gesloten";
            marketStatus = " Gesloten";
            
            shopOpen = false;
            marketOpen = false;

            break;
        case 3: //Wednesday
            shopStatus = " Open: 09:00 - 17:00";
            marketStatus = " Baasrode, Dorpsplein";
            
            shopOpen = true;
            marketOpen = true;

            break;
        case 4: //Thursday
            shopStatus = " Gesloten";
            marketStatus = " Buggenhout";
            
            shopOpen = false;
            marketOpen = true;

            break;
        case 5: //Friday
            shopStatus = " Open: 09:00 - 17:00";
            marketStatus = " Gesloten";
            
            shopOpen = true;
            marketOpen = false;

            break;
        case 6: //Saturday
            shopStatus = " Open: 09:00 - 13:00";
            marketStatus = " Moerzeke, Molenplein";
            
            shopOpen = true;
            marketOpen = true;

            break;
    }

    $("#shopOpen").text(shopStatus);
    $("#marketOpen").text(marketStatus);

    if(shopOpen) {
        $("#shopOpen").css("color", "#00FF00");
    } else {
        $("#shopOpen").css("color", "#FF0000");
    }

    if(marketOpen) {
        $("#marketOpen").css("color", "#00FF00");
    } else {
        $("#marketOpen").css("color", "#FF0000");
    }
});
