describe('Book App tests', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('Should open home page', () => {
        cy.contains('Log in').should('be.visible');
    });

//     it('Should successfully log in', () => {
//         cy.login('test@test.com', 'test');
//         cy.contains('test@test.com').should('be.visible');
//     });

//     it('Should successfully log out', () => {
//         cy.login('test@test.com', 'test');
//         cy.contains('test@test.com').should('be.visible');
//         cy.logout();
//         cy.contains('Log in').should('be.visible');
//     });
});