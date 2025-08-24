describe('template spec', 

{ 

viewportHeight: 1500, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('settings-general-contacts', () => 

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

 

cy.contains('p.-mb-\\[8px\\]', 'General', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Delay  

 

cy.wait(2000) 

 

//Settings > Contacts 

cy.contains('h3', 'Contacts') 

.parent() 

.within(() => { 

 

cy.get('div[role="button"]').contains('Edit') 

.scrollIntoView() 

.should('be.visible') 

.click({ force: true }); 

 

}); 

 

//Settings > Contacts - Email  

 

//cy.get('#email') 

//.should('be.visible') 

//.then($input => { 

// const nativeInput = $input[0]; 

// nativeInput.value = 'tahsin@gain.media'; 

// nativeInput.dispatchEvent(new Event('input', { bubbles: true })); 

// nativeInput.dispatchEvent(new Event('change', { bubbles: true })); 

// }) 

// .should('have.value', 'tahsin@gain.media'); 

 

//cy.wait(1000) 

 

//Settings > Contacts - Phone Number 

 

//cy.get('input[name="phone"]') 

//.then($input => { 

// const nativeInput = $input[0]; 

// nativeInput.value = '+8801234567890'; 

// nativeInput.dispatchEvent(new Event('input', { bubbles: true })); 

// nativeInput.dispatchEvent(new Event('change', { bubbles: true })); 

// }) 

// .should('have.value', '+8801234567890'); 

 

//cy.wait(1000) 

 

//Settings > Contacts - Website 

 

//cy.get('#website') 

//.should('be.visible') 

//.then($input => { 

// const el = $input[0]; 

// el.value = 'https://www.payrun.app'; 

// el.dispatchEvent(new Event('input', { bubbles: true })); 

// el.dispatchEvent(new Event('change', { bubbles: true })); 

// }) 

//.should('have.value', 'https://www.payrun.app'); 

// cy.wait(1000) 

 

 

//Settings > Contacts - Email, Phone Number, and Website 

 

cy.get('input[type="email"]').type('test@example.com');  

cy.get('input[name="phone"]').type('1234567890'); 

cy.get('input[type="website"]').type('https://example.com'); 

cy.contains('button', 'Save').click(); //Save Button - Click 

 

}) 

 

}) 

 

}) 