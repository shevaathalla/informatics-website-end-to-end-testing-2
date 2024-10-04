import { DOMAIN } from "../locator";

describe("Search Text", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Search Lokasi", () => {
    cy.contains("Lokasi").should("be.visible").trigger("mouseover");
  });
});
