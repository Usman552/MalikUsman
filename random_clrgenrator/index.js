const color="0123456789ABCDEF";
function changeclr(){
let hex="#";
for(let i=0;i<6;i++){
    hex+=color[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor=hex;
}
setInterval(changeclr,1000);
