import { onUserManagementPage } from "../support/page_objects/UserManagmentModule"
import { onLoginApplicaton } from "../support/page_objects/loginPage"
import { navigateTo } from "../support/page_objects/navigationsPage"
import { JobTitlePage, onJobTitlePage } from "../support/page_objects/JobModule/jobTitlesPage"
import { onPayGradePage } from "../support/page_objects/JobModule/payGradesPage"
import { onEmploymentStatusPage } from "../support/page_objects/JobModule/employmentStatusPage"
import { onWorkShiftsPage } from "../support/page_objects/JobModule/workShiftsPage"
import { CorporateBrandingPage, onCorporateBrandingPage } from "../support/page_objects/corporateBrandingPage"



describe('Test with Page Object', () => {

    beforeEach('Load Data', function() {

        cy.fixture("DataDriven.json").as('fixtureData')

        cy.get("@fixtureData").then((data) => {
            cy.openHomePage()
            navigateTo.loginPage()
            onLoginApplicaton.loginToTheApplicaiton(data.loginUsername,data.loginPassword)
            cy.wait(2000)
        })

    })

    it('Admin User Management', () => {
        cy.get("@fixtureData").then((data) => {   
            onUserManagementPage.UsersPageNavigate()
            onUserManagementPage.addUser(data.userRole,data.employeeName,data.userName,data.status,data.password)
            onUserManagementPage.searchuser(data.userName)
            onUserManagementPage.deleteUser(data.userName)
        })
    })

    describe('Job Module', () => {
        it('Job Titles',()=>{
            cy.get("@fixtureData").then((data) => {
                onJobTitlePage.JobTitlePagePageNavigate()
                onJobTitlePage.AddJobTitle(data.JobTitle,data.JobDescription,data.JobSpecificationFile,data.JobNotes)
                onJobTitlePage.DeleteJobTitle(data.JobTitle)
        
            })
        })

        it('Pay Grade',()=>{
            cy.get("@fixtureData").then((data) => {
                onPayGradePage.PayGradePageNavigate()
                onPayGradePage.AddPayGrade(data.GradeName, data.Currency, data.CurrencyMinSalary,data.CurrencyMaxSalary)
                onPayGradePage.DeletePayGrade(data.GradeName)
        
            })        

        })

        it('Employment Status',()=>{
            cy.get("@fixtureData").then((data) => {
                onEmploymentStatusPage.EmploymentStatusPageNavigate()
                onEmploymentStatusPage.AddEmploymentStatus(data.EmpStatusName)
                onEmploymentStatusPage.DeleteEmploymentStatus(data.EmpStatusName)
        
            })        

        })

        it('Work Shifts',()=>{
            cy.get("@fixtureData").then((data) => {
                onWorkShiftsPage.WorkShiftsPageNavigate()
                onWorkShiftsPage.AddWorkShift(data.shiftName,data.workHoursFrom,data.workHoursTo)
                onWorkShiftsPage.DeleteWorkShift(data.shiftName)
        
            })
        })
    })

    describe('Corporate Branding', () => {
        it('Corporate Branding Page',()=>{
            cy.get("@fixtureData").then((data) => {
                onCorporateBrandingPage.CorporateBrandingPageNavigate()
                onCorporateBrandingPage.PrimaryColor()
        
            })
        })
    })
})