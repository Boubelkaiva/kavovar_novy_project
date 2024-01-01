import Zasobnik from "./zasobnik.js";
import Zasobnik_kava from "./zasobnik_kava.js";
import { clearPinInputs, showPinInputs, showPin } from "./keyboard.js";
import { zkontrolujStavZasobniku } from "./zasobnik-function.js"
import { kava } from "./data.js";

let zasobnikKava = new Zasobnik_kava();
let zasobnik = new Zasobnik();
// let keyboard = new Keyboard();
const objem = 200;
export { objem };
const objemKava = 10;
export { objemKava };

// Přidání události kliknutí na tlačítko po načtení DOM
// Vybrání všech tlačítek s třídou .btn_vyber

window.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".btn_vyber");
  const hlaska = "Je málo vody, doplň zásobník.";
  const hlaska2 = "Je málo kávy, doplň zásobník";
  const html = `<p>${hlaska}</p>`;
  const html_kava = `<p>${hlaska2}</p>`;

  // Vypisuje aktuální stav zásobníku
  zkontrolujStavZasobniku()
  
  // Přidání události kliknutí na každé tlačítko
  // Kontrola stavu zásobníku

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

      // Kontrola stavu zásobníku
      const stavZasobniku = zasobnik.get_aktualniObjem() - objem
      const stavZasobnikuKava = zasobnikKava.get_aktualniObjem() - objemKava

      // Zobrazení aktuálního stavu zásobníku
      const zasobnikP = document.querySelector(".bg-zasobnik");
      const stavZasobnikuP = zasobnikP.querySelector(".zasobnik");
      stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml`;

      const zasobnikK = document.querySelector(".bg-zasobnik1")
      const stavZasobnikuK = zasobnikK.querySelector(".zasobnik-kava")
      stavZasobnikuK.textContent = `Zásobník káva ${stavZasobnikuKava} g`

      // Vypsání html

      zasobnik.textContent = `Zásobník <br> ${stavZasobniku} ml`
      console.log(stavZasobniku)

      zasobnik.textContent = `Zásobník <br> ${stavZasobnikuKava} g`
      console.log(stavZasobnikuKava)

      // Získání vybrané kávy
      const selectedKava = kava.find((kava) => kava.id === button.id);
      console.log(selectedKava);

      // Zobrazení informácí o kávě
      const infoP = document.querySelector(".info_p")
      infoP.innerHTML = `Vybrali jste ${selectedKava.druh} cena ${selectedKava.cena} Kč.`

      // Změna textu tlačítka
      if (selectedKava && stavZasobniku >= objem && stavZasobnikuKava >= objemKava) {

        // Odečítá objem kávy od aktuálního stavu zásobníku
        zasobnik.set_aktualniObjem(zasobnik.get_aktualniObjem() - objem);
        zasobnikKava.set_aktualniObjem(zasobnikKava.get_aktualniObjem() - objemKava);
      
        const textClickChange = document.querySelector(".payment-dis h3");
        textClickChange.textContent = "Uhraďte platbu";
      
        // clearPinInputs()
        clearPinInputs();
        showPinInputs();
        showPin();

      } else {
        // Zkontroluje, zda je nedostatek vody nebo kávy
        if (stavZasobniku < 200 || stavZasobnikuKava < 10) {
          // Zobrazí upozornění
          zkontrolujStavZasobniku()
        }
      }
      
    });
  });

  // Click event for OK button to start brewing coffee
  const buttonOK = document.getElementById("num-container").querySelector("li.letter#ok");
  buttonOK.addEventListener("click", (event) => {

    // Start brewing coffee process
    // Přehrání zvuku
    const audio = new Audio("./sound/coffee-machine.mp3");
    audio.play();

    // Po přehrání zvuku vypiš "HOTOVO!"
    audio.addEventListener("ended", () => {
    const infoP = document.querySelector(".info_p");
    infoP.innerHTML = "HOTOVO";

      // Clear PIN input fields
      const inputFields = document.querySelectorAll("#keyboardPin .letter");
      for (const inputField of inputFields) {
        inputField.textContent = "";
        inputField.value = "";
      }

      // Update the text to indicate payment confirmation
      const textClickChange = document.querySelector(".payment-dis h3");
      textClickChange.textContent = "Platba uhrazena";

      // Kontrola stavu zásobníku
      const stavZasobniku = zasobnik.get_aktualniObjem();
      stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml ${hlaska}`
      document.querySelector(".bg-zasobnik").innerHTML = html

      const stavZasobnikuKava = zasobnikKava.get_aktualniObjem()
      stavZasobnikuK.textContent = `Zásobník káva ${stavZasobnikuKava} g ${hlaska2}`
      document.querySelector(".bg-zasobnik1").innerHTML = html_kava

// Odečtení požadovaného objemu vody
if (stavZasobniku >= objem && stavZasobnikuKava >= objemKava) {
  stavZasobniku -= objem;
  stavZasobnikuKava -= objemKava;

  // Aktualizace stavu zásobníku
  const zasobnikP = document.querySelector(".bg-zasobnik");
  const stavZasobnikuP = zasobnikP.querySelector(".zasobnik");
  stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml`;

  const zasobnikK = document.querySelector(".bg-zasobnik1")
  const stavZasobnikuK = zasobnikK.querySelector(".zasobnik-kava")
  stavZasobnikuK.textContent = `Zásobník káva ${stavZasobnikuKava} g ${hlaska2}`

} else {
  // Zobrazení upozornění
  const zasobnikP = document.querySelector(".bg-zasobnik");
  const stavZasobnikuP = zasobnikP.querySelector(".zasobnik");
  stavZasobnikuP.textContent = `Zásobník voda ${hlaska}`;

  const zasobnikK = document.querySelector(".bg-zasobnik1")
  const stavZasobnikuK = zasobnikK.querySelector(".zasobnik-kava")
  stavZasobnikuK.textContent = `Zásobník káva ${hlaska2}`;
}


    });
  });
});








// import Zasobnik from "./zasobnik.js"
// import Zasobnik_kava from "./zasobnik_kava.js"
// // import Keyboard from './keyboard.js'
// import { kava } from "./data.js"

// let zasobnikKava = new Zasobnik_kava()
// let zasobnik = new Zasobnik()
// // let keyboard = Keyboard()
// const objem = 200
// const objemKava = 10

// // Přidání události kliknutí na tlačítko po načtení DOM
// // Vybrání všech tlačítek s třídou .btn_vyber

// window.addEventListener("DOMContentLoaded", () => {

//   const buttons = document.querySelectorAll(".btn_vyber")
//   const hlaska = "Je málo vody, doplň zásobník."
//   const hlaska2 = "Je málo kávy, doplň zásobník"
//   const html = `<p>${hlaska}</p>`
//   const html_kava = `<p>${hlaska2}</p>`
  

//   // Přidání události kliknutí na každé tlačítko
//   // Kontrola stavu zásobníku

//   buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {

//       const stavZasobniku = zasobnik.get_aktualniObjem() - objem
//       const stavZasobnikuKava = zasobnikKava.get_aktualniObjem() - objemKava

//       if (stavZasobniku >= objem) {
//         zasobnik.textContent = `Zásobník <br> ${stavZasobniku} ml`
//         console.log(stavZasobniku)
//         zasobnik.textContent = `Zásobník <br> ${stavZasobnikuKava} g`
//         console.log(stavZasobnikuKava)

//         // Získání vybrané kávy
//         const selectedKava = kava.find((kava) => kava.id === button.id)
//         console.log(selectedKava)

//         // Zobrazení informácí o kávě
//         const infoP = document.querySelector(".info_p")
//         infoP.innerHTML = `Vybrali jste ${selectedKava.druh} cena ${selectedKava.cena} Kč.`

//         // Přehrání zvuku
//         const audio = new Audio("./sound/coffee-machine.mp3")
//         audio.play()

//         // Po přehrání zvuku vypiš "HOTOVO!"
//         audio.addEventListener("ended", () => {
//           const infoP = document.querySelector(".info_p")
//           infoP.innerHTML = "HOTOVO"
//         })

//         // Odečítá objem kávy od aktuálního stavu zásobníku
//         zasobnik.set_aktualniObjem(zasobnik.get_aktualniObjem() - objem)
//         zasobnikKava.set_aktualniObjem(zasobnikKava.get_aktualniObjem() - objemKava)

//         // Nastavení hodnoty vlastního atributu textContent elementu .zasobnik
//         const zasobnikP = document.querySelector(".bg-zasobnik")
//         zasobnikP.querySelector(".zasobnik").textContent = `Zásobník voda ${stavZasobniku} ml`
//         const zasobnikK = document.querySelector(".bg-zasobnik1")
//         zasobnikK.querySelector(".zasobnik-kava").textContent = `Zásobník káva ${stavZasobnikuKava} g`

//       } else {

//         // Vypisuje aktuální stav zásobníku
//         const zasobnikP = document.querySelector(".bg-zasobnik")
//         const stavZasobnikuP = zasobnikP.querySelector(".zasobnik")
//         stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml ${hlaska}`
//         document.querySelector(".bg-zasobnik").innerHTML = html
//         console.log(hlaska)

//         // Vypisuje aktuální stav zásobníku
//         const zasobnikK = document.querySelector(".bg-zasobnik1")
//         const stavZasobnikuK = zasobnikK.querySelector(".zasobnik-kava")
//         stavZasobnikuK.textContent = `Zásobník káva ${stavZasobnikuKava} g ${hlaska2}`
//         document.querySelector(".bg-zasobnik1").innerHTML = html_kava
//         console.log(hlaska2)

//       }

//     })
//   })
// })
