describe('template spec',
 
  {
    viewportHeight: 1000,
    viewportWidth: 2000,
  },
 
  () =>
   
 
  {
    it('payrun-public-site-contact-us', () =>
     
      {
    
        //Log In Page - URL

        cy.visit('https://dev.payrun.app/')

        cy.wait(3000) //Delay

        //Pricing Page - Click

        cy.get('a[href="/pricing"]').first().click()

        cy.wait(3000) //Delay

        //Features Page - Click

        cy.get('a[href="/features"]').first().click()

        cy.wait(3000) //Delay

        //Blog Page - Click

        cy.get('a[href="/blog"]').first().click()

        cy.wait(3000) //Delay

        //Main Page - Click

        cy.visit('https://dev.payrun.app/')

        cy.wait(3000) //Delay

        //About Us Page - Click

        cy.get('body > div:nth-child(22) > footer > div > div.flex.flex-col.md\\:flex-row.justify-between.pb-10 > div.flex.flex-col.gap-20.md\\:gap-10.lg\\:gap-28.px-2.md\\:px-0 > div > div:nth-child(1) > a:nth-child(1)')
          .click()

        cy.wait(3000) //Delay

        //Contact Us Page - Click

        cy.get('body > div:nth-child(22) > footer > div > div.flex.flex-col.md\\:flex-row.justify-between.pb-10 > div.flex.flex-col.gap-20.md\\:gap-10.lg\\:gap-28.px-2.md\\:px-0 > div > div:nth-child(1) > a:nth-child(2)')
          .click()

        cy.wait(3000) //Delay

        //Blog Page - Click

        cy.get('body > div:nth-child(22) > footer > div > div.flex.flex-col.md\\:flex-row.justify-between.pb-10 > div.flex.flex-col.gap-20.md\\:gap-10.lg\\:gap-28.px-2.md\\:px-0 > div > div:nth-child(2) > a:nth-child(2)')
          .click()
        
        cy.wait(3000) //Delay

        //Privacy Policy Page - Click

        cy.get('body > div:nth-child(22) > footer > div > div.border-t-\\[2px\\].border-border.flex.flex-col-reverse.md\\:flex-row.gap-2.justify-between.items-center.pt-4.px-2.md\\:px-0 > div > a:nth-child(1)')
          .click()

        cy.wait(3000) //Delay

        //Terms & Conditions Page - Click

        cy.get('body > div:nth-child(22) > div > div.flex.flex-col.md\\:flex-row.md\\:gap-20.h-full.xl\\:px-32.lg\\:px-10 > div.w-full.md\\:w-1\\/4.flex.flex-col.gap-1.py-2.md\\:py-10.px-5.md\\:px-0 > a.text-center.md\\:text-left.text-16.font-medium.focus\\:outline-none.hover\\:bg-gray-blues.p-2.rounded-md.text-border')
          .click()

        cy.wait(3000) //Delay

        //Main Page - Click

        cy.visit('https://dev.payrun.app/')

        cy.wait(3000) //Delay

        //Main Page (Start Your Free Trial) - Click

        cy.get('body > div:nth-child(22) > div > section > section:nth-child(1) > div > div:nth-child(2) > div > a > div > button > span:nth-child(2)')
         .click()

        cy.wait(3000) //Delay

        //Main Page - Click

        cy.visit('https://dev.payrun.app/')

        cy.wait(3000) //Delay

        //Main Page (Get Payrun for Free) - Click

        cy.get('body > div:nth-child(22) > div > section > section.lg\\:my-32.mt-10.text-center.lg\\:text-left.px-5.py-20.lg\\:px-0.lg\\:py-0 > div > a')
          .click()

        cy.wait(3000) //Delay

        //Main Page - Click

        cy.visit('https://dev.payrun.app/')

        cy.wait(3000) //Delay

        //Contact Us Page - Click

        cy.get('body > div:nth-child(22) > footer > div > div.flex.flex-col.md\\:flex-row.justify-between.pb-10 > div.flex.flex-col.gap-20.md\\:gap-10.lg\\:gap-28.px-2.md\\:px-0 > div > div:nth-child(1) > a:nth-child(2)')
          .click()

        cy.wait(3000) //Delay

        //Contact Us Page (Details)

        //Name

        cy.get('input[name="name"]')
          .type('John Doe')       
          .should('have.value', 'John Doe') 

        cy.wait(1000) //Delay

        //Email

        cy.get('input[name="email"]')
          .type('john.doe@example.com')  
          .should('have.value', 'john.doe@example.com')

        cy.wait(1000) //Delay

        //Phone Number

        cy.get('input[name="phone"]')
          .type('0123456789') 
          .should('have.value', '0123456789')

        cy.wait(1000) //Delay

        //Description

        cy.get('textarea[name="description"]')
          .type('Hello, This is a Test Message.')
          .should('have.value', 'Hello, This is a Test Message.')

        cy.wait(1000) //Delay

        //cy.get('#recaptcha-anchor > div.recaptcha-checkbox-border').click()

        //cy.wait(1000) //Delay

        //Submit Button - Click

        cy.get('button[type="submit"]').click()
        

    });

  });