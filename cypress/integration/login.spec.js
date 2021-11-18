/// <reference types="cypress" />

describe('Twitter Clone - Login', () => {

    beforeEach(() => {
        // cy.intercep
        // 1. RouteMatcher - mapeamento, filtro da rota que a gente quer
        // 2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)

        // Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
        // Request Method: GET

        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'images'
        }).as('cloudinary')
    });

    it('Login com usuário e senha válidos', () => {
        cy.login()
    })
})