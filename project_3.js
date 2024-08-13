//timer
//start_Btn
//close_btn
//r
let timerDisplay, StartTimeButton,closeTimeButton,timeLeft,TimeInteVal,isRunning=false;
timerDisplay=document.getElementById('timer');
StartTimeButton=document.getElementById('start_Btn');
closeTimeButton=document.getElementById('close_btn')
//startTime function
const startTime=(duration)=>{
 //use setime inteval
 let timer=duration;
 TimeInteVal=setInterval(function(){
    let diplayminute=parseInt(timer/60,10);
    let displaysecond=parseInt(timer%60,10);
    let DisPlayMinute=diplayminute<10 ?'0'+diplayminute:diplayminute
    let DisPlaySeconds=displaysecond<10 ?'0'+displaysecond:displaysecond;
    timerDisplay.textContent=DisPlayMinute+" : "+DisPlaySeconds
    if(--timer<0){
        clearInterval(TimeInteVal);
        timerDisplay.textContent='Breath out';
        setTimeout(function(){
       timerDisplay.textContent='Breath In'
       startTime(timeLeft);
        },3000) 
    }
 },1000)
}

const StopTime=()=>{
   clearInterval(TimeInteVal);
    timerDisplay.textContent='Breath In'
    isR=false;
}
StartTimeButton.addEventListener('click',()=>{
    if(!isRunning){
        timeLeft=90;
        startTime(timeLeft);
        isRunning=true;
    }
})

closeTimeButton.addEventListener('click',()=>{
    StopTime();
})