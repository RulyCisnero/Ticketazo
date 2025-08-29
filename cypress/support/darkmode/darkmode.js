export class Darkmode{
    constructor(){
        this.darkmode = () => cy.get('data-cy="theme-toggle"');
    }

    clickDarkmode(){
        this.clickDarkmode().click();
    }
}