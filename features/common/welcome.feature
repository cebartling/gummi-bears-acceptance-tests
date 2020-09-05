Feature: Welcome page

  Scenario: Navigate to welcome
    When I navigate to the welcome page
    Then I should see the welcome page

  Scenario: Signing in
    Given I am at the welcome page
    When I click the sign in nav link
    Then I should see the authenticated navigation menu
