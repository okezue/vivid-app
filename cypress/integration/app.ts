import { testData } from "../../src/test/seed/data";

describe("Dashboard", () => {
  it("should redirect to /login for unauthenticated users", () => {
    cy.visit(`/app`);
    cy.url().should("include", "login");
  });

  it("should show the onboarding for newly authenticated users", () => {
    const userId = testData.users[0].id;

    cy.auth(userId);
    cy.visit("/app");
    cy.url().should("include", "app");
  });
});
