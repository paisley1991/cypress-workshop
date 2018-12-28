
/// <reference types="Cypress" />

context('API Testing ', () => {
  

    it('Request API Status Code', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: requestbody,
            timeout : 10000,
        }).then((response) => {
            expect(response.status).to.eq(200)
            Cypress.env('token', response.body.token)
        })
    })

    it('Request Authentication', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Suprakorn",
                "job": "QA"
            },
            timeout : 10000,
            auth: {
                'bearer': Cypress.env(response.body.token)
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})

