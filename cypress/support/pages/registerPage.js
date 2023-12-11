export class RegisterPage {
   constructor(){
    this.registroUsuario = "#user"
    this.contraseñaUsuario = "#pass"
    this.genderUsuario = '[value="Male"]'
    this.dayUsuario = "#day"
    this.monthUsuario = "#month"
    this.yearUsuario = "#year"
   }
   escribirRegistroUsuario(usuario){
    cy.get( this.registroUsuario).type(usuario)
   }
   escribirRegistroContraseña(contraseña){
    cy.get(this.contraseñaUsuario).type(contraseña)
   }
   selectGender(){
    cy.get(this.genderUsuario).check({ force: true })
   }
   selectDay(value){
   cy.get(this.dayUsuario).select(value)
   }
   selectMonth(month){
    cy.get(this.monthUsuario).select(month)
   }
   selectYear(year){
    cy.get(this.yearUsuario).select(year)
   }
}

