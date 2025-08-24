describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-timelog-no-approve-policy-timelog-approver', () => 

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

 

//No Approve Policy 

 

//Delay 

 

cy.wait(2000) 

 

//Add People - Click 

 

cy.contains('p', 'Other people') //Find the Heading 

.parent() //Go to the Wrapper Div 

.within(() => { 

cy.contains('div[role="button"]', 'Add people') 

.should('be.visible') 

.click({ force: true }); 

}); 

 

//Step 1: Wait for the Input to Appear (React-Select Input) 

 

cy.get('input#react-select-2-input', { timeout: 10000 }) // Wait Up to 10s 

.should('exist') 

.type('Admin Admin', { force: true }); 

 

//Step 2: Select the Option 

 

cy.get('div.react-multi-select__option') 

.contains('Admin Admin') 

.click({ force: true }); 

 

//Step 3: Click the Add Button 

 

cy.contains('span', 'Add') 

.should('be.visible') 

.click({ force: true }); 

//Delay 

 

cy.wait(3000) 

 

//Select User - Remove 

 

cy.get('button.inline-flex.items-center.justify-center').click(); 

 

cy.get('svg.text-white.p-\\[2px\\].font-medium').click(); 

 

//Update Button - Click 

 

cy.contains('button', 'Update').click(); 

 

 

}) 

}) 

}) 

 