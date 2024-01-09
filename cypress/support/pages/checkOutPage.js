export class CheckOutPage {
    constructor() {
        this.FirstNameInput = "#FirstName"
        this.LastNameInput = "#lastName"
        this.CardNumberInput = "#cardNumber"
        this.purchaseButton = "Purchase"
    }
    escribirFirstName(nombre){
        cy.get(this.FirstNameInput).type(nombre)
    }
    escribirLastName(apellido) {
        cy.get(this.LastNameInput).type(apellido)
    }
    escribirCardNumber(creditCard) {
        cy.get(this.CardNumberInput).type(creditCard)
    }
    clickPurchaseButton() {
        cy.contains('button',this.purchaseButton).click()
    }

}