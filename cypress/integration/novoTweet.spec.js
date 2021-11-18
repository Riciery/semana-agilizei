/// <reference types="cypress" />

describe('Twitter Clone - Tweets', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'images'
        }).as('cloudinary')
    });


})

it('Criar um novo Tweet e curtir', () => {
    cy.login()

    let resTweet = "Quero melhorar minhas habilidades como automatizador de testes para performar ainda mais com o meu time!"

    cy.get('textarea[type="text"] ').type(`${resTweet}`)
    cy.get('button').contains('Tweet').click()

    cy.get('.sc-fzpans > :nth-child(1)')
        .should('contain', 'Quero melhorar minhas habilidades')

        cy.get(':nth-child(1) > .tweet-info > .tweet-stats > :nth-child(3) > span > .sc-AxiKw').click()
        cy.get(':nth-child(1) > .tweet-info > .tweet-stats > :nth-child(3) > span').should('exist')
});