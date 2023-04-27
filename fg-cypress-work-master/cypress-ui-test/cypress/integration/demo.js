describe('Our second suite',() => {

    it('first test', ()=> {

        cy.visit('/')

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        //by tag name
        cy.get('input')

        //by Id
        cy.get('#inputEmail1')

        //by class Name
        cy.get('.input-full-width')

        //by Attributes Name
        cy.get('[placeholder]')

        //by Attributes Name and value
        cy.get('[placeholder="Email"]')

        //by class Value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
    
        //by Tag Name and Attribute with Value
        cy.get('input[placeholder="Email"]')
    
        //by two different attributes 
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, Attribute with value, ID and Class name 
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //by the most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')

    })

})