///<reference types ="cypress"/>
const constantes = require('../support/constantes')

import { HomePage } from "../support/pages/homePage"
import {ProductPage} from "../support/pages/productPage"
import {ShoppingCardPage} from "../support/pages/shoppingCardPage"
import { CheckOutPage } from "../support/pages/checkOutPage"
import { ReciptPage } from "../support/pages/reciptPage"

describe("Preentrega",() =>{
    const usuario = Math.floor(Math.random()*100)
    let datos
    let datosCheckout
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const shoppingCardPage = new ShoppingCardPage()
    const checkOutPage = new CheckOutPage()
    const reciptPage = new ReciptPage()

    before( "Datos", ()=>{
        cy.fixture("datosFixture").then(data =>{
            datos=data
        })
        cy.fixture("checkoutFixture").then(dataCheckout=>{
            datosCheckout= dataCheckout
        })
    })
    
    it('Register, Login, Delete ' ,()=> {
        cy.request({
            url: "https://pushing-it.onrender.com/api/register",
            method: "POST",
            body :{
                "username": usuario,
                "password": "12345!",
                "gender":"male",
                "day":"8",
                "month":"4",
                "year":"1997",
            }
        }).then((respuesta) => {
            expect(respuesta.status).to.be.equal(201);
           
        })
        cy.request({
            url: "https://pushing-it.onrender.com/api/login",
            method: "POST",
            body :{
                "username": usuario,
                "password": "12345!",
            }
        }).then(respuesta => {
            cy.log(respuesta)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
        cy.visit('')
        homePage.clickOnlineShopButton()
        productPage.AgregarProducto(datos.product1.name)
        productPage.AgregarProducto(datos.product2.name)

        cy.get("#goShoppingCart").click()
        shoppingCardPage.verificarPrecio(datos.product1.name, datos.product1.price)
        shoppingCardPage.verificarNombre(datos.product1.price, datos.product1.name)
        cy.xpath("//button[text()='Show total price']").click()
        const productos = [
            { nombre: 'Black T-Shirt', precio: 15 },
            { nombre: 'White Pants', precio: 20 }
           ]
        shoppingCardPage.verificarTotalPrice(productos)
        cy.contains('button', 'Go to Checkout').click()
        checkOutPage.escribirFirstName(datosCheckout.nombre)
        checkOutPage.escribirLastName(datosCheckout.apellido)
        checkOutPage.escribirCardNumber(datosCheckout.numberCard)
        checkOutPage.clickPurchaseButton()
        
        reciptPage.verificarDatosRecipt(datosCheckout.nombre)
        reciptPage.verificarDatosRecipt(datosCheckout.apellido)
        reciptPage.verificarDatosRecipt(datosCheckout.numberCard)
        reciptPage.verificarDatosRecipt(datos.product1.name)
        reciptPage.verificarDatosRecipt(datos.product2.name)
        let precioTotalRecipt = 35
        reciptPage.verificarDatosRecipt(precioTotalRecipt)
        cy.contains('button', 'Thank you').click()
        

        
    })
    after("Delete Usuario",() =>{
        cy.request({
            method: "DELETE",
            url: `https://pushing-it.onrender.com/api/deleteuser/${usuario}`,
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(202);
        })
        cy.contains('button','Logout').click()
    })
})

