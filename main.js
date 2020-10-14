let mass = ['зеленый', 'машина', 'танк', 'кузнечик', 'велосипед', 'мама', 'папа', 'травка', 'карандаш', 'зверь']
let word = mass[getRandomIntInclusive(0,mass.length)].split("")
let parent = document.querySelector('.flex')
let score = 0;
let wordnum = []

 function viewElem(count) {
  
    for(let i = 0; i < count; i++){
       console.log(count)
        let div = document.createElement('div')
        div.classList.add('item-word')
        parent.append(div)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  function inputWord(selector, selectorBlock){
    let items = document.querySelectorAll(selector),
    block = document.querySelectorAll(selectorBlock)
    items.forEach(item =>{
        item.addEventListener('click', (e)=>{
            if(!item.classList.contains('incorrect')&& !item.classList.contains('correct') && score < 10){
              
            let i = 0
          
            block.forEach(inner => {
               if (item.innerHTML == word[i]){
                   item.classList.add('correct')
                   inner.innerHTML = item.innerHTML
               }
               else{
                   item.classList.add('incorrect')
               }
               i++
        
            })
            console.log(item)
            if ( item.classList.contains('incorrect') && !item.classList.contains('correct') ){
               score++
               console.log(score)
             }
            }
            checkValid('.item-word', '.fail', '.succes', 10)
        })
    })
  }

  function checkValid(blc, fail, succes, maxScore){
    let cccr = 0;
    let blocks = document.querySelectorAll(blc),
    failed = document.querySelector(fail),
    succesfyl = document.querySelector(succes)
  
    blocks.forEach(item =>{
       wordnum.push(item.innerHTML)
    })
    for (let b = 0; b < word.length; b++){
        if (word[b] == wordnum[b]){
            cccr++
            console.log(wordnum) 
        }
    }
    if( cccr == word.length){
        console.log(cccr)
        succesfyl.style.display = 'block'
        score = 11
    }
    if (score  == maxScore){
        failed.style.display = 'block'
    }
    wordnum = []

  }

 
    viewElem(word.length)
    inputWord('.item','.item-word' )
    
  
   