var menulist = document.getElementById("menulist")

function Togglemenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "240px"
    }
    else{
        menulist.style.maxHeight = "0px"
    }
}