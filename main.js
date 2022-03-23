let btn = document.querySelector('.btn');
let nav = document.querySelector('nav');

btn.addEventListener('click', function () {
    if (nav.className == ""){
        nav.className = "openNav";
    }
    else if (nav.className == "openNav"){
        nav.className = "";
    }
})