import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

import { signinUserWatcher } from '../sagas';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(signinUserWatcher);

  return store;
}

export default configureStore;
