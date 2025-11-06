import { getGreeting } from '../support/app.po';

describe('liveapp-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('#radio2').check().should('be.checked');
    cy.get('#radio1').should('not.be.checked');
    cy.get('#check1').check().should('be.checked');
    cy.get('#dropdown').select('Two').should('have.value', 'Two');
    const date = '2025-12-25';
    cy.get('#datepicker').type(date).should('have.value', date);
  });
});
// describe('GraphQL Greeting Test', () => {
//   it('should display greeting from Apollo Server', () => {
//     cy.visit('/');
//     cy.contains('Hello from Apollo Server!');
//   });
// });
