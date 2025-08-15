/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const blog = require("../../pages/agi/blog.function");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("que eu acesse o blog da agibank", () => {
  cy.visit("/");
});

// Testes para a sessão de Stories

When("eu vejo a sessão stories do blog", () => {
  blog.viewStoriesSession;
});

When("eu acesso Ver Mais", () => {
  blog.clickSeeMoreStories;
});

Then("sou direcionado para a página de Stories", () => {
  blog.viewStoryTittle;
});

// Testes para a sessão institucional do Agibank

When("eu vejo a opção O Agibank no menu principal", () => {
  blog.viewOptionAgibankMenu;
});

When("eu acesso a opção O Agibank", () => {
  blog.clickOptionAgibankMenu;
});

Then("sou direcionado para a página institucional do Agibank", () => {
  blog.viewOAgibankTittle;
});

// Testes para o campo de busca

When("realizar uma pesquisa de um artigo especifico", () => {
  blog.clickLens();
  blog.fillInSpecificArticle();
});

Then("devo ver se ele foi exibido na tela com sucesso", () => {
  blog.assertTextArticle();
});