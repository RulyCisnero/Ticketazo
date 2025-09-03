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

    it('HAppyPath', () => {
        register.registerForm();
        register.clickButtonRegister();
    });

    it('Usuario registrado (Existente)', () => {
        register.registerForm({});
        register.clickButtonRegister();
        register.DniExistente();
    });

    it('no envía si hay campos requeridos vacíos', () => {
        // Click directo sin completar nada
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

    it('campo nombre y apellido sin datos', () => {
        register.registerForm({ nombre: ' ', apellido: ' ' });
        register.clickButtonRegister();
    });

    it('ingreso de letras en campos de telefono', () => {
        register.registerForm({ telefono: 'SupuestoNr' })
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

    it('ingreso de letras en campo DNI', () => {
        register.registerForm({ dni: 'SupuestoNr' })
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

    it('teléfono inválido (<10 dígitos)', () => {
        register.registerForm({ telefono: '1234' });
        register.clickButtonRegister();
        register.telefono().then(($i) => {
            expect($i[0].checkValidity()).to.equal(false);
        });
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
    });

    it('no envía si los emails NO coinciden', () => {
        //No me anda
        register.registerForm({
            email: `raul.qa+${Date.now()}@example.com`,
            confirmarEmail: 'otro+correo@example.com'
        });
        register.ButtonRegister();
    });

    it('fecha incompleta - falta día', () => {
        register.registerForm({
            fecha: { day: '', month: 10, year: 1992 }
        });
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

    it('fecha incompleta - falta mes', () => {
        register.registerForm({
            fecha: { day: 27, month: '', year: 1992 }
        });
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

    it('fecha está incompleta', () => {
        // Pasamos fechaNac ="dd/mm/aaaa"
        register.registerForm({ fecha: { day: '', month: '', year: '' } });
        register.clickButtonRegister();
        register.messageErrorGenerico();
        register.assertFormInvalid();
    });

});

