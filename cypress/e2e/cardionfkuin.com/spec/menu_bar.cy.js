import { BUTTON, DOMAIN } from "../locator";

describe("Menu Bar", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Open About", () => {  
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.ABOUT).click();
    cy.get(BUTTON.HAMBURGER_CLOSE).click();
    cy.contains("What is Cardion?").should("be.visible");
  });

  it("Open Event", () => {  
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.EVENT).click();
    cy.get(BUTTON.HAMBURGER_CLOSE).click();
    cy.contains("Our Event").should("be.visible");
  });

  it("Open Gallery", () => {  
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.GALLERY).click();
    cy.get(BUTTON.HAMBURGER_CLOSE).click();
    cy.contains("Wonderfull Moments").should("be.visible");
  });

  it("Open Contact", () => {  
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.CONTACT).click();
    cy.get(BUTTON.HAMBURGER_CLOSE).click();
    cy.contains("Get in Touch").should("be.visible");
  });
});
