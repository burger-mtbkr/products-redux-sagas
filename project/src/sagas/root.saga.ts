import { all } from 'redux-saga/effects';
import { fetchAllProductsSaga } from 'src/sagas/fetchProducts.saga';
import { saveProductSaga } from './saveProduct.saga';

export default function* rootSaga() {
  yield all([fetchAllProductsSaga(), saveProductSaga()]);
}
