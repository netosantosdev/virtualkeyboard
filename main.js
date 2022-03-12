const keys = document.querySelectorAll(".octave > div")

function desmarcar(key){
    key.classList.remove("key-active")
}

keys.forEach(function(key){
   key.onmousedown = function(){
      key.classList.add("key-active")
   }
   
   key.onmouseup = () => desmarcar(key)
   key.onmouseleave = () => desmarcar(key)
})