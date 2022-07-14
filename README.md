**Coffe Shop App**


Write a **class** called **CoffeeShop** which have three **instance variables**:

1. **name**:a string( basically of the shop)
2. **menu**:an array of items (of object type, with each **item** containing(name of the item). **type**        (whether   food or drink) and **price**
3. **orders**: an empty array

and seven methods:

1. **addOrder**: adds the **name** of the item to the end of the **orders** menu.Otherwise return "This item is currently unavailable"
2. **fullfillOrder**: if the **orders** array is **not empty**, return "The {item} is ready!". If the **orders** array is **empty**, return "All orders have been fulfilled!"
3. **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array
4. dueAmount: returns the total amount due for the **orders** taken
5. **cheapestitem** : returns the **name** of the cheapest item on the menu
6. **drinksonly**: returns the item **names** of the type **drink** from the menu
7. **foodOnly**: returns only the item **names** of the type **food** from the menu


IMPORTANT!!!  Orders are fulifilled in a **FIFO** (first-in, first-out)order.