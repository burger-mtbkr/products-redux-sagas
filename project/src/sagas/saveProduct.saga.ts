import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ISaveProductResponse } from 'src/models/product.model';
import { saveProduct } from 'src/api';
import {
  saveProductAction,
  setSaveProductDoneAction,
  isSavingAction,
} from 'src/actions';

export function* saveProductSaga(): SagaIterator {
  yield takeLatest(saveProductAction, function* (action): SagaIterator {
    try {
      debugger;
      yield put(isSavingAction(true));
      const response: ISaveProductResponse = yield call(
        saveProduct,
        action.payload,
      );
      yield put(setSaveProductDoneAction(response));
    } catch (error) {
      yield put(
        setSaveProductDoneAction({
          product: action.payload,
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isSavingAction(false));
    }
  });
}
