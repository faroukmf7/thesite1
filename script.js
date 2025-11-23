
function menuShow(){
    const menu_bar = document.getElementsByClassName("menu-bar"); 
    const icon = document.getElementById("icon");
    const close_icon = document.getElementById("close-icon");
    if(menu_bar[0].style.display === "block"){
        menu_bar[0].style.display = "none";
        icon.style.display = "block";
        close_icon.style.display = "none"
        return;
    }
    menu_bar[0].style.display = "block";
    close_icon.style.display = "block"
    icon.style.display = "none";
    
}