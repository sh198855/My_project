var header = document.querySelector('.hide_header');
var main = document.querySelector('.hide_main');
var footer = document.querySelector('.hide_footer')
var menu = document.querySelector('.display_menu');

var buttons = document.querySelector('.buttons_hide')

function showbuttons(){
    let elements = document.querySelectorAll('.nav_element');
    elements.forEach((element)=>{
        element.addEventListener('mouseover', function(e){
            //document.getElementById('buttn').style.display = 'flex';
            buttons.classList.toggle('buttons_hide');
        })
        element.addEventListener('mouseout', function(e){
            //document.getElementById('buttn').style.display = 'none';
            buttons.classList.toggle('buttons_hide');
        })
    })
}

function showMenu(){
    let buttn = document.querySelector('.menu_btn')
    buttn.addEventListener('click', function(e) {
        header.classList.toggle('menu_disable');
        main.classList.toggle('menu_disable');
        footer.classList.toggle('menu_disable')
        menu.classList.toggle('menu_enable');
    });
}

function closeMenu(){
    let buttn = document.querySelector('.btn_close_menu')
    buttn.addEventListener('click', function(e) {
        header.classList.toggle('menu_disable');
        main.classList.toggle('menu_disable');
        footer.classList.toggle('menu_disable')
        menu.classList.toggle('menu_enable');
    });
}

export {showbuttons, showMenu, closeMenu};
