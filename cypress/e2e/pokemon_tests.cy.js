import * as pokemon from "../locators/pokemons.json";
import * as pokemon_data from "../helpers/default_data.json";

describe('buying an avatar', function() {

    beforeEach('The beginning of the test', function() {
        cy.visit('/');
    });

    it('e2e avatar purchase test', function() {
        cy.get(pokemon.email).type(pokemon_data.login);
        cy.get(pokemon.password).type(pokemon_data.password);
        cy.get(pokemon.submit).click();
        cy.wait(3000);
        cy.get(pokemon.id).click({force: true});
        cy.get(pokemon.shop_link).click();
        cy.get(pokemon.available_button).first().click({force: true})
        cy.get(pokemon.credit).type('4620869113632996');
        cy.get(pokemon.cvv).type('125');
        cy.get(pokemon.date).type('1225');
        cy.get(pokemon.name).type('NAME');
        cy.get(pokemon.pay_button).click();
        cy.get(pokemon.cardnumber).type('56456');
        cy.get(pokemon.payment_sub_but).click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
})