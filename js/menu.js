function showMenu(){
    let header = document.querySelector('.hide_header');
    let main = document.querySelector('.hide_main');
    let footer = document.querySelector('.hide_footer')
    let menu = document.querySelector('.display_menu');
    let buttn = document.querySelector('.menu_btn')
    buttn.addEventListener('click', function(e) {
        header.classList.toggle('menu_disable');
        main.classList.toggle('menu_disable');
        footer.classList.toggle('menu_disable')
        menu.classList.toggle('menu_enable');
    });
}

function closeMenu(){
    let header = document.querySelector('.hide_header');
    let main = document.querySelector('.hide_main');
    let footer = document.querySelector('.hide_footer')
    let menu = document.querySelector('.display_menu');
    let buttn = document.querySelector('.btn_close_menu')
    buttn.addEventListener('click', function(e) {
        header.classList.toggle('menu_enable');
        main.classList.toggle('menu_enable');
        footer.classList.toggle('menu_enable')
        menu.classList.toggle('menu_disable');
    });
}
showMenu();
closeMenu();