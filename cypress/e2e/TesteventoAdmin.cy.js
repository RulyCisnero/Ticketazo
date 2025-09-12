import { EventoAdminn } from '../support/Administrador/AdminEvento/eventoAdmin';
import { ClientesRegistrados } from '../support/Administrador/AdminUsuario/Clientes';
import { SuperAdmin } from '../support/Administrador/AdminLogin/SuperAdmin';

const evento = new EventoAdminn();
const cliente = new ClientesRegistrados();
const admin = new SuperAdmin();

describe('Tareas relacionadas con el admin', () => {
  beforeEach('visitando la pagina', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    admin.visitandoPaginaAdmin();
    cy.wait(1000);
    cy.get('.justify-end > .text-sm').click();
    cy.wait(1000);
    admin.credencialesValidasAdmin("admin@admin.com", "admin");
    admin.clickButtonLogin();
    cy.wait(1000);
  })


  it('Deberia buscar a la persona que organiza el evento para dar de alta ', () => {
    cy.get('[type="button').eq(1).click();
    cy.wait(1000)
    evento.clickAdminEventos();
    cy.wait(5000)
    evento.bttnCreado().click();
    cy.wait(2000);
    evento.cambiarEstadoDeEventoPorTexto('🎉💀ñ@#', 'Aprobado');
    cy.wait(2000)
    evento.clickModalAceptar();
    cy.wait(2000)

    /* 
    evento.obtenerFilaPorTexto('MegaTest').within(() => {
      cy.get('[data-cy^="select-estado-"]').click();
    });
    evento.obtenerDatosFila('Grupo 7').then(datos => {
      expect(datos.email).to.eq('raulecisnero@gmail.com');
      //expect(datos.estado).to.contain('Rechazado');
    }); */

  });

 /*  it('Cambiando el estado del cliente', () => {
    cy.get('[type="button').eq(1).click();
    cy.wait(1000)
    cliente.clickAdminClientes();
    cy.wait(6000);
    cliente.bttnPendiente().click();
    cliente.cambiarEstadoDeClientePorTexto('@¦¦', 'Rechazado');
    cy.wait(1000)
    cliente.clickModalAceptar();
  });

  it('Volviendo al estadio anterior del cliente', () => {
    cy.get('[type="button').eq(1).click();
    cy.wait(1000)
    cliente.clickAdminClientes();
    cy.wait(6000);
    cliente.bttnRechazado().click();
    cliente.cambiarEstadoDeClientePorTexto('@¦¦', 'Pendiente');
    cy.wait(1000)
    cliente.clickModalAceptar();
  }); */
})