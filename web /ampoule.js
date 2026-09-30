function changer_ampoule(){
    let a = document.getElementById("pic_bulboff").alt;
    if (a== "off"){
        let resultat=document.getElementById("pic_bulboff").src = "images/pic_bulbon.gif";
        resultat = document.getElementById("pic_bulboff").alt = "on";
    }
    else{
        let resultat=document.getElementById("pic_bulboff").src = "images/pic_bulboff.gif";
        resultat = document.getElementById("pic_bulboff").alt = "off";
    }
    

}