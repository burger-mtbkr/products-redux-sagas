import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Product, ISaveProductResponse } from 'src/models/product.model';
import { saveProduct } from 'src/api';
import {
  fetchAllProductsAction,
  setSaveProductDoneAction,
  isSavingAction,
} from 'src/actions';

export function* saveProductSaga(product: Product): SagaIterator {
  yield takeLatest(fetchAllProductsAction, function* (): SagaIterator {
    try {
      yield put(isSavingAction(true));
      const response: ISaveProductResponse = yield call(saveProduct, product);
      yield put(setSaveProductDoneAction(response));
    } catch (error) {
      yield put(
        setSaveProductDoneAction({
          product,
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isSavingAction(false));
    }
  });
}
