
// function selectGroupMenuItem(groupName){
//     cy.contains('a',groupName).then(menu => {
//         cy.wrap(menu).find('.expand-state g g').invoke('attr','data-name').then(attr => {
//             if(attr.includes('left')){
//                 cy.wrap(menu).click()
//             }
//         })
//     })
// }


export class NavigationPage{
    
    loginPage(){
        cy.visit('/')
    }

    MenuNavigator(Menu_Locator_Id, subMenu_Locator_Id){
        
        
        cy.get('.menu').find(Menu_Locator_Id).realHover
        cy.get(Menu_Locator_Id)
        .parent()
        .find('ul')
        .find('li')
        .find(subMenu_Locator_Id)
        .realHover

        cy.get(subMenu_Locator_Id).click({force:true})
    }

    MenuNavigator_withoutSubmenu(Menu_Locator_Id){
        cy.get('.menu').find(Menu_Locator_Id).realHover
        cy.get(Menu_Locator_Id)
        .realHover

        cy.get(Menu_Locator_Id).click({force:true})
    }


}

export const navigateTo = new NavigationPage()