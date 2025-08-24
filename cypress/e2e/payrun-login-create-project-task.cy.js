describe('template spec',
 
  {
    viewportHeight: 1000,
    viewportWidth: 2000,
  },
 
  () =>
   
 
  {
    it('payrun-login-create-project-task', () =>
     
      {
    
        //Log In Page - URL

        cy.visit('https://dev.payrun.app/login')

        cy.wait(3000) //Delay
 
        //Auth - Credential (E-mail and Password)
 
        cy.get('#email').type('tahsin@gain.media')

        cy.wait(1000) //Delay

        cy.get('#password').type('Admin@124')

        cy.wait(2000) //Delay
 
        //Log In Button - Click
 
        cy.get('button[type="submit"]').click()

        //Organization URL
     
        cy.origin('https://version-4th.dev.payrun.app/', () => {

        //Delay

        cy.wait(8000) 

        //Employees - Click

        cy.contains('p.sidebar-text', 'Projects', { timeout: 10000 }).should('be.visible').click();

        cy.wait(2000) //Delay

        //New Project > Input Field   

        cy.get('input[name="name"]')
          .should('exist')
          .should('be.visible')
          .should('not.be.disabled')
          .click()
          .type('Project - 1');

          cy.wait(2000) //Delay

        //New Project > Description - Click

        cy.get('textarea')
          .should('exist')
          .should('be.visible')
          .should('not.be.disabled')
          .click()
          .type('This is a Test Description!', { force: true });

        cy.wait(2000) //Delay  

        //New Project > Set Color

        cy.contains('Set color')
          .should('be.visible')
          .should('not.be.disabled')
          .click();


        //Delay  

        cy.wait(3000)  

        //New Project > Set Color > Ok

        cy.wait(2000) //Delay

        cy.contains('span', 'ok').click({ force: true });

        //New Project > Add - Click

        cy.contains('button', 'Add')
          .should('be.visible')
          .should('not.be.disabled')
          .click();

        cy.wait(2000) //Delay

        //Task Button - Click

        cy.contains('button', 'Tasks')
          .should('be.visible')
          .and('have.attr', 'type', 'button')
          .click();

        cy.wait(2000) //Delay

        //New Task - Name 

        cy.get('input[name="name"]', { timeout: 10000 })
          .should('be.visible')
          .should('not.be.disabled')
          .click({ force: true })
          .type('Task - 1', { force: true });


        //New Task > Project 

        cy.get('input.react-single-select__input', { timeout: 15000 })
          .should('be.visible')
          .type('Project - 1');

        //Delay

        cy.wait(1500)

        //New Task > Select Project 

        cy.get('.react-single-select__option').contains('Project - 1').click();

        cy.wait(2000) //Delay

        //New Task - Click Add

        cy.contains('button', 'Add')
          .should('be.visible')
          .should('not.be.disabled')
          .click();


    });

  });

})