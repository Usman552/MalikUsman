const field=document.getElementById("guessField");
const check=document.getElementById("check");
const result=document.getElementById("result"); 
const random=Math.floor(Math.random()*100);
check.addEventListener("click",()=>{
    if(field.value>random){
        result.innerHTML=`Your guess is too high ${random}`;
    }
    else if(field.value<random){
        result.innerHTML=`Your guess is too low ${random}`;
    }
    else{
        result.innerHTML="Congratulations! You guessed the correct number";
    }
});