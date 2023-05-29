// mealPage.js
class MealPage {
    get addMealHeading() {
      return cy.xpath(`//h2[contains(., "Add a Meal")]`);
    }
  
    Inputfield(name,description,price) {
      cy.xpath('//label[contains(.,"Name:")]/input').type(name);
      cy.xpath('//label[contains(.,"Description:")]/input').type(description);
      cy.xpath('//label[contains(.,"Price:")]/input').type(price);
    }
  
    get submitButton() {
      return cy.get('button[type="submit"]');
    }
  
    checkMealAdded(mealName) {
      return cy.xpath(`//h3[contains(., "${mealName}")]`);
    }
  }
  
  export default new MealPage();
  