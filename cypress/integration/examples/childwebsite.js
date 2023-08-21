describe('Handing Child Windows', function () {
  it('Handing Child Windows', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    //use Jquery to remove the target attribute, the new page will be opened in the same page

    cy.origin('https://www.qaclickacademy.com', () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
    });
  });
});
