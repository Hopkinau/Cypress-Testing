/// <reference types="Cypress" />
import 'cypress-iframe';

describe('Hooks Suite', function () {
  before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function (data) {
      this.data = data;
      //this.data is a global variable, then this data will be available in all test cases
    });
    //import jason data from example.json
  });

  it('Hooks case', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    cy.get("form input[name='name']").type(this.data.name);

    cy.get('select').select(this.data.gender);

    cy.get(':nth-child(4) > .ng-untouched').should(
      'have.value',
      this.data.name
    );
    cy.get("form input[name='name']").should('have.attr', 'minlength', '2');
    cy.get('#inlineRadio3').should('be.disabled');

    // beforeEach(() => {
    //   // root-level hook
    //   // runs before every test block
    // });

    // afterEach(() => {
    //   // runs after each test block
    // });
  });
  after(() => {
    // runs once all tests are done
  });
});
