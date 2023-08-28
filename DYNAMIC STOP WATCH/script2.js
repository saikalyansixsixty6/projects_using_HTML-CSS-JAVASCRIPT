let hr = min = sec = ms = "0"+0;
let startTimer;


const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


startBtn.addEventListener("click",startFunction);
stopBtn.addEventListener("click",stopFunction);
resetBtn.addEventListener("click",resetFunction);

function startFunction(){
  startBtn.classList.add("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.remove("active");
  startTimer = setInterval(()=>{
    ms++
    ms = ms < 10 ? "0" + ms : ms
    if (ms == 100){
          sec++
          sec = sec < 10 ? "0" + sec : sec
          ms = "0"+0
    }
    if (sec == 60){
        min++
        min = min < 10 ? "0" + min : min

        sec = "0"+0
  }
  if (min == 60){
    hr++
    hr = hr < 10 ? "0" + hr : hr

    min = "0"+0
}
  

    putValue();
  },10);





}
function stopFunction(){
    startBtn.classList.remove("active");
  stopBtn.classList.add("active");
  resetBtn.classList.remove("active");
  clearInterval(startTimer)
}

function resetFunction(){
    startBtn.classList.remove("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.add("active");
  clearInterval(startTimer)
  hr = min = sec = ms = "0"+0
  putValue()

}


function putValue(){
    document.querySelector(".milli-seconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hours").innerText = hr;
}