function funkName()
{
let name = prompt('What is your name?', 'Unknown');
return name
}
alert(`Well, hello, ${funkName()}`);

function chanchedcolor(){
    alert('Oh, cool choice!')
}

let btn = document.getElementById('btn1')
console.log(btn);
btn.addEventListener('click', chanchedcolor);
