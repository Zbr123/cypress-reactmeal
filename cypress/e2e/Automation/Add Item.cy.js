import CartPage from '../../support/cart';
/// <reference types="cypress" />
import 'cypress-xpath';

describe('Adding items to cart and verifying cart functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const items = [
    { name: 'Sushi', amount: '2' },
  ];
  
    items.forEach((item) => {
      it(`Shelly should see the correct item "${item.name}" in the cart`, () => {
        //Adding item to the cart and checking if the cart contains the same item
        CartPage.cartItem(item.name).should('exist');
        CartPage.addItemAndCheckCart(item.name, item.amount)
        CartPage.getCartItemText().contains(item.name);
        CartPage.getButton("Order").click();
        CartPage.getButton("Close").click();
        
      });
    });
  }); 