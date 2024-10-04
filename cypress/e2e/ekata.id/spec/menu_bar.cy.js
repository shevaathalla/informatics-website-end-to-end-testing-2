import { WAITING_TIME } from "../../../support/common";
import { BUTTON, CONTAINER, DOMAIN } from "../locator";

describe("Menu Bar", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Click Home", () => {
    cy.get(BUTTON.HOME).click();
    cy.wait(WAITING_TIME);
    cy.contains("Innovation Solution, Trusted Result").should("be.visible");
  });

  it("Click Projects", () => {
    cy.get(BUTTON.PROJECTS).click();
    cy.wait(WAITING_TIME);
    cy.get(CONTAINER.PROJECT).should("be.visible");
  });

  it("Click Services", () => {
    cy.get(BUTTON.SERVICES).click();
    cy.wait(WAITING_TIME);
    cy.get(CONTAINER.SERVICE).should("be.visible");
  });

  it("Click Contact", () => {
    cy.get(BUTTON.CONTACT).click();
    cy.wait(WAITING_TIME);
    cy.contains("Ready to start project with us?").should("be.visible");
  });
});
