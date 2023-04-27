import { navigateTo } from "../navigationsPage"

export class WorkShiftsPage{

    WorkShiftsPageNavigate(){
        navigateTo.MenuNavigator('#menu_admin_Job','#menu_admin_workShift')
    }

    AddWorkShift(shiftName,workHoursFrom,workHoursTo ){

        cy.get('#btnAdd').click()

        cy.get('#workShift_name').type(shiftName)
        cy.get('#workShift_workHours_from').select(workHoursFrom).should('have.value', '09:00')
        cy.get('#workShift_workHours_to').select(workHoursTo).should('have.value', '18:00')

        //multiple selection from Dropdown
        cy.get('#workShift_availableEmp').select(['Peter Mac Anderson','Ananya Dash','Goutam Ganesh','Jordan Mathews','Jacqueline White'])
        cy.get('#btnAssignEmployee').click()

        cy.get('#btnSave').click()

        cy.get("#frmList_ohrmListComponent").find('.message').invoke('text').then((text) => {
            expect(text.trim()).contain('Successfully Saved')
        });
        
    }

    DeleteWorkShift(shiftName){
        
        cy.contains('td', shiftName)  
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


export const onWorkShiftsPage = new WorkShiftsPage()