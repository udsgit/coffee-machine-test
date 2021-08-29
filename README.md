# Coffee Machine

Coffee Machine is an awesome web application that from a few input parameters (drink type, amount of money, 
number of sugars and extra hot check) is capable to order a drink and show a cool message of the desired drink.

## How it works

This app is based in two components:

* API (Express, Typescript)

This API is the core of the app. It has the business logic of the application and, giving some parameters,
returns the desired drink, or an error if something is wrong.

* Web App (Vue, Typescript)

This is a simple Vue page where the user enters the parameters (drink, money, sugar and extra hot) and see what the
application returns. The page does not validate anything.

To run the whole application, just execute:
```
make api-start
make web-start
```

This two commands will start both API and Vue services. Once you did this,
you could navigate to http://localhost:8080/ and see the Vue page.


You could also find an example of the request in the [request.http](request.http) file.


## Application business logic

This app is a common coffee machine (vending machine) where you have to insert money and 
select the type of drink you want, and it will return to you that beverage, in case 
you insert the enough money and select an available drink type. Easy peasy :)

So far so good. Here the list of the available parameters: 

|#|Name|Type|Required|Description|Values|Default|
|---|---|---|---|---|---|---|
|1|drinkType|string|true|Type of drink|tea, coffee, chocolate|
|2|money|float|true|Amount of money given by the user in unit of currency||
|3|sugars|int|false|Number of sugars|0, 1, 2|0|
|4|extraHot | boolean |false|Flag indicating if the user wants extra hot drink|true, false|false|


List of prices

|Drink|Price|
|---|---|
|Tea|40|
|Coffee|50|
|Chocolate|60|

And here, the business constraints:

* If the drink type is not *tea*, *coffee* or *chocolate*, it shows the following message:
```
The drink type should be tea, coffee or chocolate.
```
* If the amount of money does not reach the price of the drink, a message as the following is displayed:
```
The tea costs 40.
```
* If the number of sugars is not between 0 and 2, it shows a message like this:
```
The number of sugars should be between 0 and 2.
```
* If the arguments are right, the displayed message is:
```
You have ordered a coffee
```
* If the number of sugars is greater than 0, it includes the stick to the drink and it shows a message like this:
```
You have ordered a coffee with 2 sugars (stick included).
```
* If it adds extra hot option, the displayed message will be:
```
You have ordered a coffee extra hot with 2 sugars (stick included)    
```

## Current status (& what is expected from you)

This application was implemented by a developer who is no longer in the company.

His is a fullstack developer who has no knowledge about Typescript nor Vue.js, so he left the company giving us this gift.

By one hand, **the API**. As we said, it has the full business logic and is the core of the company. Our PM is asking to add
more drinks but is expensive (in time and money) and no one wants to do it.
* It reads input parameters
* It returns output message

He was also playing with some unit testing, so luckily we have the business logic covered.

By the other hand, **the web app**. Although is an easy web page, he did know nothing about Vue
so everything is tight and coupled. 
* It reads input parameters from the users
* It shows the response to the user

### So... What do you have to do?

Our PM wants to have a better web application, so he asked us if we could do the following things:

* When the parameters **does not pass** the API business validations, we want to show
   this message to the user in a different color (#bf6547). 
* When the parameters **pass** the API business validations, we want to show
   this message to the user in a different color (#6c9945).
* Also, our PM wants to show to the user every drink they have requested (in the same session, do not worry
  about databases). 

To do this we have to refactor some parts of the code, in order to be able to manage the validations
through the API. 

The team wants to follow **some** of these principles:

* Clean code
* SOLID principles
* Unit testing
* Design patterns (It's an API, so... probably you have to return different HTTP Codes ;)
* Decoupling
* Error handling
* TDD

You don't have to implement them all (ofc!), but make the code better to be more comfortable with it.

Also, if there is time, the CEO has asked us to implement a new feature so that the user would know
how much money he spent on the vending machine. We don't have any other requirement, so we have to
improvise and add something worthy for our users.


## Project set up

Install and run the application.
```
make build
make api-start
make web-start 
```

Also, if you want to run the tests for the API, you could execute:
```
make test
```
