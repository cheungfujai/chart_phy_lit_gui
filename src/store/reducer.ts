import { combineReducers, createStore, applyMiddleware } from 'redux';
import  QuestionReducers  from './reducers/QuestionReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    question: QuestionReducers
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof rootReducer>;

export default store;