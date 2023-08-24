/// <reference types="Cypress" />
import 'cypress-iframe';
import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';
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
    // Cypress.config('defaultCommandTimeout', 8000);
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    const homePage = new HomePage();

    homePage.getEditBox().type(this.data.name);

    homePage.getGender().select(this.data.gender);

    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneur().should('be.disabled');
    homePage.getShopTab().click();

    this.data.productName.forEach((x) => {
      cy.selectProduct(x);
    });
    const productPage = new ProductPage();
    productPage.checkOutButton().click();
    let sum = 0;
    cy.get('tr td:nth-child(4) strong')
      .each((el, index, list) => {
        const amonut = el.text();
        let res = amonut.split(' ');
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get('h3 strong').then(function (element) {
      const amount = element.text();
      let res = amount.split(' ');
      let total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get("input[type='submit']").click();
    cy.get('.alert').then(function (element) {
      const text = element.text();
      expect(text.includes('Success')).to.be.true;
    });

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
