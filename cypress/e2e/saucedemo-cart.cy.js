describe('SauceDemo - Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('contain', '1');

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible');

    cy.screenshot('produto-adicionado-carrinho-saucedemo');
  });
});

describe('SauceDemo - Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('contain', '1');

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible');

    cy.screenshot('produto-adicionado-carrinho-saucedemo');
  });

  it('Deve validar produto adicionado na página do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.url().should('include', '/cart.html');
    cy.get('.title').should('contain', 'Your Cart');

    cy.get('[data-test="inventory-item-name"]')
      .should('be.visible')
      .and('contain', 'Sauce Labs Backpack');

    cy.get('[data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$29.99');

    cy.get('[data-test="checkout"]').should('be.visible');

    cy.screenshot('validacao-carrinho-saucedemo');
  });
});