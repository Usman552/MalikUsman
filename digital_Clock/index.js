const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');   
const second=document.getElementById('seconds');

function clock(){
    let date=new Date();
    let hh=String(date.getHours() % 12).padStart(2, "0");
    let mm=String(date.getMinutes()).padStart(2,"0");
    let ss=String(date.getSeconds()).padStart(2,"0");

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
}
setInterval(clock,1000);