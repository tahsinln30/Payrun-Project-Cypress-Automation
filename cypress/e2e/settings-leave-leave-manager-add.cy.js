describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-leave-leave-manager-add', () => 

{ 

 

//Log In Page - URL 

 

cy.visit('https://dev.payrun.app/login') 

 

//Auth - Credential (E-mail and Password) 

cy.get(':nth-child(1) > .border').type('tahsin@gain.media') 

cy.get('.relative > .border').type('Admin@123') 

 

//Log In Button - Click 

cy.get('button[type="submit"]').click() 

//Organization URL 

cy.origin('https://new-new.dev.payrun.app/', () => { 

 

//Delay 

 

cy.wait(3000)  

 

//Settings - Click 

 

cy.contains('span.text-regular.flex-1.text-14.font-normal.text-left.pl-2', 'Settings', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Delay  

 

cy.wait(2000)  

 

//Employees - Click 

 

cy.contains('p.-mb-\\[8px\\]', 'Timeline & Leave', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Delay 

 

cy.wait(2000) 

 

//Leave - Click  

 

cy.get('button.inline-block.text-14.font-medium').contains('Leave').click(); 

 

//Leave Manager (Other) - Click 

 

cy.contains('h3', 'Leave manager') 

.parent() //Adjust Based on Actual DOM Structure 

.within(() => { 

cy.contains('div[role="button"]', 'Add people') 

.should('be.visible') 

.click(); 

}); 

 

 

//Type User Name 

 

cy.get('input#react-select-2-input.react-multi-select__input') 

.type('Admin Admin'); 

 

//Wait for Dropdown Options to Appear, Then Click the Correct Option 

 

cy.get('.react-multi-select__option') 

.contains('Admin Admin') 

.click(); 

 

//Click the Add Button 

 

cy.contains('button', /^Add$/).click(); 

 

//Delay 

 

cy.wait(3000) 

 

//Leave Manager (Other) - Click 

 

cy.get('button.inline-flex.rounded-full.border').first().click({ force: true }); 

//Select User - Remove 

 

cy.get('div.react-multi-select__clear-indicator > span.cursor-pointer').click({ force: true }); 

 

//Delay 

 

cy.wait(2000) 

 

//Update Button - Click 

 

cy.contains('button', 'Update').click(); 

 

}); 

}); 

 

 

 

}) 

 

 