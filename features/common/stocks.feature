Feature: Stocks page

  Scenario: Signing in
    Given I am signed in at the welcome page
    When I click the stocks nav link
    Then I should see the stocks page
