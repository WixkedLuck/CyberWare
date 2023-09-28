const hoverOver = document.getElementById('btnOne');
const hoverOver1 = document.getElementById('btnTwo');
const hoverOver2 = document.getElementById('btnThree');
const hoverOver3 = document.getElementById('btnFour');
const hoverOver4 = document.getElementById('btnFive');

hoverOver.addEventListener('mouseover', function () {
    function delay(time) {
        hoverOver.classList.add('animate__animated', 'animate__rubberBand');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    // remove class after settime
    delay(1000).then(() => hoverOver.classList.remove('animate__animated', 'animate__rubberBand'));

});


hoverOver1.addEventListener('mouseover', function () {
    function delay(time) {
        hoverOver1.classList.add('animate__animated', 'animate__rubberBand');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    // remove class after settime
    delay(1000).then(() => hoverOver1.classList.remove('animate__animated', 'animate__rubberBand'));

});

hoverOver2.addEventListener('mouseover', function () {
    function delay(time) {
        hoverOver2.classList.add('animate__animated', 'animate__rubberBand');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    // remove class after settime
    delay(1000).then(() => hoverOver2.classList.remove('animate__animated', 'animate__rubberBand'));

});

hoverOver3.addEventListener('mouseover', function () {
    function delay(time) {
        hoverOver3.classList.add('animate__animated', 'animate__rubberBand');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    // remove class after settime
    delay(1000).then(() => hoverOver3.classList.remove('animate__animated', 'animate__rubberBand'));

});

hoverOver4.addEventListener('mouseover', function () {
    function delay(time) {
        hoverOver4.classList.add('animate__animated', 'animate__rubberBand');
        return new Promise(resolve => setTimeout(resolve, time));

    }
    // remove class after settime
    delay(1000).then(() => hoverOver4.classList.remove('animate__animated', 'animate__rubberBand'));

});