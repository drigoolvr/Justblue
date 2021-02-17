document.querySelector('.menu-opener').addEventListener('click', function(){
    let menu = document.querySelector('.drop-menu');
    if(menu.style.height == 'fit-content') {
        menu.style.height = '40px';
    }

    else {
        menu.style.height = 'fit-content';
    }
});