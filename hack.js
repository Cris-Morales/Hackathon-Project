document.addEventListener('DOMContentLoaded', () => {
    const ourStartStopButt = document.querySelector('#startStop');

    const myAudio = new Audio(chrome.runtime.getURL("./projectLofi.mp3"));
    let countdown = 6000 //1500000;
    let pause = false;
    let sessions = 0;
    
    // Update the count down every 1 second
    const timeInterval = function() {
        const timer = setInterval(function() {    
        // Get today's date and time
        //let now = new Date().getTime();

        if (countdown <= 0) {
            stopTimer(timer);
        }
        if (pause){
            pauseTimer(timer);
        }

        countdown -= 1000;

        let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdown % (1000 * 60)) / 1000);   

       document.getElementById("clock").innerHTML = minutes + "m " + seconds + "s ";  
        }, 1000);
    };
// timeInterval();

    function stopTimer(ourInterval) {
        clearInterval(ourInterval);
        // increment variable at html id = session
        myAudio.pause();
        pause = false; //new
        countdown = 6000 //new
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("clock").innerHTML = "25m 0s";
        document.getElementById("session").innerHTML = 'Sessions ' + ++sessions;
        alert("Go on a break :)");
    }

    function pauseTimer(ourInterval){ //new
        clearInterval(ourInterval);
        document.getElementById("startStop").innerHTML = "Start";
    }

    ourStartStopButt.addEventListener('click', () => {
        //if button text is stop => clear interval, reassign text to start
        // else do stuff below.
        if (document.getElementById("startStop").innerHTML === "Start") {
            pause = false; //new
            document.getElementById("startStop").innerHTML = "Stop";
            myAudio.play();
            timeInterval();          
        }
        else {
            myAudio.pause();
            document.getElementById("startStop").innerHTML = "Start"; 
            pause = true;     //new       
        }
    });
})

// let countdown = 1500000;
// // Update the count down every 1 second
// const timeInterval = setInterval(function() {
    

//     // Get today's date and time
//     let now = new Date().getTime();

//     if (countdown <= 0) {
//         return stopTimer();
//         // document.getElementById("clock").innerHTML = "Go on a break :)";

//     }
//      countdown -= 1000;

//     let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((countdown % (1000 * 60)) / 1000);   

//    document.getElementById("clock").innerHTML = minutes + "m " + seconds + "s ";  
// }, 1000);

// // timeInterval();

// function stopTimer() {
//     clearInterval(timeInterval);
//     document.getElementById("clock").innerHTML = alert("Go on a break :)");
// }

// timer for pomaduro technique
//     hidden but accessible// adjustable depending on needs
//     pomodoro function: 25 x 5; 4 times; then 15-30 min break
//         if clicked, give option to start timer or customize (automatically set to pomodoro)
//  const timerButton = function() {
//     setTimeout(() => {
//         console.log("this message presented correctly")
//     }, 5000)
// }
    
// const timer = function() {
//     document.getElementsByClassName('clockOptions').addEventListener("click",callback)
// }

// timerButton();

// once clicked, timer begins and get request sent for lofi vids
//     created playlist to play in background

// prototype... yellow coloration of screen for readability
//     button that once clicked, access html and change background color to yellow coloration

// prototype... flash card creation. flash cards can pop onto screen
// randomly while studying
//     button that once clicked, opens text box to add information. At random interval, 
//     flashcard returns with last word removed "______"