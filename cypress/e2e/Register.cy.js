import { Login } from '../support/login/login';
import { RegisterForm } from '../support/register/register-form';

const login = new Login();
const register = new RegisterForm();

describe('Epica Login', () => {
    beforeEach('visitando la pagina', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
        cy.wait(400);
        login.clickButtonLogin();
        cy.wait(1000)
        login.clickButtonRegister();
        cy.wait(400)
    })
/* 
    it('HAppyPath-Direccion a UI', () => {
        register.registerForm();
    });

    it('teléfono inválido (<10 dígitos)', () => {
        register.registerForm({ telefono: '1234' });
        register.clickButtonRegister();
        register.telefono().then(($i) => {
            expect($i[0].checkValidity()).to.equal(false);
        });
        //assertNoRegisterRequest();
    });

    it('Dni invalido (<8 digitos)', () => {
        register.registerForm({ dni: '1234' });
        register.clickButtonRegister();
        register.dni().then(($i) => {
            expect($i[0].checkValidity()).to.equal(false);
        });
    });

    it('no envía con email inválido (type="email")', () => {
        register.registerForm({ email: 'raul@', confirmarEmail: 'raul@' });
        register.ButtonRegister();
        register.email().then(($i) => {
            expect($i[0].checkValidity()).to.equal(false);
        });
        //assertNoRegisterRequest();
    }); */

   /*  it('no envía si los emails NO coinciden (si tu UI lo valida)', () => {
        // Si la app no valida en front esta regla, este test fallará: ajustalo según comportamiento real.
       register.registerForm({
            email: `raul.qa+${Date.now()}@example.com`,
            confirmarEmail: 'otro+correo@example.com'
        });
        register.ButtonRegister();
        // Esperamos que el front evite enviar al backend
        //assertNoRegisterRequest();

        // (Opcional) si hay mensaje de error
        // cy.contains(/emails? no coinciden/i).should('be.visible');
    }); */

    it('fecha está incompleta', () => {
    // Pasamos fechaNac = false para dejar "dd/mm/aaaa"
    register.registerForm({fechaNac});

    register.clickButtonRegister();

    // El DateField incluye un input hidden required -> debe invalidar el form
    cy.get('input:invalid').its('length').should('be.greaterThan', 0);
    //assertNoRegisterRequest();
  });

});

