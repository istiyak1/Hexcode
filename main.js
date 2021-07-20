let button = document.getElementById('get')
let result = document.getElementById('result')
let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']


button.addEventListener('click', function(e){
 e.preventDefault()

    let hex = '#'
 for(let i = 0; i < 6; i++){
  
    let random = Math.floor(Math.random() * 16)
    let num = arr[random]

    let final = hex += num
    back.style.background = final
    result.style.color = final
    result.innerHTML = final
 }
})