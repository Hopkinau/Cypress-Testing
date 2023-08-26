describe('My Mock Test Suite', () => {
  it('My Mock Test Case', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

    cy.intercept(
      {
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      },
      //request
      {
        statusCode: 200,
        body: [
          { book_name: 'RestAssured with Java', isbn: 'RSU', aisle: '2301' },
        ],
      }
      //response
    ).as('bookretrievals');
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait('@bookretrievals');
  });
});
