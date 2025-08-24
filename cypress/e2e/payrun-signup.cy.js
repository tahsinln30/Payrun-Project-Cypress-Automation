describe('template spec', 
  
  
  {
    viewportHeight: 1500,
    viewportWidth: 1200,
  },

  
  () => 
  
    {
  
        it('payrun-signup', () => 
      
    {  
  
      // Public Site - Sign Up Page (URL)
      
      cy.visit('https://dev.payrun.app/signup')
    
      //First Name
  
      cy.get(':nth-child(1) > .border').type('Tahsin')

      //Last Name

      cy.get('.grid > :nth-child(2) > .border').type('Ahmed')

      //Work Email

      cy.get('div.w-full > :nth-child(2) > .border').type('tahsin009@yopmail.com')

      //Password

      cy.get(':nth-child(3) > .relative > .border').type('Admin@123')

      //Confirm Password

      cy.get(':nth-child(4) > .relative > .border').type('Admin@123')

      //Delay

      cy.wait(30000)

      //Button - Sign Up

      cy.get('.inline-flex').click() 

      //Delay

      cy.wait(30000)

     //Create Organization - Page

      cy.get('#organization_name').type('Automation')

      //Delay

      cy.wait(10000)

      //Choose Country

      cy.get('#rc_select_0').type('Bangladesh')
      cy.get('.flex > .border').type('automation')

      //Create Organization - Button
      
      cy.contains('button', 'Create Organization', { timeout: 10000 }).should('be.visible').click();
  
    })
  
  })