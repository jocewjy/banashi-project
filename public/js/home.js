if (!points_ch1){
    var btn_1 = document.getElementById("btn-1");
    var btn_2 = document.getElementById("btn-2");
    var btn_3 = document.getElementById("btn-3");

    btn_1.setAttribute('disabled', 'disabled');
    btn_2.setAttribute('disabled', 'disabled');
    btn_3.setAttribute('disabled', 'disabled');
} else if (points_ch1 && !points_ch2) {
    var btn_3 = document.getElementById("btn-3");

    btn_3.setAttribute('disabled', 'disabled');
}

function check_points() {
    console.log("in");
    var content = document.getElementById("pt-modal-content");
    var ch1 = document.getElementById("pt-ch1");
    var ch2 = document.getElementById("pt-ch2");
    var ch3 = document.getElementById("pt-ch3");

    if (points_ch1 || points_ch2 || points_ch3) {
        content.classList.add("d-none");

    }

    if (points_ch1 && points_ch1.toString().length > 0) {
        if (points_ch1 < 450){
            document.getElementById("display-points-ch1").innerHTML = "You failed to save this world"
            document.getElementById("badge-ch1").src = 'images/lilRed/badge_lilred_failed.png';
        } else if (points_ch1 <= 600) {
            document.getElementById("badge-ch1").src = 'images/lilRed/badge_lilred_bronze.png';
        } else if (points_ch1 < 900 ){
            document.getElementById("badge-ch1").src = 'images/lilRed/badge_lilred_silver.png';
        } else if (points_ch1 >= 900 ){
            document.getElementById("badge-ch1").src = 'images/lilRed/badge_lilred_gold.png';
        }
        ch1.classList.remove("d-none");
    }
    if (points_ch2 && points_ch2.toString().length > 0) {
        if (points_ch2 < 450){
            document.getElementById("display-points-ch2").innerHTML = "You failed to save this world"
            document.getElementById("badge-ch2").src = 'images/pigies/badge_piggies_failed.png';
        } else if (points_ch2 <= 600) {
            document.getElementById("badge-ch2").src = 'images/pigies/badge_piggies_bronze.png';
        } else if (points_ch2 < 900 ){
            document.getElementById("badge-ch2").src = 'images/pigies/badge_piggies_silver.png';
        } else if (points_ch2 >= 900 ){
            document.getElementById("badge-ch2").src = 'images/pigies/badge_piggies_gold.png';
        }
        ch2.classList.remove("invisible");
    }
    if (points_ch3 && points_ch3.toString().length > 0) {
        if (points_ch3 < 450){
            document.getElementById("display-points-ch3").innerHTML = "You failed to save this world"
            document.getElementById("badge-ch3").src = 'images/ginger/badge_ginger_failed.png';
        } else if (points_ch3 <= 600) {
            document.getElementById("badge-ch3").src = 'images/ginger/badge_ginger_bronze.png';
        } else if (points_ch3 < 900 ){
            document.getElementById("badge-ch3").src = 'images/ginger/badge_ginger_silver.png';
        } else if (points_ch3 >= 900 ){
            document.getElementById("badge-ch3").src = 'images/ginger/badge_ginger_gold.png';
        }
        ch3.classList.remove("invisible");
    }
}
