import { DOMAIN } from "../locator";

describe("Search Text", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Search Project", () => {
    cy.contains("Project").should("be.visible").trigger("mouseover");;
  });
});
