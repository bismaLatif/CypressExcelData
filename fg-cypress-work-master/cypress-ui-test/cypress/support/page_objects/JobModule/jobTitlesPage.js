import { navigateTo } from "../navigationsPage"
import 'cypress-file-upload';

export class JobTitlePage{

    JobTitlePagePageNavigate(){
        navigateTo.MenuNavigator("#menu_admin_Job","#menu_admin_viewJobTitleList")
    }

    AddJobTitle(JobTitle,JobDescription,JobSpecificationFile,JobNotes){
       cy.get('#btnAdd').click()
       
       //Form Filling
       cy.get('#jobTitle_jobTitle').type(JobTitle)
       cy.get('#jobTitle_jobDescription').type(JobDescription)
      
       const filepath = JobSpecificationFile
       cy.get('input[type="file"]').attachFile(filepath)
      
       cy.get('#jobTitle_note').type(JobNotes)

      cy.get('#btnSave').click()

      cy.get("#frmList_ohrmListComponent").find('.message').invoke('text').then((text) => {
        expect(text.trim()).contain('Successfully Saved')
    }); 

    }

    DeleteJobTitle(JobTitle){

        cy.contains('td', JobTitle)  
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


export const onJobTitlePage = new JobTitlePage()