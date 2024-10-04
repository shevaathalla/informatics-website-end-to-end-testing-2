import { DOMAIN } from "../locator";

describe("Open Page", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Open Page", () => {
    cy.url().should("include", "zendo.id");
  });
});
