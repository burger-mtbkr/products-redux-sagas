import { all } from 'redux-saga/effects';
import { watchFetchProductsSaga } from 'src/sagas/fetchProducts.saga';

export default function* rootSaga() {
  yield all([watchFetchProductsSaga()]);
}
