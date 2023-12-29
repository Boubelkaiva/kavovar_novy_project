export default class Zasobnik {

  #maxObjem
  #minObjem
  #aktualniObjem
  #objemPrvku
  #odeberVodu
  #return
  
  constructor() {
      this.#maxObjem = 1000
      this.#minObjem = 0
      this.#aktualniObjem = 1000
      
  }
  
  get_maxObjem() {
      return this.#maxObjem
  }

  get_minObjem() {
      return this.#minObjem
  }

  get_aktualniObjem() {
      return this.#aktualniObjem
  }

  set_aktualniObjem(objem) {
    this.#aktualniObjem = objem
  }

  get_odeberVodu() {
    return this.#odeberVodu
  }

  set_odeberVodu(objemPrvku) {
    this.#objemPrvku = objemPrvku
    
  }

}