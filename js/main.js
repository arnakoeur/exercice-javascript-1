var boxCC = document.querySelector('.change-color');

var changeColor = function(){
    document.querySelector('.change-color').classList.add('blue');
}

boxCC.addEventListener('click', changeColor)

var boxTG = document.querySelector('.toggle-color');

var toggleColor = function(){
    document.querySelector('.toggle-color').classList.toggle('red');
}

boxTG.addEventListener('click', toggleColor)

var boxTRG = document.querySelector('.trigger');

var triggerRemove = function(){
    document.querySelector('.target').classList.toggle('remove');
}

boxTRG.addEventListener('click', triggerRemove)

var boxTRGA = document.querySelector('.trigger-all');

var toggleColor = function(){
    document.querySelector('.toggle-color').classList.toggle('red');
    document.querySelector('.change-color').classList.toggle('blue');
}

boxTRGA.addEventListener('click', toggleColor)

var boxTRGAS = document.querySelector('.trigger-all-self')

var toggleColor = function(){
    document.querySelector('.toggle-color').classList.toggle('red');
    document.querySelector('.change-color').classList.toggle('blue');
    document.querySelector('.trigger-all-self').classList.toggle('selftrigger')
}

boxTRGAS.addEventListener('click', toggleColor)