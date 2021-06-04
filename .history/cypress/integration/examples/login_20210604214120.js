describe("Login test", function() {
  it("Successful Login", function() {
    cy.visit("http://localhost:8080/#/login");
    cy.get(".input").type("mohamed@instabug.com");
    cy.get(".passinput").type("12345678");
    cy.get(".active").click();
  });
});
