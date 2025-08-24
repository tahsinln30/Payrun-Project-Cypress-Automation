describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-leave-custom-leave-add', () => 

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

 

cy.get('button.inline-block.text-14.font-medium').contains('Leave').click(); 

 

 

//Add New Button - Click 

 

cy.contains('button', 'Add new').click(); 

 

//Name of Leave - Input 

 

cy.get('input[name="name"]').type('Casual Leave'); 

 

//Delay 

 

cy.wait(3000) 

 

//Total Amount of Allowance - Input 

 

cy.get('input[name="number_of_days"]').type('50'); 

 

 

//Delay 

 

cy.wait(3000) 

 

//Allow Earning Policy - Click 

 

cy.get('div.absolute.h-4.w-4.rounded-full').click(); 

 

 

//Delay 

 

cy.wait(3000) 

 

//Add New Leave Policy - Click 

 

cy.contains('button', 'Add new leave policy').click(); 

 

}) 

}) 

}) 

 