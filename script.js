let $ = document;
let warningEl = $.querySelector("#warning")
window.addEventListener("keydown",(e)=>{
    if (e.getModifierState("CapsLock")) {
        warningEl.style.display = "block"
    }else{
        warningEl.style.display = "none"
    }
})