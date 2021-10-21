import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest, all, take, race } from 'redux-saga/effects';

import { initApp, fetchAllProducts, fetchAllProductsDone } from 'src/actions';

function* fetchApiData(): SagaIterator {
  yield all([put(fetchAllProducts()), race([take(fetchAllProductsDone)])]);
}

export const initAppSaga = () =>
  function* (): SagaIterator {
    yield takeLatest(initApp, function* (): SagaIterator {
      yield call(fetchApiData);
    });
  };
