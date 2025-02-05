const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const word = e.target.word.value;
    const reversedWord = word.split('').reverse().join('');
    if(word === reversedWord){
        alert('This is a palinderom word');
    }else{
        alert('This is not a palinderom word');
    }
});