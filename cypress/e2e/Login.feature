Feature: Login features
    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid email and password
        And I click on login button
        Then I should logged in and redirected to account page

    Scenario: Login with invalid credentials
        Given I am on the login page
        When I enter invalid email and password
        And I click on login button
        Then I should see invalid credentials message

    Scenario: Leave the credential fields empty
        Given I am on the login page
        When I leave the email and password field empty
        And I click on login button
        Then I should see invalid credentials message
