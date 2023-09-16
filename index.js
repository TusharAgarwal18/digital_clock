const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    //we get our time from the computer using date constructor
    //first we need to create a variable as we want to cahnge it later as well

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds();
    let ampm  = "AM";
    if(h>12)
    {
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0"+h: h;
    m = m<10 ? "0"+m: m;
    s = s<10 ? "0"+s: s;



    //we use inner text method to change the text inside th hour element.
    hourE1.innerText = h;
    secondsE1.innerText = s;
    minutesE1.innerText = m;
    ampmE1.innerText = ampm;
    
    //set a timer to execute a funtion after the time expires
    setTimeout(()=>{updateClock()},1000)
}
updateClock();