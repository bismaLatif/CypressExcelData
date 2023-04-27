import { navigateTo } from "../navigationsPage"

export class PayGradePage{

    PayGradePageNavigate(){
        navigateTo.MenuNavigator('#menu_admin_Job','#menu_admin_viewPayGrades')
    }
    
    AddPayGrade(GradeName,Currency,CurrencyMinSalary,CurrencyMaxSalary){
        cy.get('#btnAdd').click()
        cy.get('#payGradeHeading').should('contain','Add Pay Grade')
        cy.get('#payGrade_name').type(GradeName)
        cy.get('#btnSave').click()

        cy.get("#payGrade").find('.message').invoke('text').then((text) => {
            expect(text.trim()).contain('Successfully Saved')
        });

        //Assigned Currencies
        cy.get('#btnAddCurrency').click()
        cy.get('#payGradeCurrency_currencyName').type(Currency)

        cy.get('.ac_results')
        .find('ul')
        .find('li')
        .find('strong')
        .should('contain',Currency)
        .click()

        cy.get('#payGradeCurrency_minSalary').type(CurrencyMinSalary)
        cy.get('#payGradeCurrency_maxSalary').type(CurrencyMaxSalary)
        cy.get('#btnSaveCurrency').click()
        
        cy.get("#currency").find('.message').invoke('text').then((text) => {
            expect(text.trim()).contain('Successfully Saved')
        });

        cy.get('#btnCancel').click()



    }

    DeletePayGrade(GradeName){
        cy.contains('td', GradeName)  
        .prev('td')                         
        .find('input')                      
        .check();
        
        cy.get('#btnDelete').click()
        cy.get('#dialogDeleteBtn').click()
    }

}


export const onPayGradePage = new PayGradePage()
