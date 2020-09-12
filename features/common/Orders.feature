Feature: Orders page

  Scenario: Navigating to the orders page
    Given I am signed in at the welcome page
    When I click the orders nav link
    Then I should see the orders page
