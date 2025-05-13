/// <reference types="cypress" />

describe("Visit OrangeHRM", () => {

    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // Use the full login path to avoid redirection issues
  
      // Wait for the username field to be visible before typing
      cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type("Admin");
      cy.get('input[name="password"]').should('be.visible').type("admin123");
      cy.get('button[type="submit"]').click();
  
      // Confirm successful login
      cy.url({ timeout: 10000 }).should('include', '/dashboard');
    });
  
    it("Visit main URL", () => {
      cy.url().should('include', '/dashboard');
    });
  
    it("Login OrangeHRM", () => {
      cy.contains('Dashboard').should('be.visible');
    });
  
    it("Access PIM", () => {
      cy.get('.oxd-sidepanel-body').should('be.visible');
      cy.contains('.oxd-main-menu-item', 'PIM').should('be.visible').click();
      cy.url().should('include', '/pim/viewEmployeeList');
      cy.contains('Employee Information').should('be.visible');
    });
  
  });
  