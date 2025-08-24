describe('template spec',
 
  {
    viewportHeight: 800,
    viewportWidth: 1400,
  },
 
  () =>
 
   
 
  {
    it('payrun-plans-downgrade', () =>
     
      {
      //Log In Page - URL
      cy.visit('https://dev.payrun.app/login')
      //Auth - Credential (E-mail and Password)
 
      cy.get(':nth-child(1) > .border').type('tahsin@gain.media')
      cy.get('.relative > .border').type('Admin@125')
      //Log In Button - Click
 
      cy.get('button[type="submit"]').click()
 
      //Organization URL
     
      cy.origin('https://changelog.dev.payrun.app', () => {
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
        cy.contains('button', 'Subscriptions')  //Locate the Button Containing the Text "Subscription".
          .should('be.visible')                 //Ensure It's Visible.
          .click();  
      //Delay
      cy.wait(3000)
      //Click On - Plans Button
        cy.contains('button', 'Plans')
          .should('have.class', 'text-regular')   //Optional Class Assertion.
          .and('have.attr', 'type', 'button')     //Optional Type Assertion.
          .click();
      //Delay
      cy.wait(3000)
      //Free - Plan
      //cy.contains('span', 'Downgrade')
      //.scrollIntoView()
      //.should('be.visible')
      //.click({ force: true });
      //Delay
      cy.wait(3000)
      //Free - Plan
      cy.contains('span', 'Downgrade')           //Find the Span with "Downgrade - Free Plan".
        .scrollIntoView()                        //Ensure It's in View (Important If It's Clipped).
        .should('be.visible')                    //Confirm It's Visible.
        .parents('button')                       //Go Up to the Clickable Parent.
        .first()                                 //Just In Case There are Multiple.
        .click({ force: true });  
      
      
     });
     
   })
 })
   
 //Note: Login Page -> Email and Password -> Dashboard -> Plans & Bills -> Invoices -> Subscriptions -> Plans
 //Downgrade Plans (System Run Again and Downgrade Plan) 
 // ** Use Same Class for Downgrade Plans Button. So, It Take Only Free Plan - Downgrade Button. ** //