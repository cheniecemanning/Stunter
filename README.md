# Stunter

Find your perfect stunt performer!
Just drag the cards to "like" or "dislike" a performer, you can then view all your liked performers(Stunters) by pressing the "Show liked performers" button.

This project was made using the HTML drag-and-drop API and React Hooks.

## Quick start

### How to install

1. Clone this project `https://github.com/cheniecemanning/Stunter.git`
2. Change into the directory `cd Stunter`
3. Run `npm install` to add node modules/dependancies
4. Run `npm start` and view the project in your browser at (http://localhost:3000)

## Directory layout

```
components
    └── StunterProfile
        ├── StunterProfile.jsx
        ├── package.json
        └── styles.js
  ```
I chose this directory structure as it allows all the code that belongs to a component to be accessible within a single folder and makes it easily extractable.The package.json sets the main property to the component entry point, allowing it to be imported like `import StunterProfile from 'components/StunterProfile'` instead of `import FilterSlider from 'components/StunterProfile/StunterProfile'`.

## User stories

```
As a user
So that I can choose a stunt person for my project,
I want to be able to see stacked cards displaying the stunt persons image.

As a user
So that I have the option to choose which stunt person I 'like',
I want to be be able to drag and drop the cards to indicate if I 'like or 'dislike' the stunt person.

As a user
So that I can see the next stunt person in the stack of cards,
I want the previous card to be cleared from the screen after I 'like' or 'dislike' the stunt person.

As a user
So that I can make a choice about which stunt person I want for my project,
I want to be able to see which stunt person/s I 'liked'.
```

## Initial design

### Diagram

Displaying the 'Drag and drop' process for the stacked cards.

![Initial Design of the events in the project](https://user-images.githubusercontent.com/26623868/122906779-6e823600-d34a-11eb-98b9-d39acc17d48b.png)

### Visual mock-up

Displays design decisions and assumptions about the users needs.

![Initial visual design of the project](https://github.com/cheniecemanning/Stunter/blob/6474966dc906189e96c7ab61aec983490fcc4aa9/src/assets/initalDesign.png)

## Technologies:

JavaScript
HTML Drag and Drop API - For the drag and drop functionality
React - JavaScript library
React Testing Library - Testing tool for checking the outputted document
React-Bootstrap - For visual styling

## Specification:

Create a UI that displays draggable swipe cards in a stack.

IF swiped/dragged right, give the user feedback that the item is 'liked' or 'selected'
IF swipe left show that the item is 'disliked'
IF released/dropped the card must move off the screen

Core challenges:

• Creating a data store with an array of ‘items’ to be displayed in the UI.

• Displaying the stacked cards on the screen.

• Implement a mechanism for dragging and dropping an item.

• Animating or clearing the card from the screen on release of a drag.

• Updating the data layer with the user’s choice.

## Available scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm install`


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Next steps and improvements:

- Unit testing
- Change card style onClick()
- Utilise theming, variables and mixinsf or styling
- Implement a DnD library
- Make responsive
- More exciting additions such as Stunter contact details and 'Email a stunter'
