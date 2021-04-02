import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 

// "createStore" to helps in the  'Redux "store"'  creation
import { createStore } from 'redux';
// "Provider" helps in flow of  "Redux" data in entire application
import { Provider } from 'react-redux';
import RootReducer from './services/Reducers/RootReducer';

// By the help of 'RootReducer' we're going to create a "STORE" (that contains entire data of our application)
// since, "store" is a userDefined variable.
const store = createStore(RootReducer)

// Below line prints all possible things of store.
//  since, below is "store" so, it prints all the things that present in 'store'
// console.log("store data", store);

// console.log() returns outpt-
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()

// 

ReactDOM.render(

  // here, {store} comes from userDefined const 'store' 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
