import { all } from 'redux-saga/effects';
import { fetchAllProductsSaga } from 'src/sagas/fetchProducts.saga';

export default function* rootSaga() {
  yield all([fetchAllProductsSaga()]);
}
