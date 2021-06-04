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
      "contain",
      "your email and/or password are incorrect"
    );
  });
  it("fail Login with wrong password", function() {
    cy.visit("http://localhost:8080/#/login");
    cy.get(".input").type("mohamed@instabug.com");
    cy.get(".passinput").type("12345678asfas");
    cy.get(".active").click();

    cy.url().should("contain", "http://localhost:8080/#/login");
    cy.get(".loginerror").should(
      "contain",
      "your email and/or password are incorrect"
    );
  });
  it("fail Login with not valid email", function() {
    cy.visit("http://localhost:8080/#/login");
    cy.get(".input")
      .type("ddd")
      .focus()
      .blur();

    cy.url().should("contain", "http://localhost:8080/#/login");
    cy.get(".error").should("contain", "Enter a valid email address");
    cy.get("input").should("have.css", "border", "red");
  });
});
