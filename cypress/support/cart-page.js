// cartPage.js
class CartCheck {
    getCartItems() {
      return cy.xpath('//div//ul[contains(@class,"Cart")]/li');
    }
  
    getCartItemPrice(itemName) {
      return cy.xpath(`//li[contains(.,'${itemName}')]//span[contains(@class,'CartItem_price')]`);
    }
  
    getCartItemQuantity(itemName) {
      return cy.xpath(`//li[contains(.,'${itemName}')]//span[contains(@class,'CartItem_amount')]`);
    }
  
    getTotalAmount() {
      return cy.get('.Cart_total__JiyJx > :nth-child(2)');
    }


    
  }
  
  export default new CartCheck();
