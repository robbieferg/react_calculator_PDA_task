describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('Should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it("Should have working add operator", () => {
    cy.get("#number1").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
  });
  
  it("Should have working subtract operator", () => {
    cy.get("#number5").click();
    cy.get("#operator-subtract").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });
  
  it("Should have working multiply operator", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "8");
  });
  
  it("Should have working divide operator", () => {
    cy.get("#number9").click();
    cy.get("#operator-divide").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
  });

  it("Should be able to chain operations", () => {
    cy.get("#number1").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  })

});