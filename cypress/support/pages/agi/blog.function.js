const blogElement = require("./blog.element");

module.exports = {
  viewStoriesSession: function () {
    cy.get(blogElement.viewStoriesSession).should("contain.text", "Stories");
  },

  clickSeeMoreStories: function () {
    cy.get(blogElement.seeMoreButton).should("be.visible").click();
  },

  viewStoryTittle: function () {
    cy.get(blogElement.viewStoryPageTittle).should("contain.text", "Story");
  },

  viewOptionAgibankMenu: function () {
    cy.get(blogElement.optionAgibankButton).should("be.visible");
    cy.get(blogElement.viewTextOptionAgibank).should(
      "contain.text",
      "O Agibank"
    );
  },

  clickOptionAgibankMenu: function () {
    cy.get(blogElement.optionAgibankButton).should("be.visible").click();
  },

  viewOAgibankTittle: function () {
    cy.get(blogElement.viewOAgibankPageTittle).should(
      "contain.text",
      "O Agibank"
    );
  },

  clickLens: function () {
    cy.get(blogElement.searchOpen).click({ force: true });
  },

  fillInSpecificArticle: function () {
    cy.get(blogElement.searchField).type("carreira{enter}", { force: true });
    cy.wait(4000);
  },

  assertTextArticle: function () {
    cy.contains("Resultados encontrados para: carreira");
  }
};
