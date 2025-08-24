describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-timelog-timelog-manager-add', () => 

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

 

//Leave - Click  

 

//cy.get('button.inline-block.text-14.font-medium').contains('Leave').click(); 

 

//Timelog Manager (Other) - Click 

 

cy.contains('p', 'Add people').click(); 

 

//Timelog Manager - Add 

 

//Step 1: Type into the Input Field 

 

cy.get('input#react-select-2-input') 

.type('Admin Admin', { force: true }); 

 

//Step 2: Wait for the Dropdown and Click on the Option 

cy.get('div.react-multi-select__option') //Adjust If Actual Option Class is Different 

.contains('Admin Admin') 

.click({ force: true }); 

 

//Add Button - Click 

 

cy.contains('button', 'Add').click(); 

 

//Delay 

 

cy.wait(3000) 

 

//Timelog Manager (Other) - Click 

 

cy.get('button.inline-flex.rounded-full.border').first().click({ force: true }); 

 

//Delay 

 

cy.wait(3000) 

 

//Select User - Remove 

 

cy.get('div.react-multi-select__clear-indicator > span.cursor-pointer').click({ force: true }); 

 

//Delay 

 

cy.wait(2000) 

 

//Update Button - Click 

 

cy.contains('button', 'Update').click(); 

 

}) 

}) 

}) 

 