describe('SauceDemo - Checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.url().should('include', '/cart.html');
  });

  it('Deve realizar checkout completo com sucesso', () => {
    cy.get('[data-test="checkout"]').click();

    cy.url().should('include', '/checkout-step-one.html');
    cy.get('.title').should('contain', 'Checkout: Your Information');

    cy.get('[data-test="firstName"]').type('Bruno');
    cy.get('[data-test="lastName"]').type('Ramos');
    cy.get('[data-test="postalCode"]').type('72000-000');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('contain', 'Checkout: Overview');

    cy.get('[data-test="inventory-item-name"]')
      .should('be.visible')
      .and('contain', 'Sauce Labs Backpack');

    cy.get('[data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$29.99');

    cy.get('[data-test="subtotal-label"]')
      .should('be.visible')
      .and('contain', 'Item total: $29.99');

    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.title').should('contain', 'Checkout: Complete!');

    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('contain', 'Thank you for your order!');

    cy.screenshot('checkout-completo-saucedemo');
  });
});

