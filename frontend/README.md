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

## Colors and Shadows
```
--primary-color: #0287C3;
--secondary-color: #0276aa;
--text-color: #4b5255;
--text-color-muted: #869094;
--placeholder-color: #aaa;
--background-color: white;

--flower-color: #2B6491;
--edible-color: #6C71C1;
--concentrate-color: #396DAC;
--topical-color: #8D63B4;
--merchandise-color: #A7529F;

--action-color: #007A71;

--exit-red: #CE4047;

--box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 6px, rgba(0, 0, 0, 0.22) 0px 1px 4px;
--box-shadow-hover: rgba(0, 0, 0, 0.20) 0px 3px 10px, rgba(0, 0, 0, 0.28) 0px 3px 10px;
```

## Style Example

Here is a prototype of our [Online Ordering](https://static.weaveiq.com/menu/ht/index.html#inventory) system. You can use this for style inspiration!



