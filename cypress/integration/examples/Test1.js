//Cypress-Spec for Test1

describe('My First Test Suite', function () {
  it('My First Test Case', function () {
    //First Steps visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.product:visible').should('have.length', 4);
    // //only visible products should be tested
    cy.get('.products').find('.product').should('have.length', 4);
    // //Parent child chaining, Products is parent and product is child
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    //chose the 2rd product and click on ADD TO CART button
    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const textName = $el.find('h4.product-name').text();
        if (textName.includes('Cashews')) {
          cy.wrap($el).contains('ADD TO CART').click();
          //button is tag name
        }
      });
  });
});

//Cypress-Spec for Test1
