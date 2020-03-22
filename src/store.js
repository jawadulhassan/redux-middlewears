import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it on the state
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//then run the saga
sagaMiddleware.run(mySaga);

//render the application

export default store;
