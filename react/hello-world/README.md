# Weave React Coding Challenge

# Setup
Get all of the dependencies by running:
```
npm i
```
That will read from the `package.json` and give you everything you need to get going.

To get the server started, run:
```
npm start
```
That will build the app, run it on port `3000`, and open a browser window.

# The Challenge
At Weave, we make heavy use of `React` for front-end components and we use `Redux` for managing state. This challenge will test your ability to code for these projects, or to figure out how to use them.

The objective is to create a simple app that displays a list of items and a form that lets you add to this list.

You will start by opening [src/App.js](./src/App.js). The file is well-documented and should provide you with a basic skeleton of an app.

We need you to create a form component that has an input field. When submitted, it will add an item to the list by triggering a redux action. The form component has been created in the `components` directory inside of `src`. You would not connect this component to redux directly. It should be what is known as a "dumb component" (should be a topic of this in the redux docs). The form will have to communicate through props and callbacks to the top level app component.
[Relevant documentation](http://redux.js.org/docs/basics/UsageWithReact.html)

Another component that is not connected to redux will be an `Item` component (already created in the components directory). That should be a simple component just for rendering a list item. You may use a [Stateless Component](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) here if you prefer.

You will need to fill in the [action/Items.js](./src/actions/Items.js) file along with modify the [reducers/Items.js](./src/reducers/Items.js) file.

Feel free to add some style/flair in the [src/App.css](./src/App.css) file!

# Considerations
- Google is your friend. We use Google as well. If you don't know the answer to something, feel free to do that. Part of the job is knowing how to find answers.
- We make heavy use to es6 style coding for Javascript. If you haven't seen this before, [check this page out for a walkthrough](https://babeljs.io/docs/learn-es2015/). We are coding for/in the future, basically.
- No jQuery, please!
