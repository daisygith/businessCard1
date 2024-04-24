const about = document.getElementById("about");
const cooperation = document.getElementById("cooperation");

const invisibilityName = document.getElementById('visibilityName');
const visibilityCooperations = document.getElementById('visibilityCooperations');

const visibilityTitle = document.getElementById('visibilityTitle');
const visibilityNoneTitle = document.getElementById('visibilityNoneTitle');

const visibilityMedia = document.getElementById('visibilityMedia');
const visibilityNoneMedia = document.getElementById('visibilityNoneMedia');


let someString = "Data";
let someStringAbout = "DataAbout";

about.addEventListener('click', () =>{
    console.log(someStringAbout);

    invisibilityName.style.display = 'block';
    visibilityCooperations.style.display = 'none';
    //
    visibilityTitle.style.display = 'block';
    visibilityNoneTitle.style.display = 'none';
    //
    visibilityMedia.style.display = 'block';
    visibilityNoneMedia.style.display = 'none';

    about.classList.add('active');
    cooperation.classList.remove('active');

});


cooperation.addEventListener('click', () =>{
    console.log(someString);

    visibilityCooperations.style.display = 'block';
    invisibilityName.style.display = 'none';

    visibilityNoneTitle.style.display = 'block';
    visibilityTitle.style.display = 'none';

    visibilityNoneMedia.style.display = 'block';
    visibilityMedia.style.display = 'none';

    cooperation.classList.add('active');
    about.classList.remove('active');

});






