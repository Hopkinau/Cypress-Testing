//Cypress-Spec for Test1

describe('My First Test Suite', function () {
  it('My First Test Case', function () {
    //First Steps visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
  });
});

//Cypress-Spec for Test1
