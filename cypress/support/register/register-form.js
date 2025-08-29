export class RegisterForm {


    constructor() {
        this.nombre = () => cy.get('[data-cy="input-nombres"]');
        this.apellido = () => cy.get('[data-cy="input-apellido"]');
        this.telefono = () => cy.get('[data-cy="input-telefono"]');
        this.dni = () => cy.get('[data-cy="input-dni"]');
        this.provincia = () => cy.get('[data-cy="select-provincia"]');
        this.localidad = () => cy.get('[data-cy="select-localidad"]');
        this.fechaNac = () => cy.get('[data-slot="input-field"]');
        this.day = () => cy.get('[data-type="day"]');
        this.mes = () => cy.get('[data-type="month"]');
        this.anio = () => cy.get('[data-type="year"]')
        this.email = () => cy.get('[data-cy="input-email"]');
        this.confirmEmail = () => cy.get('[data-cy="input-confirmar-email"]');
        this.password = () => cy.get('[data-cy="input-password"]');
        this.confirmPassword = () => cy.get('[data-cy="input-repetir-password"]');
        this.ButtonRegister = () => cy.get('[data-cy="btn-registrarse"]');

        this.lastEmail = "";
        this.lastpassword = "";
        //
        //this.provinciaList = () => cy.get('[data-slot="list"]'); // el UL de la lista
    }


    fillNombre(nombre) {
        this.nombre().clear().type(nombre);
    }

    fillApellido(apellido) {
        this.apellido().clear().type(apellido);
    }

    fillDni(dni) {
        this.dni().clear().type(dni);
    }

    fillProvincia(nombre) {
        this.provincia().click();
        cy.get('[data-cy^="option-provincia-"] span[data-label="true"]')
            .contains(nombre)
            .click({ force: true });
    }
    fillLocalidad(nombre) {
        this.localidad().click().type(nombre)
        cy.get('[data-cy^="option-localidad-"] span[data-label="true"]')
         .contains(nombre)
         .click({ force: true });
    }

    fillFecha(day, month, year) {
        this.fechaNac();
        this.day().type(day);
        this.mes().type(month);
        this.anio().type(year);
    }


    //const email = 'Test@gmail.com';
    fillEmail(email) {
        this.lastEmail = email;
        this.email().type(email);
    }

    fillconfirmEmail() {
        this.confirmEmail().type(this.lastEmail)
    }

    fillPassword(password) {
        this.lastpassword = password;
        this.password().type(password);
    }

    fillconfirmPassword() {
        this.confirmPassword().type(this.lastpassword)
    }

    clickButtonRegister() {
        this.ButtonRegister().click();
    }

    //seleccionar provincia hardcodeada
    selectProvincia() {
        this.provincia().click();
        cy.get('[data-cy^="option-provincia-"] span[data-label="true"]')
            .contains('Buenos Aires')
            .click({ force: true });
    }

    selectlocalidad() {
        this.localidad().click();
        cy.get('[data-cy^="option-localidad-"] span[data-label="true"]')
            .contains('Coronel Dorrego')
            .click({ force: true });
    }


    //funcion para traerme todos los nombres de las provincias
    //(^= significa "que empiece con")va a agarrar todos los elementos cuyo atributo data-cy arranca con option-provincia-
    logProvincias() {
        this.provincia().click()
        cy.get('[data-cy^="option-provincia-"]')
            .each(($el, index) => {
                const nombre = $el.text().trim();
                cy.log(`Provincia ${index + 1}: ${nombre}`);
                console.log(`Provincia ${index + 1}: ${nombre}`);
            });
    }

    logLocalidades() {
        this.localidad().click()
        cy.get('[data-cy^="option-localidad-"]').scrollTo('bottom')
            .each(($el, index) => {
                const nombre = $el.text().trim();
                cy.log(`localidades ${index + 1}: ${nombre}`);
                console.log(`localidades ${index + 1}: ${nombre}`);
            });
    }

    logTodasLocalidades() {
        // Abrir dropdown
        this.localidad().click();

        const scrollContainer = cy.get('[class*="overflow-y-auto"]').eq(1).scrollIntoView(); // el div que tiene scroll

        let prevCount = 0;

        function scrollAndCheck() {
            cy.get(scrollContainer).then($container => {
                cy.get('[data-cy^="option-localidad-"]').then($list => {
                    cy.wait(1000)
                    const currentCount = $list.length;

                    if (currentCount > prevCount) {
                        prevCount = currentCount;
                        // Scroll al último elemento visible
                        cy.get($list[$list.length - 1]).scrollIntoView();
                        scrollAndCheck(); // recursivo hasta que no aparezcan más
                        cy.wait(1000)
                    } else {
                        // Listar todas las localidades
                        cy.get('[data-cy^="option-localidad-"] span[data-label="true"]')
                            .each(($el, index) => {
                                const nombre = $el.text().trim();
                                cy.log(`Localidad ${index + 1}: ${nombre}`);
                                console.log(`Localidad ${index + 1}: ${nombre}`);
                            });
                    }
                });
            });
        }

        scrollAndCheck();
    }



    registerForm() {
        this.nombre().type('Raul');
        this.apellido().type('Cisnero');
        this.telefono().type('20221231');
        this.dni().type('32122333');
        this.fillProvincia('Buenos Aires');
        this.fillLocalidad('Coronel Dorrego');
        //this.logTodasLocalidades()
        //this.logLocalidades();
        this.fillFecha(27, 10, 1992);
        this.fillEmail('Ruly@test.com');
        this.fillconfirmEmail('');
        this.fillPassword('1234');
        this.fillconfirmPassword('');
        this.clickButtonRegister();
    }


}