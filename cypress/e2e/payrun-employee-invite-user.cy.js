describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('payrun-employee-invite-user', () => 

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

 

//Employees - Click 

 

cy.contains('p.sidebar-text', 'Employees', { timeout: 10000 }).should('be.visible').click(); 

//Delay  

 

cy.wait(2000)  

 

//New Invitation - Click 

 

cy.contains('button', 'New invitation').click(); 

 

//Email - Type 

 

cy.get('#email') 

.clear() 

.type('tahsin+22@gain.media') 

.should('have.value', 'tahsin+22@gain.media'); 

 

 

//Employment Status - Option Type, Select Option, and Click 

 

//Click the Specific React-Select Control 

 

cy.get('[id^=react-select][id$=-input]').first().click({ force: true }); //Ensure Input is Ready 

 

//Type the Desired Value 

 

cy.get('[id^=react-select][id$=-input]') 

.first() 

.type('Permanent', { force: true }); 

 

//Wait for the Dropdown Menu to Appear and Select the Option 

 

cy.get('.react-single-select__option') //This Class Appears in Dropdown List 

.contains('Permanent') 

.click(); 

 

 

//Designation - Click  

 

 

//Find the Outer Container by Label Text, Then Descend to Control 

 

cy.contains('label', 'Designation') 

.closest('div.w-full') //Move Up to the Nearest Wrapper Div Matching that Class (Adjust If Needed) 

.find('.react-single-select__control') 

.click(); 

 

//Wait for Dropdown Menu 

 

cy.get('div[role="listbox"]').should('be.visible'); 

 

//Click On the Option 

 

cy.get('div[role="option"]') 

.contains('Software Engineer') 

.click(); 

 

//Assert the Selection 

 

cy.contains('label', 'Designation') 

.closest('div.w-full') 

.find('.react-single-select__single-value') 

.should('contain.text', 'Software Engineer'); 

 

 

//Employee ID - Type 

 

cy.get('input#employee_id') 

.type('12345') //Replace '12345' with Whatever Employee ID You Want 

.should('have.value', '12345'); 

 

 

//Department - Click 

 

//Step 1: Open the Department Dropdown (Click the Correct Control) 

 

cy.contains('span.text-14.text-dark', 'Department') 

.closest('div.w-full') 

.find('.react-single-select__control') 

.click({ force: true }); 

 

//Step 2: Now Type 'Main Department' into the Input within the Same Dropdown 

 

cy.contains('span.text-14.text-dark', 'Department') 

.closest('div.w-full') 

.find('input.react-single-select__input') 

.should('have.length', 1) //Confirm It's One Input 

.type('Main Department', { force: true }); 

 

//Step 3: Select the Option from the Dropdown 

 

cy.get('div.flex.space-x-2.items-center.cursor-pointer') 

.contains('Main Department') 

.should('be.visible') 

.click({ force: true }); 

 

 

//Joining Date - Select 

 

//cy.get('input[placeholder="Select a date"]') 

//.should('be.visible') 

//.clear() 

//.type('2025-07-22', { force: true }) 

//.should('have.value', '2025-07-22'); 

//Click Input to Open Calendar Popup 

 

cy.get('input[placeholder="Select a date"]').click({ force: true }); 

 

//Wait for Popup to Appear (The Calendar Container has 'ant-picker-dropdown') 

cy.get('.ant-picker-dropdown').should('be.visible'); 

 

//Click On the Day 20 — Click the Parent Cell to be Safe 

 

cy.get('.ant-picker-cell') 

.filter(':not(.ant-picker-cell-disabled)') //Exclude Disabled Dates 

.find('.ant-picker-cell-inner') 

.contains(/^20$/) 

.click({ force: true }); 

 

 

//Invite - Click 

 

cy.contains('span', 'Invite') 

.parents('button')  

.should('be.visible') 

.click({ force: true }); 

 

 

//Filter - Click 

 

cy.contains('button', 'Filter').click(); 

 

//Delay 

 

cy.wait(10000) 

 

//Clear - Click 

 

cy.contains('button', 'Clear').click(); 

 

}); 

}); 

 

}); 

 

 

 
