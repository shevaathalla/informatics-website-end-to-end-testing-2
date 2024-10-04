import { BUTTON, DOMAIN } from "../locator";

describe("Search Text", () => {
  beforeEach(() => {
    // Suppress ResizeObserver loop error
    cy.on('uncaught:exception', (err) => {
      if (
        err.message.includes(
          "ResizeObserver loop completed with undelivered notifications"
        )
      ) {
        return false;
      }
    });
  });

  it("Search Project", () => {
    cy.visit(DOMAIN);
    cy.get(BUTTON.HAMBURGER).click();
    cy.contains("Mitra").should("be.visible").trigger("mouseover");
  });
});
