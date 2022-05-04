const item = document.querySelectorAll('.item')
const itemArr = []



for(let i = 0; i< item.length; i++){
    item[i].addEventListener('click', function(){
        item[i].classList.add('selected')
        itemArr.push(item[i].innerHTML)
        const printArr = document.querySelector('h3').innerHTML = (itemArr.join(' '))
        const btn = document.querySelector('.btn')
        btn.addEventListener('click', (event) =>{
            const copied = document.querySelector('h3').textContent
            navigator.clipboard.writeText(copied)
            const info = document.querySelector('p')
            info.classList.remove("hidden")        
            info.classList.add("hidden")        
            info.classList.toggle("hidden")        
        })
            
        
    })
}


