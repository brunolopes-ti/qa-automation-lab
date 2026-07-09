describe('SauceDemo - Login', () => {
  it('Deve realizar login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
    cy.get('.inventory_list').should('be.visible');

    cy.screenshot('login-valido-saucedemo');
  });
});

it('Deve exibir erro ao tentar login com usuário inválido', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('[data-test="username"]').type('usuario_invalido');
  cy.get('[data-test="password"]').type('senha_invalida');
  cy.get('[data-test="login-button"]').click();

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match');

  cy.url().should('eq', 'https://www.saucedemo.com/');

  cy.screenshot('login-invalido-saucedemo');
});

it('Deve exibir erro ao tentar login com usuário bloqueado', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('[data-test="username"]').type('locked_out_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Sorry, this user has been locked out');

  cy.url().should('eq', 'https://www.saucedemo.com/');

  cy.screenshot('login-usuario-bloqueado-saucedemo');
  });

  