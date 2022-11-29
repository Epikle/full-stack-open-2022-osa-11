describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('pokemon page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.get('.list-item').contains('charmander').click()
    cy.get('.pokemon-type-fire').contains('charmander')
  })
})
