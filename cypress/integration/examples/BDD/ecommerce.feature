Feature: End to End Validation

    application regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I Open Ecommerce Page
    When I add items to Cart
    And Validation the total prices
    Then Select the country submit and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I Open Ecommerce Page
    When I fill the form details
    |name |gender|
    |bobz |Male  |
    Then validate the forms behavior
    Then select the Shop Page