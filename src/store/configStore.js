import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import questionsReducer from '../reducers/questions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const store = createStore(
    combineReducers({
      topicQuestions: questionsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
