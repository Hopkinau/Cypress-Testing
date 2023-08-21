describe('My Mouse Hover Suite', function () {
  it('My Mouse Hover case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
    //check whether the new url include top this word
  });
});
