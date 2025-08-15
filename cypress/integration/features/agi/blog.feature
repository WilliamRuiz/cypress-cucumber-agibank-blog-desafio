Feature: Blog da Agibank
  Como usuário, gostaria de explorar algumas funcões do blog da Agibank

  Background:
    Given que eu acesse o blog da agibank

  Scenario: Ver mais stories do blog e verificar se a lista foi retornada com sucesso
    When eu vejo a sessão stories do blog
    And eu acesso Ver Mais
    Then sou direcionado para a página de Stories

  Scenario: Ver o conteúdo institucional do Agibank
    When eu vejo a opção O Agibank no menu principal
    And eu acesso a opção O Agibank
    Then sou direcionado para a página institucional do Agibank

  Scenario: Realizar uma pesquisa de um artigo especifico e validar se somente ele será retornado na busca
    When realizar uma pesquisa de um artigo especifico
    Then devo ver se ele foi exibido na tela com sucesso