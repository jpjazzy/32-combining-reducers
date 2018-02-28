# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: 
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"

_Last modified_: 2/27/2018

# App use

Launch a webpack build to create a live server and go to the main / route to view the dashboard.

Input a category and budget to get started on making a list of categories and budgets.

Input an expense and price to add them to the budget. (no math yet!)

# Lab Readme (SPECS)

![cf](http://i.imgur.com/7v5ASc8.png) 32: Budget Tracker Continued
===

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* Submit a pull request to this repository
* Submit a link to your pull request on canvas
* Submit a question, observation, and how long you spent on canvas

## Requirements
#### Feature Tasks
##### expense
* in this app an expense should contain at least the following properties
  * `id` a uuid
  * `categoryID` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `price` a number that is the total amount of $ in the category
  * feel free to add more to your expense

##### redux
###### app reducer
* export a reducer that holds the entire app state from `reducer/index.js`
* create a reducer that will combine your categories reducer and expenses reducer

###### expenses reducer
* create a category reducer in your your reducer directory
* this reducer should support the following interactions
  * `EXPENSE_CREATE` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
* if you need others feel free to add them

###### action creators
* you should create an action creator for each interaction supported by your expenses reducer

###### store
* in `lib/store.js` exports a function that will return a redux store from your app reducer

##### Components
Create the following components and structure them according to the following diagram.
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of CategoryItems
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of ExpenseItems
              ExpenseForm -- for updating an expense
```

###### Update the CategoryItem Component
* should keep all of the features described in lab-31
* add an ExpenseForm to your category item that enables the user to create expenses on your app state
* display a list of all the ExpenseItems belonging to the category


##### ExpenseForm Component
* should have an `onComplete` prop that will be invoked with the form state onSubmit
* should support an `expense` prop that will both set the initial form state, and update the state in the hook on `componentWillReceiveProps()`
* should have a `buttonText` prop that will configure the submit buttons text

##### ExpenseItem Component
* should have a button that will delete the expense from the Apps `onClick`
* should display the `name` and `price` of the component
* should display an ExpenseForm that will enable the user to update the expense in the app state

#### Test
* Test your ExpenseForm and CategoryForm
* Test all of your action creators
* Test each reducer used in your combineReducers

####  Documentation
Write a description of the project in your README.md