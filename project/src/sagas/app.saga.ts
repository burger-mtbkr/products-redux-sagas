import { SagaIterator } from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { fetchAllProductsAction } from 'src/actions';

export function* initAppSaga(): SagaIterator {
  yield all([put(fetchAllProductsAction())]);
}
