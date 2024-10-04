import { DOMAIN } from "../locator";

describe("Search Text", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Search Project", () => {
    cy.contains("siperbang").should("be.visible").trigger("mouseover");
  });
});
