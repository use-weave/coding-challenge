# Weave Frontend Coding Challenge

## Setup

Get all of the dependencies by running:
```
npm i
```
That will read from the package.json and give you everything you need to get going.

To get the server started, run:
```
npm start
```

## Technology Used
- [LitElement](https://lit-element.polymer-project.org) - For a little help building web components.
- [Redux](https://redux.js.org) - For global state management.
- [pwa-helpers](https://github.com/Polymer/pwa-helpers) - For connecting redux to our component and a basic routing strategy. 

## Objective

You will be building a driver assignment page for a cannabis delivery dashboard. This dashboard will be viewed by dispensary managers and allow them to see their delivery drivers and assign orders from a list of pending orders. First you will need to create a page to show available drivers and orders placed in a clean and elegant way. Make sure to show off all of the driver and order information in a clean hierarchy. The driver and order data has been stubbed out in Redux. Finally, you will need a way to assign an order to an available driver using Redux actions.

The things we are looking for:
- Clean and elegant design
- Usage of web components
- Usage of Redux actions and reducers

## Considerations
- Google is your friend. We use Google as well. If you don't know the answer to something, feel free to do that. Part of the job is knowing how to find answers.
- We make heavy use to ES6 style coding for Javascript. If you haven't seen this before, [check this page out for a walkthrough](https://babeljs.io/docs/learn-es2015/). We are coding for/in the future, basically.
- [No jQuery](http://youmightnotneedjquery.com), [please](http://vanilla-js.com)!
