export class ShoppingCardPage {
    
    verificarPrecio(nombreProducto, precioEsperado) {
      cy.get(`p[name="${nombreProducto}"]`).contains(nombreProducto)
      .parents('div[class="css-1l5ko5i"]')
      .find(`p[name="${precioEsperado}"]`)
      .invoke('text').then((precio) => {
        expect(precio).to.include(precioEsperado)
        })
    } 
    verificarNombre(precioProducto, ProductoEsperado) {
      cy.get(`p[name="${precioProducto}"]`).contains(precioProducto)
      .parents('div[class="css-1l5ko5i"]')
      .find(`p[name="${ProductoEsperado}"]`)
      .invoke('text').then((text) => {
        expect(text).to.include(ProductoEsperado)
        })
    } 
    verificarTotalPrice(productos) { 
      let totalEsperado = 0
      productos.forEach((producto) => {
        totalEsperado += parseFloat(producto.precio);
      })
      cy.get('#price').then(($totalProducto) => {
        const totalCalculado = parseFloat($totalProducto.text().replace('$', ''))
        expect(totalCalculado).to.equal(totalEsperado);
      });
    }
}
 