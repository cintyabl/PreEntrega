export class ShoppingCardPage {
    
    verificarPrecio(nombreProducto, precioEsperado) {
      cy.get(`p[name="${nombreProducto}"]`).contains(nombreProducto)
      .parents('div[class="css-1l5ko5i"]') // Selector para el contenedor común, ajusta según tu HTML
      .find(`p[name="${precioEsperado}"]`) // Selector para el precio dentro del mismo contenedor, ajusta según tu HTML
      .invoke('text').then((precio) => {
        expect(precio).to.include(precioEsperado)
        })
    } 
    verificarNombre(precioProducto, ProductoEsperado) {
      cy.get(`p[name="${precioProducto}"]`).contains(precioProducto)
      .parents('div[class="css-1l5ko5i"]') // Selector para el contenedor común, ajusta según tu HTML
      .find(`p[name="${ProductoEsperado}"]`) // Selector para el precio dentro del mismo contenedor, ajusta según tu HTML
      .invoke('text').then((text) => {
        expect(text).to.include(ProductoEsperado)
        })
    } 
    verificarTotalPrice(preciosProductosSeleccionados) {
     
      function sumar(...numeros) {
        return numeros.reduce((total, numero) => total + numero, 0);
      }
      const precioTotalProductos = sumar(...preciosProductosSeleccionados)
      cy.get("#price > b").invoke('text').then((precioTotal) => {
        expect(precioTotal).to.equal(precioTotalProductos)
      })
     
    }
    
      // const preciosArray = Object.values(preciosProductosSeleccionados)
      // const precioTotalProductos = preciosArray.reduce((total, precio) => total + precio, 0);


    // verificarTotalPrice(preciosProductosSeleccionados){ 
    //   const precioTotalProductos = preciosProductosSeleccionados.reduce((total, precio) => total + precio)
    //   cy.get("#price > b").invoke('text').then((textoPrecioTotal) => {
    //     const precioTotalPagina = parseInt(textoPrecioTotal)
    //     cy.get("#productPrice").should('have.text', preciosProductosSeleccionados).then( () =>{
    //       expect(precioTotalPagina).to.equal(precioTotalProductos)
    //     })
    //   })
    // }

     // let total = 0
      // cy.get('.css-1l5ko5i').each(($el) => {
      //   const precioProducto = parseInt($el.find('p[id="productPrice"]').attr('name').replace('$', ''))
      //   total += precioProducto
      // })
      // .then(() => {
      //   expect(total).to.equal(precioEsperado)
      // })

 // function sumar(...numeros) {
      //   return numeros.reduce((total, numero) => total + numero, 0);
      // }
      // const precioTotalProductos = sumar(...preciosProductosSeleccionados)
      
      // cy.get("#price > b").invoke('text').then((precioTotal) => {
      //   expect(precioTotal).to.equal(precioTotalProductos)
      // })
        //     const precioTotalPagina = parseInt(textoPrecioTotal)
      //  cy.get("#price > b").
      //       .should('have.text', preciototal).then(() => {
      //         expect(precioTotalPagina).to.equal(precioTotalProductos);
      //       });
      //   });
    
    
// cy.get('div[class="css-1l5ko5i"]').should('have.text', nombreProducto)
//       .and('have.text', precioEsperado)
      
// verificarNombre(productName,productPrice){
    //     cy.get(`p[name="${productName}"]`).invoke('text').then( (nombre)=> {
    //       cy.get(`p[name="${productPrice}"]`).invoke('text').then((precio) => {
    //         expect(precio).siblings(nombre)
    //       })
    //       expect(nombre).to.eql(nombreEsperado);
    //     })
    // }
// verificarNombrePrecioPorId(nombreId, precioId) => {
//   cy.get(`#${nombreId}`).invoke('text').then((nombre) => {
//     cy.get(`#${precioId}`).invoke('text').then((precio) => {
//       expect(precio).to.include(nombre.trim());
//     });
//   });
// 
}
