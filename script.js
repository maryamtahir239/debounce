const input = document.querySelector("input")
const DefaultText = document.getElementById("default")
const DebounceText = document.getElementById("debounce")
const ThrottleText = document.getElementById("throttle")

const updateDebounceText = Debounce(() =>{
    incrementCount(DebounceText)
})
const updateThrottleText = Throttle(() =>{
    incrementCount(ThrottleText)
})

/*input.addEventListener("input" , e =>{
    DefaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)

})*/


function Debounce(cb,delay =1000){

    let timeout
    return(...args) => {
        clearTimeout = timeout
        timeout = setTimeout(() =>{
            cb(...args)
        },delay)
    }
}
function Throttle(cb,delay = 1000){
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () =>{
        if(waitingArgs==null){
            shouldWait = false
        }else{
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc,delay)
        }
    }
    return(...args) =>{
    if(shouldWait){
        waitingArgs = args
        return
    }
    cb(...args)
    shouldWait = true
    setTimeout(timeoutFunc,delay)
 }
    
}
document.addEventListener("mousemove", e =>{
incrementCount(DefaultText)
updateDebounceText()
updateThrottleText()
})

function incrementCount(element){
    element.textContent = parseInt((element.innerText)|| 0)+1
}