import Zasobnik from "./zasobnik.js"
import { kava } from "./data.js"

let zasobnik = new Zasobnik()
const objem = 200

// Přidání události kliknutí na tlačítko po načtení DOM
window.addEventListener("DOMContentLoaded", () => {
  // Vybrání všech tlačítek s třídou .btn_vyber
  const buttons = document.querySelectorAll(".btn_vyber")
  const hlaska = "Je málo vody, doplň zásobník."
  const html = `<p>${hlaska}</p>`
  

  // Přidání události kliknutí na každé tlačítko
    buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Kontrola stavu zásobníku
      const stavZasobniku = zasobnik.get_aktualniObjem() - objem

      if (stavZasobniku < objem) {
        // zasobnik.set_aktualniObjem(zasobnik.get_aktualniObjem() - objem)
        const zasobnikP = document.querySelector(".bg-zasobnik")
        const stavZasobnikuP = zasobnikP.querySelector(".zasobnik")
        stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml ${hlaska}`
        document.querySelector(".bg-zasobnik").innerHTML = html
        console.log(hlaska)
      } else {

        zasobnik.textContent = `Zásobník <br> ${stavZasobniku} ml`
        // Získání vybrané kávy
        const selectedKava = kava.find((kava) => kava.id === button.id)
        console.log("Káva se připravuje")

        // Zobrazení informácí o kávě
        const infoP = document.querySelector(".info_p")
        infoP.innerHTML = `Vybrali jste ${selectedKava.druh} cena ${selectedKava.cena} Kč.`

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
        
      }
      // Vypisuje aktuální stav zásobníku
      const zasobnikP = document.querySelector(".bg-zasobnik")
      const stavZasobnikuP = zasobnikP.querySelector(".zasobnik")
      stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml`
      
    })
  })
})
