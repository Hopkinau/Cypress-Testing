describe('My Fourth Test Suite', function () {
  it('My Fourth Test Case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get("[value='Confirm']").click();

    //window:alert
    cy.on('window:alert', (str) => {
      //Mocha function
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    //window:confirm
    cy.on('window:confirm', (str) => {
      //Mocha function
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
  });
});
