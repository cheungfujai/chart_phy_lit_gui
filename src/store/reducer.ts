import { combineReducers, createStore, applyMiddleware } from 'redux';
import  QuestionReducers  from './reducers/QuestionReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    question: QuestionReducers
});

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer,loadFromLocalStorage(), middleware);

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;

export default store;