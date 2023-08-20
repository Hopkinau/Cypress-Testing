//Cypress-Spec for Test1

describe('My First Test Suite', function () {
  it('My First Test Case', function () {
    //First Steps visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.product:visible').should('have.length', 4);
    //only visible products should be tested
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);
    //Parent child chaining, Products is parent and product is child
    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click();
    //chose the 2rd product and click on ADD TO CART button
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textName = $el.find('h4.product-name').text();
        if (textName.includes('Cashews')) {
          cy.wrap($el).contains('ADD TO CART').click();
          //button is tag name
        }
      });

    cy.get('.brand').should('have.text', 'GREENKART');
    //To Check whether the logo text is correct or not
    cy.get('.brand').then(function (logoElement) {
      cy.log(logoElement.text());
    });
    //Because of async nature of Cypress, we need to use then function to
    //use text (),because text () is Jquery function and it is not Cypress function
    //print the text of the logo
  });
});

//Cypress-Spec for Test1
