describe('template spec', 
  
  
  {
    viewportHeight: 1500,
    viewportWidth: 1200,
  },


  () => 
  
    {
  
    it('payrun-login', () => 
      
    {
  
      // Public Site - Page (URL)
      
      cy.visit('https://dev.payrun.app/')
  
      //Log In Button - Click
  
      cy.get('.justify-start > .text-16').click()

      //Auth - Credential (E-mail and Password)
     
      cy.get("input[placeholder='email@work.com']").type('tahsin@gain.media') 
      
      cy.get("input[placeholder='Enter password']").type('Admin@125') 

      //Log In Button - Click
     
      cy.get("button[type='submit']").click() 

  
    })
  
  })