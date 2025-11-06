describe('Direct GraphQL API Test', () => {
    it('should return hello from GraphQL API', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:4000/graphql',
        body: {
          query: `{ hello }`
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.hello).to.eq('Hello from Apollo Server!');
      });
    });
  });
  