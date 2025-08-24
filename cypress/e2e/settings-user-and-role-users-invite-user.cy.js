describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-user-and-role-users-invite-user', () => 

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

 

//User and Role - Click 

 

cy.contains('p.-mb-\\[8px\\]', 'User & Role', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

 

//Invite User - Click 

 

cy.contains('span', 'Invite user').click({ force: true }); 

 

//Role - Select 

 

// cy.get('#1').check({ force: true }); 

 

//Role (Employee) - Remove 

 

cy.get('input[value="org_employee"]') 

.parents('.ant-checkbox-wrapper') //Find the Visual Wrapper 

.click(); // This will Toggle (Uncheck) the Checkbox 

 

// Optional: Verify It's Now Unchecked 

 

cy.get('input[value="org_employee"]').should('not.be.checked'); 

 

 

//Select Role - Owner 

 

cy.get('#1').check({ force: true }); 

 

//Email - Type 

 

cy.get('#email') 

.clear() 

.type('tahsin+16@gain.media') 

.should('have.value', 'tahsin+16@gain.media'); 

 

//Joining Date - Select 

 

cy.get('input[placeholder="Select a date"]') 

.invoke('val', '2025-07-20') // Set Date String Directly 

.trigger('change');  

 

 

cy.wait(5000) 

 

//Save Button - Click 

cy.contains('span', 'Save').click({ force: true }); 

 

 

}) 

}) 

}) 

 