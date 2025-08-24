describe('template spec', 

{ 

viewportHeight: 1000, 

viewportWidth: 2000, 

}, 

() => 

{ 

it('update-auth-page-login-settings-expense', () => 

{ 

//Log In Page - URL 

 

cy.visit('https://dev.payrun.app/login') 

 

//Auth - Credential (E-mail and Password) 

cy.get('#email').type('tahsin@gain.media') 

cy.get('#password').type('Admin@123') 

 

//Log In Button - Click 

cy.get('button[type="submit"]').click() 

 

//Organization URL 

cy.origin('https://qa-automation.dev.payrun.app/', () => { 

 

//Delay 

 

cy.wait(1000)  

 

//Settings - Click 

 

cy.contains('span.text-regular.flex-1.text-14.font-normal.text-left.pl-2', 'Settings', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Delay  

 

cy.wait(2000)  

 

//Expense - Click 

 

cy.contains('p.-mb-\\[8px\\]', 'Expense', { timeout: 10000 }) 

.should('be.visible') 

.click(); 

 

//Add New Button - Click 

cy.contains('button', 'Add new', { timeout: 10000 }).should('be.visible').click(); 

 

//Expense Type - Add  

 

cy.get('input[placeholder="Enter your expense type"]') 

.should('be.visible') 

.type('Medical Allowance!'); 

 

//Delay 

 

cy.wait(1000) 

 

//Status Button - Click 

 

cy.get('button[role="switch"]').click(); 

 

//Add Button - Click 

 

cy.get('#custom-root-scrollbar > div > div.fixed.top-0.left-0.w-screen.h-screen.cursor-auto.bg-black.bg-opacity-20.z-\\[120\\].flex.justify-center.items-start > div > div.flex.flex-col.justify-between.h-\\[90\\%\\] > div.false.pt-\\[20px\\].pb-\\[15px\\].pb-10.rounded-b-lg > div > div:nth-child(2) > button') 

.click(); 

 

//Delay 

 

cy.wait(1000) 

 

//Manage - Click 

 

cy.get('#custom-root-scrollbar > div > div.grid.grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-3.gap-8 > div > div.p-5.md\\:p-8 > div > a > p') 

.should('be.visible')  

.click();  

//Actions Button - Click  

 

cy.get('#custom-scrollbar-expenses-data-table > table > tbody > tr:nth-child(1) > td.undefined.px-6.md\\:pr-0.rounded-r-lg.w-\\[10\\%\\].py-4.font-medium.text-gray-900.text-end.md\\:pr-5 > div > div > button') 

.click(); 

 

//Delay 

 

cy.wait(1000) 

 

//Delete - Click 

 

//cy.contains('button', 'Delete').click(); 

//cy.get('button.bg-red').contains('Delete').click(); 

 

//Edit Button - Click 

 

cy.get('#custom-scrollbar-expenses-data-table > table > tbody > tr:nth-child(1) > td.undefined.px-6.md\\:pr-0.rounded-r-lg.w-\\[10\\%\\].py-4.font-medium.text-gray-900.text-end.md\\:pr-5 > div > div > ul > li.w-full.px-4.py-3.cursor-pointer.hover\\:bg-white-light.rounded-t-lg > button') 

.click(); 

 

//Expense Type - Add  

 

cy.get('input[placeholder="Enter your expense type"]') 

.should('be.visible') 

.clear() 

.type('Medical Allowance'); 

 

//Delay 

 

cy.wait(1000) 

 

//Status Button - Click 

 

cy.get('#custom-root-scrollbar > div > div.fixed.top-0.left-0.w-screen.h-screen.cursor-auto.bg-black.bg-opacity-20.z-\\[120\\].flex.justify-center.items-start > div > div.flex.flex-col.justify-between.h-\\[90\\%\\] > div.px-6.flex-1 > div > div.mt-5.flex.items-center.gap-4 > div > button > span') 

.click(); 

 

//Delay 

 

cy.wait(3000) 

 

//Save Button - Click 

 

cy.contains('button', 'Save').click(); 

 

 

}); 

 

}); 

 

}) 