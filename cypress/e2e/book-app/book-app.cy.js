const { expect } = require("chai");

beforeEach(function () {
  cy.visit("http://localhost:3000");
});

describe("Login tests for Book App", () => {
  it("Should open home page", () => {
    cy.contains("Log in").should("be.visible");
  });

  it("Should successfully log in", () => {
    cy.login("test@test.com", "test");
    cy.contains("test@test.com").should("be.visible");
  });

  it("Should successfully log out", () => {
    cy.login("test@test.com", "test");
    cy.contains("test@test.com").should("be.visible");
    cy.logout();
    cy.contains("Log in").should("be.visible");
  });
});

describe("Tests for books added in favorites", () => {
  it("Should add a new book and then add it in the favorites", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Оно", "Стивен Кинг");
    cy.addBook("Капитанская дочка", "Александр Пушкин");
    cy.get(".btn-success").then((element) => {
      element.click();
    });
    cy.contains("Favorites").click();
    cy.contains("Оно").should("be.visible");
    cy.contains("Капитанская дочка").should("be.visible");
    cy.logout();
  });

  it("Should add a new book to favorites with checked checkbox 'add to favorite'", () => {
    cy.login("test@test.com", "test");
    cy.addFavoriteBook("Вино из одуванчиков", "Рэй Брэдберри");
    cy.addFavoriteBook("Идиот", "Федор Достоевский");
    cy.contains("Favorites").click();
    cy.contains("Вино из одуванчиков").should("be.visible");
    cy.contains("Идиот").should("be.visible");
    cy.logout();
  });

  it("Should delete books from favorites", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Маленький принц", "Антуан де Сент-Экзюпери");
    cy.addBook("Преступление и наказание", "Федор Достоевский");
    cy.get(".btn-success").then((element) => {
      element.click();
    });
    cy.wait(3000);
    cy.get("h4").should("be.visible").click();
    cy.contains("Маленький принц").should("be.visible");
    cy.contains("Преступление и наказание").should("be.visible");
    cy.get(".btn-secondary").then((element) => {
      element.click();
    });
    cy.wait(3000);
    cy.get("h4").should("be.visible").click();
    cy.get(".container > div > div > a").should(
      "contain",
      "Please add some book"
    );
    cy.logout();
  });
});
