let lengthPass = document.querySelector('.passLen')

let passVall = document.querySelector('.passLengthVall')

let passComplete = document.querySelector('.completePass')

let leng = 4 //длинна пароля

changeLength()

function changeLength(){
    passVall.value = lengthPass.value
    leng = passVall.value
    
    let arr = ['#', '#', '#', '#']
    for(i=4; i<leng; i++){
        arr.push('#')
    }
    passComplete.textContent = arr.join('')

}
lengthPass.addEventListener('input', changeLength)


let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let simbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', ',', '.', '/', '?', '`', '~', '.']
let lowerABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let opperABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let all = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], 
['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', ',', '.', '/', '?', '`', '~', '.'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']]
console.log(all);

let oneElement = 4

let numbersVall = true;
let number = document.querySelector('.numbers')
number.addEventListener('click', function(){

    if (oneElement!==1){
        if(numbersVall===true){
            oneElement --
            
            number.className='settingVallueOff';
            numbersVall = false;
            all[0] = undefined
            
        } else {
            oneElement ++
            number.className='settingVallue';
            numbersVall = true
            all[0] = numbers
        }    
    } else if (oneElement===1 && numbersVall===false){
        oneElement ++
        number.className='settingVallue';
        numbersVall = true
        all[0] = numbers
    }

})

let simbolsVall = true;
let simbol = document.querySelector('.symbol')
simbol.addEventListener('click', function(){

    if (oneElement!==1){
        if(simbolsVall===true){
            oneElement --
            simbol.className='settingVallueOff';
            simbolsVall = false;
            all[1] = undefined
            
        } else {
            oneElement ++
            simbol.className='settingVallue';
            simbolsVall = true
            all[1] = simbols
        } 
    } else if (oneElement===1 && simbolsVall===false){
        oneElement ++
        simbol.className='settingVallue';
        simbolsVall = true
        all[1] = simbols
    }

})

let upperVall = true;
let upper = document.querySelector('.upper')
upper.addEventListener('click', function(){

    if (oneElement!==1){
        if(upperVall===true){
            oneElement --
            upper.className='settingVallueOff';
            upperVall = false;
            all[3] = undefined
            
        } else {
            oneElement ++
            upper.className='settingVallue';
            upperVall = true
            all[3] = opperABC
            
        }
    } else  if (oneElement===1 && upperVall===false) {
        oneElement ++
        upper.className='settingVallue';
        upperVall = true
        all[3] = opperABC
    }

})

let lowerVall = true;
let lower = document.querySelector('.lower')
lower.addEventListener('click', function(){

    if (oneElement!==1){

        if(lowerVall===true){
            oneElement --
            lower.className='settingVallueOff';
            lowerVall = false;
            all[2] = undefined
        } else {
            oneElement ++
            lower.className='settingVallue';
            lowerVall = true
            all[2] = lowerABC
        }

    } else if (oneElement===1 && lowerVall===false) {
        oneElement ++
        lower.className='settingVallue';
        lowerVall = true
        all[2] = lowerABC
    }

})

function run() {

    let arrFin = all.reduce((a,b,c)=>{
        if (b!==undefined) a = a.concat(b)
        return a
    },[])

    let passArr = []
    for(e=0; e<leng; e++){
        passArr.push(arrFin[Math.floor(Math.random()*arrFin.length)])
    }

    passComplete.textContent = passArr.join('') 
    
}

document.querySelector('.runBtn').addEventListener('click', run)


let content = document.querySelector('.content')

let contentHolder = document.querySelector(".completePass");

content.addEventListener("click", function() {

    document.querySelector('.wind').style.display='block'

    // Нам понадобится объект диапазона и выделения
    let range = document.createRange(),
    selection = window.getSelection();

    // Очищаем выделение от предыдущей информации
    selection.removeAllRanges();

    // Выделяем весь контент в параграфе contentHolder.
    range.selectNodeContents(contentHolder);

    // Добавляем диапазон в выделение.
    selection.addRange(range);

    // Копируем выделенное в буфер обмена.
    document.execCommand('copy');

    // Можем очистить выделение.
    selection.removeAllRanges();

    setTimeout(() => document.querySelector('.wind').style.display='none', 500);


}, false);
