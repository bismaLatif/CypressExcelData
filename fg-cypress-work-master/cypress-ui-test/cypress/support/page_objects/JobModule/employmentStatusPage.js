import { navigateTo } from "../navigationsPage"

export class EmploymentStatusPage{

    EmploymentStatusPageNavigate(){
        navigateTo.MenuNavigator('#menu_admin_Job','#menu_admin_employmentStatus')
    }

    AddEmploymentStatus(EmpStatusName){
        cy.get('#btnAdd').click()

        cy.get('#empStatus_name').type(EmpStatusName)
        cy.get('#btnSave').click()

        cy.get("#frmList_ohrmListComponent").find('.message').invoke('text').then((text) => {
            expect(text.trim()).contain('Successfully Saved')
        });
    }

    DeleteEmploymentStatus(EmpStatusName){
        cy.contains('td', EmpStatusName)  
        .prev('td')                         
        .find('input')                      
        .check();
        
        cy.get('#btnDelete').click()
        cy.get('#dialogDeleteBtn').click()
        
        cy.get("#frmList_ohrmListComponent").find('.message').invoke('text').then((text) => {
            expect(text.trim()).contain('Successfully Deleted')
        });
    }

}

export const onEmploymentStatusPage = new EmploymentStatusPage()