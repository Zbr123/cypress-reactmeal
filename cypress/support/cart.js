// cartPage.js
class CartPage{
    cartItem(name) {
      return cy.xpath(`//li[contains(.,'${name}')]`);
    }
  
    addItemAndCheckCart(name,quantity) {
      cy.xpath(`//li[contains(.,'${name}')]//input`).type('{selectall}{backspace}' + quantity);
      cy.xpath(`//li[contains(., '${name}')]//button`).click();
      cy.xpath('//button[contains(., "Your Cart")]').click();
    }
  
    getCartItemText() {
      return cy.get('.CartItem_cart-item__1Il1F');
    }
  
    getButton(text) {
      return cy.xpath(`//button[contains(., "${text}")]`);
    }


  }
  
  export default new CartPage();
  