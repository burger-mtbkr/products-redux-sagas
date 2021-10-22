import { SagaIterator } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';

import { ProductListItem } from 'src/models/product.model';
import { getAllProducts } from 'src/api';
import {
  fetchAllProductsDoneAction,
  fetchAllProductsAction,
  fetchAllProductsFailedAction,
} from 'src/actions';

export const fetchProductsSaga = () =>
  function* (): SagaIterator {
    yield takeLatest(fetchAllProductsAction, function* (): SagaIterator {
      try {
        debugger;
        const response: ProductListItem[] = yield call(getAllProducts);

        debugger;
        if (response) {
          yield put(fetchAllProductsDoneAction(response));
        }
      } catch (error) {
        yield put(fetchAllProductsFailedAction(error as Error));
      }
    });
  };
