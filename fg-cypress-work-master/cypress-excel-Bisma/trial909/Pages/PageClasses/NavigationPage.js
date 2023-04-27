class NavigationPage
{

GetNavigateToPIM() {
    return cy.contains('PIM')
     
   }
GetNavigateToAddEmmployee(){
    return cy.get('#menu_pim_addEmployee');

}
GetAddEmployee(){
return cy.get('#btnAdd')
}
   
GetFirstName(){
return cy.get('#firstName')
}
GetLastName(){
return cy.get('#lastName')
}
GetEmployeeId()
{
return cy.get('#employeeId')
}
GetEditButton()
{
    return cy.get('#btnSave')
}
    

GetpersonalLicenseNo(){
    return cy.get('#personal_txtLicenNo')
}
GetNicNo(){
return cy.get('#personal_txtNICNo')
}
GetEmpNickName(){
    return cy.get('#personal_txtEmpNickName')
}
GetMilitarySer()
{
return cy.get('#personal_txtMilitarySer')
}
GetEmpSaveButton(){
    return cy.get('#btnSave')
}
GetOtherId(){
    return cy.get('#personal_txtOtherID')
}
GetSinNo()
{
    return cy.get('#personal_txtSINNo')
}
GetDob(){
    return cy.get('#personal_DOB')
}
GetLicenseExpiryDate(){
    return cy.get('#personal_txtLicExpDate')
}
GetCustomEditButton(){
    return cy.get('#btnEditCustom')
}
GetBloodGroupDropDown(){
    return cy.get('#frmEmpCustomFields > ol > li > .editable')
}
GetNationalityDropDown(){
    return cy.get('#personal_cmbNation')
}
GetMaritalStatus(){
return cy.get('#personal_cmbMarital')
}
GetGenderCheckBox(){
    return cy.get('#personal_optGender_1')
}
   }

export default NavigationPage
   