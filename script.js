
var loginForm = document.getElementById('loginForm');
var socialLinksForm = document.getElementById('socialLinksForm');
var personalForm = document.getElementById('personalForm');

// form 1 buttons
var loginFormNext = document.getElementById('loginFormNext');

// form 2 buttons
var socialLinksFormPrevious = document.getElementById('socialLinksFormPrevious');
var socialLinksFormNext = document.getElementById('socialLinksFormNext');

//form 3 buttons
var personalFormPrevious = document.getElementById('personalFormPrevious');

// Progress Bar
var progress = document.getElementById('progress');

// first page Next
loginFormNext.onclick = function(){
    loginForm.style.left = '-450px';
    socialLinksForm.style.left = '40px';
    progress.style.width = '240px';
}

// Second page back
socialLinksFormPrevious.onclick = function(){
    loginForm.style.left = '40px';
    socialLinksForm.style.left = '450px';
    progress.style.width = '120px';
}

// Second page next
socialLinksFormNext.onclick = function(){
    socialLinksForm.style.left = '-450px';
    personalForm.style.left = '40px';
    progress.style.width = '360px';
}

// Third page back
personalFormPrevious.onclick = function(){
    personalForm.style.left = '450px';
    socialLinksForm.style.left = '40px';
    progress.style.width = '240px';
}
