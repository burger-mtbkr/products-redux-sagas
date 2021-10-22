import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ProductListItem } from 'src/models/product.model';
import { getAllProducts } from 'src/api';
import {
  fetchAllProductsDoneAction,
  fetchAllProductsAction,
  fetchAllProductsFailedAction,
  isLoading,
} from 'src/actions';

export function* fetchAllProductsSaga(): SagaIterator {
  yield put(isLoading(true));
  yield takeLatest(fetchAllProductsAction, function* (): SagaIterator {
    try {
      const response: ProductListItem[] = yield call(getAllProducts);
      if (response) {
        yield put(fetchAllProductsDoneAction(response));
      }
    } catch (error) {
      yield put(fetchAllProductsFailedAction(error as Error));
    } finally {
      yield put(isLoading(false));
    }
  });
}
