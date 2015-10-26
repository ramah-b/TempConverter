var $ = function (id) {
    return document.getElementById(id);
}

function convert_to_F_click() {
    var cDegree = parseInt($("C").value);

    $("tempPic").src = "http://www.psdgraphics.com/file/weather-icon.jpg";
    $("F").value = "";
    if (isNaN(cDegree)) {
        alert("Invalid Input.");
    } else {
        var fDegree = cDegree * (9/5) + 32;
        fDegree = parseInt(fDegree);
        $("F").value = fDegree;
        if (fDegree <= 32){
        	$("tempPic").src = "http://www.clker.com/cliparts/3/4/e/d/12284285361061964999sivvus_weather_symbols_5.svg.hi.png";
        }else if (fDegree >32 && fDegree <= 80){
        	$("tempPic").src = "http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png";
        }else if (fDegree >80){
        	$("tempPic").src = "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
        }
    }
}


function convert_to_C_click() {
    var fDegree = parseInt($("F").value);

    $("tempPic").src = "http://www.psdgraphics.com/file/weather-icon.jpg";
    $("C").value = "";
    if (isNaN(fDegree)) {
        alert("Invalid Input.");
    } else {
        var cDegree = (fDegree - 32) * (5/9);
        cDegree = parseInt(cDegree);
        $("C").value = cDegree;
        if (cDegree <= 0){
        	$("tempPic").src = "http://www.clker.com/cliparts/3/4/e/d/12284285361061964999sivvus_weather_symbols_5.svg.hi.png";
        }else if (cDegree >0 && cDegree <= 30){
        	$("tempPic").src = "http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png";
        }else if (cDegree >30){
        	$("tempPic").src = "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
        }
    }
}

