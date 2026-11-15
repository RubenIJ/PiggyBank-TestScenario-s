describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('E2E-01: Geld overmaken', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('[name="amount"]').click();
  cy.get('[name="amount"]').type('100');
  cy.get('#root [name="description"]').click();
  cy.get('#root [name="description"]').type('dit is een test bericht{enter}');
  cy.get('#root button[type="submit"]').click();
});

it('E2E-02: Geld overmaken zonder bedrag', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('#root [name="description"]').click();
  cy.get('#root [name="description"]').type('Test zonder bedrag');
  cy.get('#root div.container').click();
  cy.get('#root button[type="submit"]').click();
});

it('E2E-03: Geld overmaken in een vreemde valuta', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('#root [name="currency"]').select('GBP');
  cy.get('[name="amount"]').click();
  cy.get('[name="amount"]').type('100');
  cy.get('#root [name="description"]').click();
  cy.get('#root [name="description"]').type('test vreemde valuta');
  cy.get('#root button[type="submit"]').click();
});

it('E2E-04: negatief bedrag overmaken', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('[name="amount"]').click();
  cy.get('[name="amount"]').type('-100');
  cy.get('#root [name="description"]').click();
  cy.get('#root [name="description"]').type('test negatief bedrag');
  cy.get('#root button[type="submit"]').click();
});

it('E2E-05: Geld overmaken zonder omschrijving', function() {
  cy.visit('http://localhost:3000/');
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root ul').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('[name="amount"]').click();
  cy.get('[name="amount"]').type('100');
  cy.get('#root form').click();
  cy.get('#root button[type="submit"]').click();
});

it('E2E-06: Geld overmaken met een bedrag hoger dan het saldo', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/transfer"]').click();
  cy.get('#root [name="toaccount"]').select('4');
  cy.get('[name="amount"]').click();
  cy.get('[name="amount"]').type('1000');
  cy.get('#root [name="description"]').click();
  cy.get('#root [name="description"]').type('kijken of je balans negatief kan');
  cy.get('#root button[type="submit"]').click();
});

it('E2E-07: naam van rekening wijzigen', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Cem avatar"]').click();
  cy.get('#root a[href="/settings"]').click();
  cy.get('[name="accountName"]').click();
  cy.get('[name="accountName"]').clear();
  cy.get('[name="accountName"]').type('Rekening van Cypress');
  cy.get('#root button[type="submit"]').click();
  cy.get('#root main a[aria-current="page"][href="/settings"]').click();
  cy.get('#root button[type="submit"]').click();
});

it('E2E-08: Transacties bekijken', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Melvin avatar"]').click();
  cy.get('#root a[href="/transactions"]').click();
});

it('E2E-09: actuele saldo controleren', function() {
  cy.visit('http://localhost:3000/')
  
  cy.get('#root img[alt="Melvin avatar"]').click();
});