import Zasobnik from "./zasobnik.js";
import Zasobnik_kava from "./zasobnik_kava.js";
import { objem, objemKava } from "./script.js";

let zasobnikKava = new Zasobnik_kava();
let zasobnik = new Zasobnik();

export function zkontrolujStavZasobniku() {
    // Získání aktuálního stavu zásobníku
    const stavZasobniku = zasobnik.get_aktualniObjem();
    const stavZasobnikuKava = zasobnikKava.get_aktualniObjem();
    const hlaska = "Je málo vody, doplň zásobník.";
    const hlaska2 = "Je málo kávy, doplň zásobník";
    const html = `<p>${hlaska}</p>`;
    const html_kava = `<p>${hlaska2}</p>`;
  
    // Kontrola stavu zásobníku
    if (stavZasobniku < objem || stavZasobnikuKava < objemKava) {
        
      // Zobrazení upozornění
      const zasobnikP = document.querySelector(".bg-zasobnik");
      const stavZasobnikuP = zasobnikP.querySelector(".zasobnik");
      stavZasobnikuP.textContent = `Zásobník voda ${stavZasobniku} ml ${hlaska}`;
      
      console.log(hlaska)

      const zasobnikK = document.querySelector(".bg-zasobnik1")
      const stavZasobnikuK = zasobnikK.querySelector(".zasobnik-kava")
      stavZasobnikuK.textContent = `Zásobník káva ${stavZasobnikuKava} g ${hlaska2}`
      
      console.log(hlaska2)
      
      // Zablokování možnosti výběru kávy
      const buttonKavy = document.querySelector(".btn-vyber");
      buttonKavy.disabled = true;
    }
  }