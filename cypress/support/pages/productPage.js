export class ProductPage {
    AgregarProducto(producto)  {
        cy.get(`button[value ="${producto}"]`).click()
        cy.get("#closeModal").click()
    }
}
