export class Navbar {
    constructor() {
        this.inicio = () => cy.get('[data-cy=nav-]');
        this.fundamentos = () => cy.get('[data-cy=nav-fundamentos]');
        this.interaccionesUI = () => cy.get('[data-cy=nav-interacciones-ui]');
        this.modales = () => cy.get('[data-cy=nav-modales]');
        this.api = () => cy.get('[data-cy=nav-pruebas-api]');
        this.autenticacion = () => cy.get('[data-cy=nav-auntenticacion]');
        this.archivos = () => cy.get('[data-cy=nav-archivos]');
        this.marcos = () => cy.get('[data-cy=nav-marcos]');
        this.rendimiento = () => cy.get('[data-cy=nav-rendimiento]');
        this.tabla = () => cy.get('[data-cy=nav-tabla-datos]');
    }

    clickInicio() {
        this.inicio().should('be.visible').click();
        cy.url().should('include','/')
    }

    clickFundamentos() {
        this.fundamentos().should('be.visible').click();
        cy.url().should('include','/fundamentos');
    }

    clickInteracciones(){
        this.interaccionesUI().should('be.visible').click();
        cy.url().should('include','/interacciones-ui');
    }
}