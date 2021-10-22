import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Product, IProductResponse } from 'src/models/product.model';
import { saveProduct } from 'src/api';
import {
  fetchAllProductsAction,
  fetchAllProductsFailedAction,
  isSavingAction,
} from 'src/actions';

export function* saveProductSaga(product: Product): SagaIterator {
  yield put(isSavingAction(true));
  yield takeLatest(fetchAllProductsAction, function* (): SagaIterator {
    try {
      const response: IProductResponse = yield call(saveProduct, product);
      if (response.isSuccessful) {
        yield put(fetchAllProductsAction());
      } else {
        yield put(fetchAllProductsFailedAction(response.error as Error));
      }
    } catch (error) {
      yield put(fetchAllProductsFailedAction(error as Error));
    } finally {
      yield put(isSavingAction(false));
    }
  });
}
