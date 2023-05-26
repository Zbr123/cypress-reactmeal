describe('Test Suite Description', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
  
    // afterEach(() => {
    //   // Code to run after each test case
    // });
    
    // before(() => {
     
    // });
  
    // after(() => {
    //   // Code to run once after all test cases in the suite
    // });
  
    it('Test Case Description', () => {
        cy.get('#amount_m1').type('3'); 
    });
  
    // Additional test cases
  
    it('Another Test Case Description', () => {
      // Another test case code
    });
  });
  