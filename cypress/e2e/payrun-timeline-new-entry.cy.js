describe('template spec', 

{ 

viewportHeight: 1000, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('timeline-new-entry', () => 

{ 

//Log In Page - URL 

 

cy.visit('https://dev.payrun.app/login') 

 

//Auth - Credential (E-mail and Password) 

cy.get('#email').type('tahsin@gain.media') 

cy.get('#password').type('Admin@123') 

 

//Log In Button - Click 

cy.get('button[type="submit"]').click() 

 

//Organization URL 

cy.origin('https://qa-automation.dev.payrun.app/', () => { 

 

//Delay 

 

//cy.wait(1000)  

 

cy.contains('p.sidebar-text', 'Timeline', { timeout: 10000 }).should('be.visible').click(); 

//Delay 

 

cy.wait(1000) 

 

//Timeline: New Entry - Click 

 

cy.contains('span', 'New entry') 

.should('be.visible') 

.click();  

 

//Delay 

 

cy.wait(1000) 

 

//Date - Type 

 

cy.get('input[placeholder="Select a date"]') 

.should('be.visible') 

.clear() 

.type('16 August, 2025{enter}'); 

 

//Delay 

 

//cy.wait(500) 

 

//End Time - Type and Select 

 

cy.get('input[placeholder="Current time"]') 

.should('be.visible') 

.clear() 

.type('15:00{enter}'); 

//Start Time - Type and Select 

 

cy.get('input[placeholder="Current - 1h"]') 

.should('be.visible') 

.clear() 

.type('14:00{enter}')  

//Project and Task - Type and Select 

 

cy.get('#react-select-2-input') 

.click() 

.type('Untitled project') 

.type('{downarrow}{enter}');  

 

//Note - Add 

 

cy.get('#new-entry-note') 

.should('be.visible') 

.clear()  

.type('This is a test note.'); 

 

//Employee - Type and Select 

 

//Click the Dropdown Toggle  

 

cy.contains('div[role="button"]', 'Select an employee') 

.should('be.visible') 

.click(); 

 

//Delay 

 

cy.wait(500) 

 

//Search and Select - Employee 

 

 

cy.get('#dropdown-new-entry-employee') 

.find('input[placeholder="Search & select..."]') 

.should('have.length', 1) //Optional Check 

.type('User One'); 

 

 

//Select Option - Click 

cy.get('#dropdown-new-entry-employee') 

.find('h5') 

.contains('User One') 

.should('be.visible') 

.click(); 

 

//Add Button - Click 

 

cy.contains('button', 'Add') 

.should('be.visible') 

.click(); 

 

}); 

 

}); 

 

}) 

 
