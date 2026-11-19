const cl = console.log;

const bgcolor = document.getElementById('bgcolor');



function onfilter(eve){
    let val = eve.target.value;
    let alldivs = document.querySelectorAll('.all');
    alldivs.forEach(d =>  d.classList.add('d-none'))
    let selecteddivs = [... document.getElementsByClassName(val)]
    selecteddivs.forEach(d => d.classList.remove('d-none'));
}



bgcolor.addEventListener('change', onfilter)





// ===============================================================================================================================//

const feed = document.getElementById('feed');

function onfeedchange(eve) {
    let vals = eve.target.value;
    let allimgs = document.querySelectorAll('.aLL');
    allimgs.forEach(d => d.classList.add('d-none'));
    let selectedfeed = [... document.getElementsByClassName(vals)]
    selectedfeed.forEach(d => d.classList.remove('d-none'));
}




feed.addEventListener('change', onfeedchange)





// ===================================================================================================================================//

const actors = document.getElementById('actors');




function onactorsimg (img) {
    let val =  img.target.value;
    let allimgs = document.querySelectorAll('.All');
    allimgs.forEach(d => d.classList.add('d-none'));
    let selectedimg = [... document.getElementsByClassName(val)];
    selectedimg.forEach(d => d.classList.remove('d-none'));
};

actors.addEventListener('change', onactorsimg);





// ===========================================================================================================================================//




const cars = document.getElementById('cars');




 function oncarshandler(eve){
    let val = eve.target.value;
    let allcars = document.querySelectorAll('.ALl');
    allcars.forEach(d => d.classList.add('d-none'));
    let selectedcars = [... document.getElementsByClassName(val)];
    selectedcars.forEach(d => d.classList.remove('d-none'));
 }





cars.addEventListener('change', oncarshandler);






// ===========================================================================================================================================//

const bikes = document.getElementById('bikes');




function onbikechng(eve) {
    let val = eve.target.value;
    let allbikes = document.querySelectorAll('.ALL');
    allbikes.forEach(d => d.classList.add('d-none'));
    let selectedbikes = [... document.getElementsByClassName(val)];
    selectedbikes.forEach(d => d.classList.remove('d-none'));   
}



bikes.addEventListener('change', onbikechng)