import { interaccionesUI } from "../support/interaccionUI/interaccionUI.js";
import { Navbar } from "../support/navbar/navbar.js"

const navbar = new Navbar();
const interacciones = new interaccionesUI();
  describe('HAppyPath-Direccion a UI', () => {
    it('ingresando a la pagina', () => {
      cy.visit('/');
      navbar.clickInteracciones();
      interacciones.TituloAndTexto();
      //interacciones.Formvisible();
      interacciones.agregarUsuarioPassword();
      interacciones.selectRole(); 
      interacciones.clickChecks();
      interacciones.clickCheckPush();
      //interacciones.clickButtnSubmit();
    });
  });

