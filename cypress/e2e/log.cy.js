describe('Test', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.login("test@test.com","test")
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  });
  it('add favourite book',()=>{
    cy.contains("Add new").click()
    cy.get('#title').type('Harry Potter')
    cy.get('#description').type('Fantasy')
    cy.get('#fileCover').attachFile('hp.jpg')
    cy.get('#authors').type('Rowling')
    cy.get('#favorite').click()
    cy.get('#favorite').click()
    cy.contains("Submit").click();
    cy.contains("Delete from favorite").should('be.visible')
  });
  it('delete favourite book',()=>{
    cy.contains("Delete from favorite").click()
    cy.contains("Add to favorite").should('be.visible')
    
  });
  it('favourite book list empty',()=>{
    cy.get('h4').click()
    cy.contains('Please').should('be.visible')
    
  });
})