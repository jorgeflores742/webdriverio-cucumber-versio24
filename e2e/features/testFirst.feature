Feature: Cucumber proof of concept

  Scenario: First Scenario
    Given I navigate to trello
    And I with account valid clicked in button login
    And I create a new board
      | Title   | Type    | Background  | Select background |
      | Pink    | public  | color       | pink              |
    Then I expect my board created