const homeBtn = document.querySelector('#start');

homeBtn.addEventListener('click', function () {
    homeBtn.classList.add("animate__animated", "animate__hinge");
    let tID = setTimeout(function () {
        window.clearTimeout(tID);	
        window.location.assign ("./public/pages/NewsFeed.html");
        	// clear time out.
    }, 2000);
})