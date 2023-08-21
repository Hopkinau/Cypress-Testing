/// <reference types="Cypress" />
import 'cypress-iframe';

describe('Frame Suite', function () {
  it('Frame Test case', function () {
    //Check boxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
  });
});
