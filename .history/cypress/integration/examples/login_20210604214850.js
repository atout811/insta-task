describe("Login test", function() {
  it("Successful Login", function() {
    cy.visit("http://localhost:8080/#/login");
    cy.get(".input").type("mohamed@instabug.com");
    cy.get(".passinput").type("12345678");
    cy.get(".active").click();

    cy.url().should("contain", "http://localhost:8080/#/");
  });
  it("fail Login", function() {
    cy.visit("http://localhost:8080/#/login");
    cy.get(".input").type("mohamedsss@instabug.com");
    cy.get(".passinput").type("12345678asfas");
    cy.get(".active").click();

    cy.url().should("contain", "http://localhost:8080/#/login");
    cy.get(".loginerror").should(
      "have.value",
      "you email and/or password are incorrect"
    );
  });
});
