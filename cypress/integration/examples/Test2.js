//Cypress-Spec for Test1

describe('My Second Test Suite', function () {
  it('My Second Test Case', function () {
    //First Steps visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    //only visible products should be tested
    cy.get('.products').as('productLocator');
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textName = $el.find('h4.product-name').text();
        if (textName.includes('Cashews')) {
          $el.find('button').click();
          //button is tag name
        }
      });

    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  });
});

//Cypress-Spec for Test1
