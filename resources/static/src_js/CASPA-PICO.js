function swap_overlay_appareils(self, target){
    document.getElementById(self.id).style.filter = "grayscale(0%)";
    document.getElementById('object_' + self.id).style.display = "flex";
    document.getElementById(target).style.filter = "grayscale(80%)";
    document.getElementById('object_' + target).style.display = "none";
}

function swap_appareil(self){
    document.getElementsByClassName("un_appareil_info_actif")[0].className = "un_appareil_info_cache";
    document.getElementsByClassName("un_appareil_actif")[0].className = "un_appareil";

    document.getElementById(self.id + "_INFO").className = "un_appareil_info_actif";
    document.getElementById(self.id).className = "un_appareil_actif";
}

function swap_appareil_fav(self){
    document.getElementsByClassName("un_appareil_info_fav_actif")[0].className = "un_appareil_info_fav_cache";
    document.getElementsByClassName("un_appareil_fav_actif")[0].className = "un_appareil_fav";

    document.getElementById(self.id + "_INFO").className = "un_appareil_info_fav_actif";
    document.getElementById(self.id).className = "un_appareil_fav_actif";
}

function appareillage_off(){
    document.getElementById("overlay_appareillage").style.display = "none";
}

function appareillage_on(){
    document.getElementById("overlay_appareillage").style.display = "block";
}

function back(){
    window.history.back();
}

function open_recherche(){
    document.getElementById("form_barre_recherche").style.minHeight = "250px";
    document.getElementById("open_barre_overlay").style.height = "0px";
    document.getElementById("form_barre_recherche").style.borderTop = "3px black solid";
  }
  
  function close_recherche(){
    document.getElementById("form_barre_recherche").style.minHeight = "0px";
    document.getElementById("open_barre_overlay").style.height = "40px";
    document.getElementById("form_barre_recherche").style.borderTop = "none";
  }