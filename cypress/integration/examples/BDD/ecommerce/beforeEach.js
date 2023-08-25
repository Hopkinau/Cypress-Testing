before(() => {
  // root-level hook
  // runs once before all tests
  cy.fixture('example').then(function (data) {
    this.data = data;
    //this.data is a global variable, then this data will be available in all test cases
  });
  //import jason data from example.json
});
