export class interaccionesUI {
    constructor() {
        this.titulo = () => cy.get('.mb-8');
        this.form = () => cy.get('data-cy="interaction-form"');
        this.username = () => cy.get('[data-cy="username-input"]');
        this.email = () => cy.get('[data-cy="email-input"]');
        this.password = () => cy.get('[data-cy="password-input"]');
        this.confirmpass = () => cy.get('[data-cy="confirm-password-input"]');
        this.select = () => cy.get('[data-cy="role-select"]');
        this.checkEmail = ()=> cy.get('[data-cy="notification-email"]');
        this.checkSmn = ()=> cy.get('[data-cy="notification-sms"]');
        this.checkPush = () => cy.get('[data-cy="notification-push"]');
        this.checkTermConditions = () => cy.get('[data-cy="terms-checkbox"]');
        this.checkTermConditions2 = () =>cy.get('[data-cy="terms-checkbox"]');
        this.buttnSubmit = () => cy.get ('[data-cy="submit-button"]')
    }

    TituloAndTexto() {
       this.titulo().contains('h1','UI Interactions');
       this.titulo().contains('p','Practice Cypress testing with this interactive form featuring various input types and validations.'); 
    };
    
    Formvisible() {
        this.form().should('be.visible');
    }

    agregarUsuarioPassword(){
        this.username().type('Ruly');
        this.email().type('Tester@gmail.com')
        this.password().type('Tester123@');
        this.confirmpass().type('Tester123@');
    }

    selectRole(){
        this.select().select('Designer');
    }
    
    clickCheckPush(){
        this.checkPush().contains('Push').click();
    }
    clickChecks(){
        this.checkEmail().click();
    }

    clickButtnSubmit(){
        this.buttnSubmit().click();
    }
}