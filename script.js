const span = document.querySelector("#value")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")

let count = 0;

decreaseBtn.addEventListener("click", function(){
    count--
    setColorAndValue()
})

resetBtn.addEventListener("click", function(){
    count = 0
    setColorAndValue()
})

increaseBtn.addEventListener("click", function(){
    count++
    setColorAndValue()

})

function setColorAndValue(){
    if(count < 0){
        span.style.color = "red"
    } else if(count > 0){
        span.style.color = "green"
    } else {
        span.style.color = "black"
    }
    span.innerText = count;
} //this is global scope