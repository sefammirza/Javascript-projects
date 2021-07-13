const myText = document.getElementById('text')
const mySpeed = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / mySpeed.value

writeText()

function writeText(){
    myText.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx=1
    }
    setTimeout(writeText, speed)
}
mySpeed.addEventListener('input',(e) => speed = 300 / e.target.value)
