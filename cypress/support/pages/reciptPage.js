export class ReciptPage {

    verificarDatosRecipt(datosTicket) {
        cy.get('div[class="chakra-modal__body css-1tcqc9o"]',{timeout:13000})
        .then((textoDelDiv) => {
          expect(textoDelDiv).to.contain(datosTicket);
        })
    }
}