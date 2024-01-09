///<reference types ="cypress"/>
const constantes = require('../support/constantes')
import {LoginPage } from "../support/pages/loginPage"
import { RegisterPage } from "../support/pages/registerPage"  
import { HomePage } from "../support/pages/homePage"
import {ProductPage} from "../support/pages/productPage"
import {ShoppingCardPage} from "../support/pages/shoppingCardPage"

describe("Entrega",() =>{
     let datos
    const loginPage = new LoginPage()
    const registerPage = new RegisterPage()
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const shoppingCardPage = new ShoppingCardPage()

    before( "Datos", ()=>{
        cy.fixture("datosFixture").then(data =>{
            datos=data
        })
    })
    
    beforeEach("Login", ()=>{
        cy.visit('')
        registerPage.escribirRegistroUsuario(Cypress.env().usuario)
        registerPage.escribirRegistroContraseña(Cypress.env().contraseña)
        registerPage.selectGender()
        registerPage.selectDay("3")
        registerPage.selectMonth("July")
        registerPage.selectYear("1997")
        cy.get("#registertoggle").dblclick()
        cy.get('#user').clear()
        loginPage.escribirUsuario(Cypress.env().usuario)
        cy.get('#pass').clear()
        loginPage.escribirContraseña(Cypress.env().contraseña)
        loginPage.clickLogin()
        homePage.clickOnlineShopButton()
    })
    
    it('Agregar dos productos al Carrito', () => {
        productPage.AgregarProducto(datos.product1.name)
        productPage.AgregarProducto(datos.product2.name)
        
    })

    it("Verificar el nombre y precio de los dos productos agregados", () => {
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
    })
})

