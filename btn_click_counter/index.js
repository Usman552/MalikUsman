const add=document.getElementById('add');
const remove=document.getElementById('remove');
const reset=document.getElementById('reset');
const counter=document.getElementById('counter');

let count=0;
add.addEventListener('click',()=>{
    count++;
    counter.innerHTML=count;
});
remove.addEventListener('click',()=>{
    count--;
    counter.innerHTML=count;
});
reset.addEventListener('click',()=>{
    count=0;
    counter.innerHTML=count;
});