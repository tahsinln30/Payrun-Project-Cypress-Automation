 
describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-employees-employment-status', () => 

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

 

//Projects - Click 

 

cy.contains('p.-mb-\\[8px\\]', 'Employees', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//New Project > Input Field  

 

cy.get('input[name="name"]') 

.should('exist') 

.should('be.visible') 

.should('not.be.disabled') 

.click() 

.type('Probation'); 

 

//New Project > Description - Click 

 

cy.get('textarea') 

.should('exist') 

.should('be.visible') 

.should('not.be.disabled') 

.click() 

.type('This is a Test Description!', { force: true }); 

 

//New Project > Set Color 

 

cy.contains('Set color') 

.should('be.visible') 

.should('not.be.disabled') 

.click(); 

 

//Delay  

 

cy.wait(3000)  

 

//New Project > Set Color > Ok 

 

cy.contains('span', 'ok').click({ force: true }); 

 

//New Project > Add - Click 

 

cy.contains('button', 'Add') 

.should('be.visible') 

.should('not.be.disabled') 

.click(); 

 

//Tasks Select - Click  

 

// cy.contains('span', 'Tasks').click(); 

 

 

}) 

}) 

 

}) 

 