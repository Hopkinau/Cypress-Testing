Feature: End to End Validation

    application regression

    Scenario: Ecommerce products delivery
    Given I Open Ecommerce Page
    When I add items to Cart
    And Validation the total prices
    Then Select the country submit and verify Thank you


    # Scenario: Filling the form to shop
    # Given I Open Ecommerce Page
    # When I fill the form details
    # Then validate the forms behaviour
    # And select the Shop Page