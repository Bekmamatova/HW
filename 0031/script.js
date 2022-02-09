// document.addEventListener("DOMContentLoaded", main)

// function main () {
//    const btn = document.querySelector("button")
//    const lamp = document.querySelector("div")
//    lamp.isOn = false


//     btn.addEventListener("click", () => {
//         if (lamp.isOn) {
//            lamp.style.backgroundColor = "white"
//            btn.textContent = "Turn on"
//            lamp.isOn = false
//         }else {
//            lamp.style.backgroundColor = "yellow"
//            btn.innerText = "Turn off"
//            lamp.isOn = true
//         }
//     })

// }
   
   
   
//    function toggle() {
//     const btn = document.querySelector("button")
//     const lamp = document.querySelector("div")
//     if (lamp.style.backgroundColor === "yellow") {
//         lamp.style.backgroundColor = "white"
//         btn.innerHTML = "Turn on"
//     } else {
//         lamp.style.backgroundColor = "yellow"
//         btn.innerHTML = "Turn off"
//     }
// }



// document.addEventListener("DOMContentLoaded", run);

// function run() {
//     const tog = document.getElementById("toggle");
//     tog.addEventListener("click", lampChange);
// }

// function lampChange() {
//     const innerTog = document.getElementById("inner-toggle");
//     const tog = document.getElementById("toggle");
//     const lamp = document.getElementById("img");
//     if (lamp.style.backgroundImage === 'url("./media/bulb-on.png")') {
//         lamp.style.backgroundImage = 'url("./media/bulb_off.png")';
//         lamp.style.transition = '0.5s';
//         tog.style.backgroundColor = 'green';        
//         innerTog.style.marginLeft = '0px';
//         innerTog.style.transition = '0.5s';
//     } else {
//         lamp.style.backgroundImage = 'url("./media/bulb-on.png")';
//         lamp.style.transition = '0.5s';
//         tog.style.backgroundColor = 'red';
//         innerTog.style.marginLeft = '100px';
//         innerTog.style.transition = '0.5s';
//     }
// }


document.addEventListener("DOMContentLoaded", main);
 
function main () {
    document.querySelector("button").addEventListener("click", toggle);
}


function toggle (){
   const btn = document.querySelector("button");
   const lamp = document.querySelector("div");
   if (lamp.innerHTML = "<img src='./media/bulb_off.png'>") {
       lamp.innerHTML = "<img src='./media/bulb-on.png'>";
       btn.innerHTML = "Включить";
   } else {
       lamp.innerHTML = "<img src='./media/bulb_off.png'>";
       btn.innerHTML = "Выключить";
   }
}