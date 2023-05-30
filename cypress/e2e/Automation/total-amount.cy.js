import CartCheck from '../../support/cart-page'
import CartPage from '../../support/cart'

import 'cypress-xpath';

/// <reference types="cypress" />

describe('Checking Items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

const scenario3 = [
  { name: 'Sushi', amount: '2' },
];

scenario3.forEach((item) => {
  it(`Shelly should see correct total amount for item "${item.name}"`, () => {
    cy.xpath(`//li[contains(.,'${item.name}')]`).should('exist');
    // Adding item to the cart
    CartPage.addItemAndCheckCart(item.name, item.amount)
    CartPage.getCartItemText().contains(item.name);
    CartPage.getButton("Order").click();
    // Checking Calculation 
    CartCheck.getCartItems().each((li) => {
      CartCheck.getCartItemPrice(item.name).invoke('text').then((itemPrice) => {
        CartCheck.getCartItemQuantity(item.name).invoke('text').then((itemQuantity) => {
          console.log(`Item price: ${itemPrice}`);
          console.log(`Item quantity: ${itemQuantity}`);
          const itemTotal = parseFloat(itemPrice.replace(/\$/g, '')) * parseInt(itemQuantity.replace(/x/g, ''));
          console.log(`Item total: ${itemTotal}`);
          CartCheck.getTotalAmount().should('contain', itemTotal.toFixed(2));
        });
      });
    });
  });
});
});
