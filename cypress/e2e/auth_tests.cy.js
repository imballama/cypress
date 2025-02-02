import * as index from "../locators/index.json";
import * as result from "../locators/index.json";
import * as recovery_password from "../locators/recovery_password.json";

describe("autrhorization", function () {
    beforeEach('The beginning of the test', function () {
        cy.visit('/');
    });

    afterEach('End of the test', function () {
        cy.get('.exitButton').should('be.visible');
    });


    it("correct_authorization", function () {
        cy.get(index.email).type('german@dolnikov.ru');
        cy.get(index.password).type('iLoveqastudio1');
        cy.get(index.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Авторизация прошла успешно');
    })

    it('recovery_password', function () {
        cy.get(index.fogot_pass_btn).click();
        cy.get(recovery_password.email).type('german@dolnikov.ru');
        cy.get(recovery_password.send_button).click();
        cy.get(result.title).contains('Успешно отправили пароль на e-mail');
    })

    it('correct login and incorrect password', function() {
        cy.get(index.email).type('german@dolnikov.ru');
        cy.get(index.password).type('Qa123');
        cy.get(index.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Такого логина или пароля нет');
    })
    
    it('incorrect login and correct password', function() {
        cy.get(index.email).type('mike@abramov.ru');
        cy.get(index.password).type('iLoveqastudio1');
        cy.get(index.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Такого логина или пароля нет');
    })

    it('incorrect validation login and correct password', function() {
        cy.get(index.email).type('germandolnikov.ru');
        cy.get(index.password).type('iLoveqastudio1');
        cy.get(index.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Нужно исправить проблему валидации');
    })

    it('converting to lowercase letters in the login', function() {
        cy.get(index.email).type('GerMan@Dolnikov.ru');
        cy.get(index.password).type('iLoveqastudio1');
        cy.get(index.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Авторизация прошла успешно');
    })
})