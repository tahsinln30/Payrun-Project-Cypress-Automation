describe('template spec',
 
    {
      viewportHeight: 800,
      viewportWidth: 1400,
    },
   
    () =>
   
     
   
    {
      it('payrun-plans-upgrade', () =>
       
        {
 
        //Log In Page - URL
 
        cy.visit('https://dev.payrun.app/login')
 
        //Auth - Credential (E-mail and Password)
   
        cy.get(':nth-child(1) > .border').type('tahsin@gain.media')
        cy.get('.relative > .border').type('Admin@125')
 
        //Log In Button - Click
   
        cy.get('button[type="submit"]').click()
   
        //Organization URL
       
        cy.origin('https://qa-org.dev.payrun.app', () => {
 
        //Delay
 
        cy.wait(2000)
 
        // Wait for the Sidebar to Load and the "Plans & Bills" Text to be Visible.
 
          cy.contains('p.sidebar-text', 'Plans & Bills', { timeout: 10000 })
            .should('be.visible')
            .click()
 
        //Delay
 
        cy.wait(2000)
       
        //Click On - Invoices Button
 
          cy.contains('button', 'Invoices') //Locate the Button Containing the Text "Invoices".
            .should('be.visible')           //Check If It's Visible.
            .click();                       //Click the Button.
 
        //Delay
 
        cy.wait(3000)
 
        //Click On - Subscription Button
 
          cy.contains('button', 'Subscriptions')  //Locate the Button by Inner Span Text.
            .should('be.visible')                 //Ensure It's Visible.
            .click();  
 
       //Delay
 
        //cy.wait(3000)
 
        //Click On - Plans Button
 
        //  cy.contains('button', 'Plans')
        //    .should('have.class', 'text-regular')   //Optional Class Assertion.
        //    .and('have.attr', 'type', 'button')     //Optional Type Assertion.
        //    .click();
 
        //Click On - Cancel Subscription Button
 
        //  cy.contains('button', 'Cancel subscription', { timeout: 10000 })  //Locate the Button by Its Text.
        //    .should('be.visible')                       //Ensure It's Visible.
        //    .click();                                   //Click the Button.
 
        //Modal - Click On 'Unsubscribe' Button
 
        //  cy.contains('button', 'Unsubscribe', { timeout: 10000 })  //Waits Up to 10 Seconds for the Button.
        //    .should('be.visible')
        //    .click();
 
        //Delay
 
        //cy.wait(2000)
       
        //Click On - Invoices Button
 
        //  cy.contains('button', 'Invoices') //Locate the Button Containing the Text "Invoices".
        //    .should('be.visible')           //Check If It's Visible.
        //    .click();                       //Click the Button.
 
        //Delay
 
        //cy.wait(3000)
 
        //Click On - Subscription Button
 
        //  cy.contains('button', 'Subscriptions')  //Locate the Button by Inner Span Text.
        //    .should('be.visible')                 //Ensure It's Visible.
        //    .click();  
 
       //Delay
 
        cy.wait(3000)
 
        //Click On - Plans Button
 
          cy.contains('button', 'Plans')
            .should('have.class', 'text-regular')   //Optional Class Assertion.
            .and('have.attr', 'type', 'button')     //Optional Type Assertion.
            .click();
 
        //Delay
 
        cy.wait(3000)
 
        //Click On - Starter (Plan) Button
 
        cy.contains('button', 'Upgrade')
          .click({ force: true });
 
        //Delay
 
        cy.wait(10000)
 
        //Click On "Upgrade - Button of 'Starter Plan'"
 
        describe('Button Test', () => {
 
          it('Clicks the Upgrade button', () => {
 
            cy.visit('https://qa-org.dev.payrun.app/plans'); //Organization URL
 
            cy.get('button.flex.mt-2.px-7.h-[41px].w-[100%].false.justify-center.items-center.mb-2.text-14.font-medium.rounded-[8px].focus:outline-none.text-white')
              .should('be.visible')   //Ensure The Button is Visible.
              .and('not.be.disabled') //Check The Button is not Disabled.
              .click(); //Click The Button
           
          });
 
        });
 
        //Delay
 
        cy.wait(10000)
 
         //Click On "Upgrade - Button of 'Pro Plan'"
 
        describe('Upgrade Button Test', () => {
 
          it('Clicks the Upgrade button', () => {
         
            cy.visit('https://qa-org.dev.payrun.app/plans'); //Organization URL
       
           
            cy.contains('button', 'Upgrade')
              .should('be.visible')        //Ensure The Button is Visible.
              .and('not.be.disabled')      //Ensure It's Enabled.
              .click();                    //Click The Button.
 
          });
 
        });
 
        //Delay
 
        cy.wait(10000)
 
        //Click On "Upgrade - Button of 'Enterprise Plan'"
 
      describe('Click Upgrade Button', () => {
 
        it('should click the Upgrade button', () => {
   
          cy.visit('https://qa-org.dev.payrun.app/plans'); //Organization URL
 
       //Click The Button Using Visible Text.
 
          cy.contains('button', 'Upgrade').click();
 
      //Optionally Assert Something Happens After Click.
 
          cy.url().should('include', '/upgrade'); //Update Path As Needed.
 
  });
 
});
 
 
           
      })
       
   })
 
})
 


//Note: Login Page -> Email and Password -> Dashboard -> Plans & Bills -> Invoices -> Subscriptions -> Plans

//Cancel Subscription -> Invoices -> Subscriptions -> Plans 

//Click On Starter Plan and Add Card - Manual -> Click Pay Button (Manually Upgrade)

//Upgrade Plans (System Run Again and Upgrade Plan)