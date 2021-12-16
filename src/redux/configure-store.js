import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(reducer, {}, bindMiddleware(middleware));

sagaMiddleware.run(rootSaga);

export default store;
