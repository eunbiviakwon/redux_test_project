import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./store/modules";
//우리 리액트 앱이랑 redux store랑 연동하기위해 provider를 가져옴
import { Provider } from "react-redux";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
// 액션, 스토어안에 들어갈 상태값, 그 상태값을 어떻게 변화시킬지에대한 리듀서

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
