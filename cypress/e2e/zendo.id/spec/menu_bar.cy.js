import { BUTTON, DOMAIN } from "../locator";

describe("Menu Bar", () => {
  beforeEach(() => {
    cy.visit(DOMAIN);
  });

  it("Open Gabung Mitra", () => {
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.JOIN_PARTNER).click();
    cy.contains("Zendo, Lebih dari sekedar Ojek").should("be.visible");
  });

  it("Open About", () => {
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.ABOUT).click();
    cy.get(BUTTON.ZENDO_SUMU).click();
    cy.contains("ZENDO X SUMU").should("be.visible");
    cy.wait(1000);
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.ABOUT).click();
    cy.get(BUTTON.ZENDO_IN_YOUR_CITY).click();
    cy.url().should("include", "zendo.id/lists/ojek");
    cy.wait(1000);
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.ABOUT).click();
    cy.get(BUTTON.MAP).click();
    cy.url().should("include", "zendo.id/peta-persebaran");
  });

  it("Open Layanan Kami", () => {
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.SERVICE).click();
    cy.contains("Zendo, Lebih dari sekedar Ojek").should("be.visible");
  });

  it("Open Blog", () => {
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.BLOG).click();
    cy.get(BUTTON.HELP_CENTER).click();
    cy.contains("Cara Menggunakan Layanan").should("be.visible");
  });

  it("Open Hubungi Kami", () => {
    cy.get(BUTTON.HAMBURGER).click();
    cy.get(BUTTON.CONTACT).click();
    cy.contains("Hubungi Kami").should("be.visible");
  });
});
