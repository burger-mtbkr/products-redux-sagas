import { SagaIterator } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';

import { ProductListItem } from 'src/models/product.model';
import { getAllProducts } from 'src/api';
import { fetchAllProductsDone } from 'src/actions';

export const fetchProductsSaga = () =>
  function* (): SagaIterator {
    yield takeLatest(fetchAllProductsDone, function* (): SagaIterator {
      try {
        const response: ProductListItem[] = yield call(getAllProducts);

        if (response) {
          yield put(fetchAllProductsDone(response));
        } else {
          // yield put({ type: 'TODO_FETCH_FAILED' });
          // else put error
        }
      } catch (error) {
        // yield put({ type: 'TODO_FETCH_FAILED' });
        // else put error
      }
    });
  };

export default function* rootSaga() {
  yield takeLatest(fetchAllProductsDone, fetchProductsSaga);
}
