describe('template spec',
 
  {
    viewportHeight: 1000,
    viewportWidth: 2000,
  },
 
  () =>
 
   
 
  {
    it('employees-employee-select-files', () =>
     
      {
    
        //Log In Page - URL

        cy.visit('https://dev.payrun.app/login')

        //Auth - Credential (E-mail and Password)
 
        cy.get('#email').type('tahsin@gain.media')
        cy.get('#password').type('Admin@123')

        //Log In Button - Click
 
        cy.get('button[type="submit"]').click()

        //Organization URL
     
        cy.origin('https://version-4th.dev.payrun.app/', () => {

        //Delay

        cy.wait(1500) 

        //Employees - Click

        cy.contains('p.sidebar-text', 'Employees', { timeout: 10000 }).should('be.visible').click();
     
        //Delay   

        cy.wait(2000) 

        //Employee Card - Click

        cy.get('#employees-card-list > div > div:nth-child(2)').click();

        //Delay

        cy.wait(2000)

        //Files - Click

        cy.contains('div[role="tab"]', 'Files').click();
        

    });

  });

})

  


     
  
 


  