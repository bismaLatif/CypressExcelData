/// <reference types="cypress" />
//import login from "../../../Pages/PageClasses/loginPage.js";

//import { type } from "os";
//import NavigationPage from "../../../Pages/PageClasses/NavigationPage";
import Navigation from "../../../Pages/PageClasses/NavigationPage.js"
const navigation = new Navigation()


describe('Verify the user is able to add employee' , () => {
  
 before("open application" , () => {
  const excelFilePath = "D:\\orangehrmexcel.xlsx";
  const sheetName = "EmpDetails";
  cy.task("generateJSONFromExcel", { excelFilePath, sheetName })
 })
 
 it('login to add user' , () => {
   
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
     
    cy.fixture('datajson').then(userinformations => { 
      userinformations.forEach((user)=> {       
     navigation.GetNavigateToPIM().click()
     navigation.GetAddEmployee().click()
     //console.log(userinformations)
     
      navigation.GetFirstName().type(user.firstname)
      navigation.GetLastName().type(user.lastname)
      navigation.GetEmployeeId().clear().type(user.id+(Math.random() + 1).toString(36).substring(7));
      navigation.GetEditButton().click()
      navigation.GetEditButton().click()
      navigation.GetpersonalLicenseNo().clear().type(user.licenseno)
      navigation.GetNicNo().clear().type(user.SinNo)
      navigation.GetEmpNickName().type(user.EmpNickName)
      navigation.GetMilitarySer().type(user.MilitaryGrade)
      navigation.GetOtherId().type(user.OtherID)
      navigation.GetSinNo().type(user.SinNo)
      navigation.GetDob().type(user.Dob +'{enter}')
      navigation.GetLicenseExpiryDate().type(user.licenseExpiryDate +'{enter}')
      navigation.GetNationalityDropDown().select(user.Nationality)
      navigation.GetMaritalStatus().select(user.MaritalStatus)
      navigation.GetEditButton().click()
      navigation.GetCustomEditButton().click()
      navigation.GetBloodGroupDropDown().select(user.bloodGroup)
      navigation.GetCustomEditButton().click()
      navigation.GetNavigateToPIM().click()
          
      
})
})  

})  })