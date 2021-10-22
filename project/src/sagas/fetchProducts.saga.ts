import { SagaIterator } from 'redux-saga';
import { call, takeEvery, put } from 'redux-saga/effects';

import { ProductListItem } from 'src/models/product.model';
import { getAllProducts } from 'src/api';
import {
  fetchAllProductsDoneAction,
  fetchAllProductsAction,
  fetchAllProductsFailedAction,
} from 'src/actions';

export function* fetchProductsSaga(): SagaIterator {
  try {
    const response: ProductListItem[] = yield call(getAllProducts);
    if (response) {
      yield put(fetchAllProductsDoneAction(response));
    }
  } catch (error) {
    yield put(fetchAllProductsFailedAction(error as Error));
  }
}

export function* watchFetchProductsSaga(): SagaIterator {
  yield takeEvery(fetchAllProductsAction, fetchProductsSaga);
}
