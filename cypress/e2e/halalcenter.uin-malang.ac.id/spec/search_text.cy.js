import { DOMAIN } from "../locator";

describe("Search Text", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Search Project", () => {
    cy.contains("Archives").should("be.visible").trigger("mouseover");
  });
});

