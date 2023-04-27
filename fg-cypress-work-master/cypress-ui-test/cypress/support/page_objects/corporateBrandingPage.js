import { navigateTo } from "./navigationsPage"

export class CorporateBrandingPage{


    CorporateBrandingPageNavigate(){
       navigateTo.MenuNavigator_withoutSubmenu('#menu_admin_addTheme')
    }

    SelectingColorAndPublish(box,LogoPath){
        cy.get('#frmAddTheme')
        .find(box)
        .parent()
        .find('.sp-preview-inner')
        .click()

        cy.get('input[class="sp-input"]').first().clear().type("#0dd0b4{enter}")
        cy.wait(3000)

        onCorporateBrandingPage.comparingColor()

        cy.get('button[class="sp-choose"]').first().click()


        const filepath = LogoPath
       cy.get('input[type="file"]').attachFile(filepath)

       cy.get('#btnSave').click()

       cy.get("#addThemeTbl").find('.message').invoke('text').then((text) => {
        expect(text.trim()).contain('Successfully Published')
    });

    }

    comparingColor(){
        
        cy.get('input[class="sp-input"]')
        .invoke('val')  // for input or textarea, .invoke('val')
        .then(text => {
            const someText = text;
            cy.log(someText)

            var red = onCorporateBrandingPage.hexToRgb(someText).r
            var green = onCorporateBrandingPage.hexToRgb(someText).g
            var blue= onCorporateBrandingPage.hexToRgb(someText).b

            var rgb = 'rgb('+red+', '+green+', '+blue+')'

            cy.log(rgb)


            cy.get('#mainMenuFirstLevelUnorderedList')
            .find('li')
            .find('ul')
            .should('have.css', 'background-color')
            .and('eq', rgb)
        });
               
    }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    PrimaryColor(){
       onCorporateBrandingPage.SelectingColorAndPublish('#primaryColor','Docs/CompanyLogo.png')
    }



}


export const onCorporateBrandingPage = new CorporateBrandingPage()