# Currency Converter

A modern, real-time currency exchange application. This project demonstrates advanced React patterns, including custom hooks and asynchronous data fetching.


## ✨ Features
* **Live Exchange Rates**: Fetches real-time data from `CurrencyAPI` to ensure accurate conversion.
* **Custom Hooks**: 
    - `useRatesData`: Manages the entire asynchronous logic for fetching rates, including loading and error states.
    - `useCurrentDate`: Handles a real-time clock that updates every second.
* **State Management**: Robust handling of different application states (Loading, Success, and Failure).
* **Responsive Design**: Fully functional and aesthetically pleasing on both mobile and desktop devices.
* **Styled Components**: Clean and maintainable CSS-in-JS architecture.

## 🛠️ Built With
* **React** (Functional Components)
* **Styled Components** (Custom UI and layout)
* **React Hooks** (`useState`, `useEffect`, and custom hooks)
* **Asynchronous JavaScript** (Promises, Async/Await)
* **CurrencyAPI** (External data source)


##  What's inside?
![Animation](https://github.com/user-attachments/assets/1acdeaf2-f4bc-4e36-b7e2-5a26f094179f)



## Demo
https://szymonjaworski.github.io/currency-converter-react/


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
