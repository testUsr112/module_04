# Feature: Sign In

## Scenario: Sign in with valid credentials
Given the user is on the Login page  
When the user enters a valid email and password  
And the user clicks the 'Login' button  
Then the user should be signed in successfully  
And the user should be redirected to account page  


---

# Feature: Price Range filter

## Scenario: Sort by price range
Given the user is on the Home page  
When the user sets the minimum price to 50  
And the user sets the maximum price to 100  
Then only products with prices between 50 and 100 are displayed  


---

# Feature: Product details page

## Scenario: View product details
Given the user is on the Home page  
When the user clicks on the first product from the gallery  
Then the product details page is opened  
And the product name is displayed  
And the product image is displayed  
And the product price is displayed  
And the product description is displayed  


---

# Feature: Product sorting

## Scenario: Sort alphabetically in ascending order
Given the user is on the Home page  
When the user selects 'Name (A–Z)' sorting option  
Then 'Name (A–Z)' sorting option is selected  
And the products are sorted by name in ascending alphabetical order  


---

# Feature: Language change

## Scenario Outline: Change site language
Given the user is on the Home page  
And the current language is English  
When the user selects <lang> from the language selector  
Then the menu items are in <lang>  
And the side filters are in <lang>  
And the footer content is in <lang>  

### Examples:
| lang |
|------|
| DE   |
| ES   |
| FR   |
| NL   |
| TR   |


---

# Feature: Adding to Cart

## Scenario: Add product to the cart
Given the user is on the 'Pliers' product page  
When the user selects product quantity 2  
And the user clicks 'Add to cart' button  
Then the cart icon displays number 2  

## Scenario: Checking the Cart
Given product 'Pliers' is added to the cart  
And the product quantity is 2  
When the user clicks on the cart icon  
Then the cart page is opened  
And the product name is 'Pliers'  
And the product quantity is 2  
And Price is 12.01  
And Total is 24.02  


---

# Feature: Favourites

## Scenario: Add product to Favourites
Given the user is on the product page  
When the user clicks the 'Add to Favourites' button  
Then a toast is displayed  
And the toast message is 'Product added to your favorites list'  

## Scenario: Favorites list
Given a product is added to 'Favorites'  
When the user clicks account name in the menu  
And the user selects 'My Favorites'  
Then Favorites page is opened  
And the added product is in the Favorites list  
And the product name is displayed  
And the product image is displayed  
And the product description is displayed  


---

# Feature: Search

## Scenario: Search by full or partial name
Given the user is on the Home page  
When the user enters 'Claw' into the search field  
And the user clicks on the 'Search' button  
Then only products whose names contain 'Claw' are displayed  
