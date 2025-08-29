export class Login {

    constructor(){
        this.buttonLogin = () => cy.get('[type="button"]');
        
        this.register = () => cy.get('[data-cy="btn-register-user"]');
    }

    clickButtonLogin(){
        this.buttonLogin().eq(0).click({force: true});
        cy.url('https://ticketazo.com.ar/auth/login')
    }

    clickButtonRegister(){
        this.register().click();
        cy.url('https://ticketazo.com.ar/auth/registerUser');
    }

}