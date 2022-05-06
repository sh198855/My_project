var block_hide = document.querySelector('.hide_block_menu');
var btn_open = document.querySelector('.green_vetor');
var btn_close = document.querySelector('.pinck_vetor');
var text_menu = document.querySelector('.text_menu');

function open_mn(){
    btn_open.addEventListener('click', function(){
        btn_open.classList.toggle('hide_block_menu');
        block_hide.classList.toggle('hide_block_menu');
        btn_close.classList.toggle('pinck_vetor');
        text_menu.classList.toggle('hide_block_menu');

    });
}

function close_mn(){
    btn_close.addEventListener('click', function(){
        block_hide.classList.toggle('hide_block_menu');
        btn_close.classList.toggle('pinck_vetor');
        btn_open.classList.toggle('hide_block_menu');
        text_menu.classList.toggle('hide_block_menu')

    });
}

open_mn();
close_mn();