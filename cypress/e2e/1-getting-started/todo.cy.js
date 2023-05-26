/// <reference types="cypress" />
import 'cypress-xpath';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  
//SCENARIO 1
    const items = [
      { name: 'Sushi', amount: '2' },
      // Add more items here if needed
    ];
  
    items.forEach((item) => {
      it(`Shelly should see correct item in the cart`, () => {
        cy.title().should('include', 'React App');
        cy.xpath(`//li[contains(.,'${item.name}')]`)
        cy.xpath(`//li[contains(.,'${item.name}')]//input`).type('{selectall}{backspace}' + item.amount);
        cy.xpath(`//li[contains(., '${item.name}')]//button`).click();  
        // View Cart 
        cy.xpath('//button[contains (., "Your Cart")]').click();
        cy.get('.CartItem_cart-item__1Il1F').contains(item.name);
        cy.xpath('//button[contains (., "Order")]').click();                //Order button is not working 
        cy.xpath('//button[contains (., "Close")]').click();
      });
    }); 


//SCENARIO 2
const testScenarios = [
  {
    mealName: "Chowmen",
    description: "Delicious food",
    quantity: "5"
  },

];

testScenarios.forEach((scenario, index) => {
  it(`Shelly should be able to add a meal with correct data`, () => {
    cy.xpath(`//h2[contains (., "Add a Meal")]`).should('have.text', 'Add a Meal');
    cy.xpath('//label[contains(.,"Name:")]//input').type(scenario.mealName);
    cy.xpath('//label[contains(.,"Description:")]//input').type(scenario.description);
    cy.xpath('//label[contains(.,"Price:")]//input').type(scenario.quantity);
    cy.get('button[type="submit"]').click();
    cy.xpath(`//h3[contains (., "${scenario.mealName}")]`).should('have.text', scenario.mealName);
  });
});

//SCENARIO 3
const scenario3 = [
  { name: 'Sushi', amount: '2' },
  // Add more items here if needed
];

describe('Checking Items', () => {
  scenario3.forEach((item) => {
    it(`Shelly should se correct total amount`, () => {
      cy.title().should('include', 'React App');
      cy.xpath(`//li[contains(.,'${item.name}')]`);
      cy.xpath(`//li[contains(.,'${item.name}')]//input`).type('{selectall}{backspace}' + item.amount);
      cy.xpath(`//li[contains(., '${item.name}')]//button`).click();
      // View Cart
      cy.xpath('//button[contains (., "Your Cart")]').click();
      cy.get('.CartItem_cart-item__1Il1F').contains(item.name);
      cy.xpath('//button[contains (., "Order")]').click();
      // cy.xpath('//button[contains (., "Close")]').click();
      
      cy.xpath('//div//ul[contains(@class,"Cart_cart-items__3eFBN")]')
      .find('li')
      .each((li) => {
      cy.xpath(`//li[contains(.,'${item.name}')]//span[contains(@class,'CartItem_price')]`).invoke('text').then((itemPrice) => {
      cy.xpath(`//li[contains(.,'${item.name}')]//span[contains(@class,'CartItem_amount')]`).invoke('text').then((itemQuantity) => {
      console.log(`Item price: ${itemPrice}`);
      console.log(`Item quantity: ${itemQuantity}`);
      const itemTotal = parseFloat(itemPrice.replace(/\$/g, '')) * parseInt(itemQuantity.replace(/x/g, ''));
      console.log(`Item total: ${itemTotal}`);
      cy.get('.Cart_total__JiyJx > :nth-child(2)').should('contain', itemTotal.toFixed(2));
  });
});

      });
    });
  });
});



})
