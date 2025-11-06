// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
import './commands';
// cypress/support/e2e.ts or cypress/support/index.ts

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the jQuery is not defined error and let the tests continue
    if (err.message.includes('jQuery is not defined')) {
      return false;  // Prevent Cypress from failing the test
    }
    return true;  // All other errors will fail the test
  });
  