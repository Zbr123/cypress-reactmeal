/// <reference types="cypress" />
import 'cypress-xpath';
import MealPage from '../../support/meal';


describe('Scenario 2: Adding a meal with correct data', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

const testScenarios = [
  {
    mealName: "Chowmein",
    description: "Delicious food",
    quantity: "5"
  }
];

  testScenarios.forEach((scenario, index) => {
    it(`Shelly should be able to add a meal with correct data - Test ${index + 1}`, () => {
      //Adding a Meal
      MealPage.addMealHeading.should('have.text', 'Add a Meal');
      MealPage.Inputfield(scenario.mealName, scenario.description, scenario.quantity)
      MealPage.submitButton.click();
      MealPage.checkMealAdded(scenario.mealName).should('have.text', scenario.mealName);
    });
  });
});


