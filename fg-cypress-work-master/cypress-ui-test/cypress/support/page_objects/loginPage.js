

export class LoginApplication{

    loginToTheApplicaiton(username,password){

        cy.get('#txtUsername').then(input => {
            cy.wrap(input).clear().type(username)
        })

        cy.get('#txtPassword').then(input => {
            cy.wrap(input).clear().type(password)
        })

        cy.get('#btnLogin').click()

        cy.get('#welcome').then(input => {
            cy.wrap(input).should('contain','Welcome')
        })
        
    }

}

export const onLoginApplicaton = new LoginApplication()