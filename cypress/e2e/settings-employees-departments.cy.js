describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-employees-departments', () => 

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

 

cy.contains('p.-mb-\\[8px\\]', 'Employees', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Designation - Click  

 

cy.contains('span', 'Departments').click(); 

 

//New Department - Name 

 

cy.get('#department_name', { timeout: 10000 }) // waits up to 10s 

.should('be.visible') 

.click() 

.type('Finance Department'); 

 

//Delay (Add - Parent Department, Workshift, Department Manager)  

 

cy.wait(20000) 

 

//Add Button - Click  

 

cy.contains('span', 'Add').click({ force: true }); 

 

 

}) 

}) 

}) 

 