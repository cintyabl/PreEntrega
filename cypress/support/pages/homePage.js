const constantes = require('../constantes')

export class HomePage {
   clickOnlineShopButton(){
    cy.get('a[id="onlineshoplink"]',{timeout: constantes.ESPERA}).click()
   }
}