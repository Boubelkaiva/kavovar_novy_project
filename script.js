import Zasobnik from "./zasobnik.js"
import { kava } from "./data.js"

let zasobnik = new Zasobnik()
const objem = 200

// Přidání události kliknutí na tlačítko po načtení DOM
// Vybrání všech tlačítek s třídou .btn_vyber

window.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".btn_vyber")
  const hlaska = "Je málo vody, doplň zásobník."
  const html = `<p>${hlaska}</p>`

  // Přidání události kliknutí na každé tlačítko
  // Kontrola stavu zásobníku

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

      const stavZasobniku = zasobnik.get_aktualniObjem() - objem

      if (stavZasobniku >= objem) {
        zasobnik.textContent = `Zásobník <br> ${stavZasobniku} ml`

        // Získání vybrané kávy
        const selectedKava = kava.find((kava) => kava.id === button.id)

        // Zobrazení informácí o kávě
        const infoP = document.querySelector(".info_p")
        infoP.innerHTML = `Vybrali jste ${selectedKava.druh} cena ${selectedKava.cena} Kč. Káva se připravuje`

        // Přehrání zvuku
        const audio = new Audio("./sound/coffee-machine.mp3")
        audio.play()

        // Po přehrání zvuku vypiš "HOTOVO!"
        audio.addEventListener("ended", () => {
          const infoP = document.querySelector(".info_p")
          infoP.innerHTML = "HOTOVO"
        })

        // Odečítá objem kávy od aktuálního stavu zásobníku
        zasobnik.set_aktualniObjem(zasobnik.get_aktualniObjem() - objem)

        // Nastavení hodnoty vlastního atributu textContent elementu .zasobnik
        const zasobnikP = document.querySelector(".bg-zasobnik")
        zasobnikP.querySelector(".zasobnik").textContent = `Zásobník voda ${stavZasobniku} ml`

      } else {

        // Vypisuje aktuální stav zásobníku
        const zasobnikP = document.querySelector(".bg-zasobnik")
        const stavZasobnikuP = zasobnikP.querySelector(".zasobnik")
        stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml ${hlaska}`
        document.querySelector(".bg-zasobnik").innerHTML = html
        console.log(hlaska)

      }

    })
  })
})
