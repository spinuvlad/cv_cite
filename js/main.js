var langs = document.querySelectorAll('.lang img');

var shows = document.querySelectorAll('.show');

var showRo = document.querySelectorAll('.show-ro');
var showRu = document.querySelectorAll('.show-ru');
var showEn = document.querySelectorAll('.show-en');

displayNone();
displayBlock(showRo);

for (var i = 0; i < showRo.length; i++) {
    showRo[i].style.display = 'block';
}

function showLangRo() {
    displayNone();
    displayBlock(showRo);
}

function showLangRu() {
    displayNone();
    displayBlock(showRu);
}

function showLangEn() {
    displayNone();
    displayBlock(showEn);
}

function displayNone() {
    for (var i = 0; i < shows.length; i++) {
        shows[i].style.display = 'none';
    }
}

function displayBlock(varLang) {
    for (var i = 0; i < showRo.length; i++) {
        varLang[i].style.display = 'block';
    }
}

langs[0].addEventListener('click', showLangRo);
langs[1].addEventListener('click', showLangRu);
langs[2].addEventListener('click', showLangEn);