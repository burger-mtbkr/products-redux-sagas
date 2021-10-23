import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IFetchProductResponse } from 'src/models/product.model';
import { getAllProducts } from 'src/api';
import {
  fetchAllProductsDoneAction,
  fetchAllProductsAction,
  isLoading,
} from 'src/actions';

export function* fetchAllProductsSaga(): SagaIterator {
  yield put(isLoading(true));
  yield takeLatest(fetchAllProductsAction, function* (): SagaIterator {
    try {
      const response: IFetchProductResponse = yield call(getAllProducts);

      yield put(fetchAllProductsDoneAction(response));
    } catch (error) {
      yield put(
        fetchAllProductsDoneAction({
          products: [],
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isLoading(false));
    }
  });
}
