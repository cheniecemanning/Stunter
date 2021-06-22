# Stunter

Find your perfect stunt performer!
Just drag the cards to "like" or "dislike" a performer, you can then view all your liked performers(Stunters) by pressing the "Show liked performers" button.

This project was made using the HTML drag-and-drop API and React Hooks. 

## Directory Layout

```
components 
    └── StunterProfile
        ├── StunterProfile.jsx 
        ├── package.json
        └── styles.js 
  ```
I chose this directory structure as it allows all the code that belongs to a component to be accessible within a single folder and makes it easily extractable.The package.json sets the main property to the component entry point, allowing it to be imported like `import StunterProfile from 'components/StunterProfile'` instead of `import FilterSlider from 'components/StunterProfile/StunterProfile'`.

## Next Steps and improvements:

- Utilise variables for styling
- Make responsive
- More exciting additions such as Stunter contact details and 'Email a stunter'
- Implement a DnD library


## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

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

### Initial Design

![Initial visual design of the project](https://github.com/cheniecemanning/Stunter/blob/6474966dc906189e96c7ab61aec983490fcc4aa9/src/assets/initalDesign.png)

![Initial Design of the events in the project](https://user-images.githubusercontent.com/26623868/122906779-6e823600-d34a-11eb-98b9-d39acc17d48b.png)

