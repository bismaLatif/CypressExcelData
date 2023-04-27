import { navigateTo } from "./navigationsPage"


export class UserManagementPage{

    UsersPageNavigate(){
        navigateTo.MenuNavigator("#menu_admin_UserManagement","#menu_admin_viewSystemUsers")
    }

    addUser(userRole,employeeName,userName,status,password){
        cy.get('#btnAdd').click()

        if(userRole =='Admin')
            cy.get('#systemUser_userType').select(userRole).should('have.value', '1')
        else
            cy.get('#systemUser_userType').select(userRole).should('have.value', '2')

        cy.get('#systemUser_employeeName_empName').type(employeeName)
        
        cy.get('#systemUser_userName').type(userName)

        if(status =='Enabled')
            cy.get('#systemUser_status').select(status).should('have.value', '1')
        else
            cy.get('#systemUser_status').select(status).should('have.value', '0')
    
        cy.get('#systemUser_password').type(password)
        cy.get('#systemUser_confirmPassword').type(password)
        cy.get('#btnSave').click()

        // cy.get(".message success fadable").then(input => {
        //     cy.wrap(input).should('contain','Successfully')
        // })
    }

    searchuser(userName){
     cy.get('#searchSystemUser_userName').type(userName)
     cy.get('#searchBtn').click()
    }

    deleteUser(userName){
        
     cy.get('tbody tr').first().find('td').then(tableColumn => {
        cy.wrap(tableColumn).eq(1).should('contain',userName)
    
     cy.get('[type="checkbox"]').eq(1).check({force:true})
     cy.get('[type="checkbox"]').eq(1).uncheck({force:true})
     cy.get('[type="checkbox"]').eq(1).check({force:true})

     cy.get('#btnDelete').click({force:true})

     cy.get('#dialogDeleteBtn').click({force:true})

    })
    }

}


export const onUserManagementPage = new UserManagementPage()