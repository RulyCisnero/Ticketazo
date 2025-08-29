class index {
    constructor(){
       this.index =  cy.get('[data-cy="nav-interacciones-ui"]')
    }


    clicIndex(){
        this.index().click();
    }
}