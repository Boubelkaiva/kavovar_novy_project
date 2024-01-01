export function clearPinInputs() {
    const keyboardPin = document.getElementById("num-container1").querySelector("#keyboardPin");
  
    // Clear the text of each item in the UL
    for (const li of document.getElementById("keyboardPin").querySelectorAll("li")) {
      li.textContent = "";
    }
  }

export function showPinInputs() {
    document.getElementById("num-container1").style.display = "block";
  }

export function showPin() {
    const keyboard = document.getElementById('num-container').querySelector('ul#keyboard')

    for (const li of keyboard.querySelectorAll('li.letter')) {
    li.addEventListener('click', function () {
    const value = this.textContent

    const numContainer1 = document.getElementById('num-container1').querySelector('ul#keyboardPin')

    const inputs = numContainer1.querySelectorAll('li.letter')

    for (const input of inputs) {
    if (input.textContent === "") {
      input.textContent = value
      break
      }
    }
})
    }

}





// // import Payment from "./keyboard_const.js"

// // let platba = new Platba()

// const keyboardPin = document.getElementById("num-container1").querySelector("#keyboardPin")

// // Pro každý prvek v ul
// for (const li of document.getElementById("keyboardPin").querySelectorAll("li")) {

//     // Nastav text na prázdný
//     li.textContent = ""
//   }

// document.getElementById("click-img").addEventListener("click", function() {
//     document.getElementById("num-container1").style.display = "block"
//   console.log("Bylo kliknuto")

// })

// const keyboard = document.getElementById('num-container').querySelector('ul#keyboard')

// for (const li of keyboard.querySelectorAll('li.letter')) {
//   li.addEventListener('click', function () {
//     const value = this.textContent

//     const numContainer1 = document.getElementById('num-container1').querySelector('ul#keyboardPin')

//     const inputs = numContainer1.querySelectorAll('li.letter')

//     for (const input of inputs) {
//       if (input.textContent === "") {
//         input.textContent = value
//         break
//       }
//     }
//   })
// }


