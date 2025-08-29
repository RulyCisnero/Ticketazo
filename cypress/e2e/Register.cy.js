import { Login } from '../support/login/login';
import { RegisterForm }from '../support/register/register-form';

const login = new Login();
const register = new RegisterForm();


describe('Epica Login', () => {
    beforeEach('visitando la pagina', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
    })

  it('HAppyPath-Direccion a UI', () => {
    cy.wait(400);
    login.clickButtonLogin();
    cy.wait(1000)
    login.clickButtonRegister();
    cy.wait(400)
    register.registerForm(); 
  });

  
});

