export class LoginPage {
    constructor() {
        this.usuarioInput = "input[name='user']"
        this.contraseñaInput = '#pass'
        this.loginButton = "#submitForm"
    }
    escribirUsuario(loginUsuario){
        cy.get(this.usuarioInput).type(loginUsuario)
    }
    escribirContraseña(loginContraseña){
        cy.get(this.contraseñaInput).type(loginContraseña)
    }
    clickLogin() {
        cy.get(this.loginButton).click()
    }
}