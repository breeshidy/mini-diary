describe('weather data', function () {
  it('Shows Thermostat text!', () => {
   //vist the index(home) page
    cy.visit('/')
    // home page state hello world
    cy.get('#app').should('contain', 'The Temperature is 21C')
  })
})
