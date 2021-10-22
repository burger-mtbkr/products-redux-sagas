import { ProductListItem } from 'src/models/';
import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'PRODUCT';

export const initApp = createAction(`${PREFIX}_APP_INIT_APP`);

// Saga Actions start

export const fetchAllProductsAction = createAction(
  `${PREFIX}/API/FETCH_ALL_PRODUCTS`,
);

export const fetchAllProductsDoneAction = createAction<ProductListItem[]>(
  `${PREFIX}/API/FETCH_ALL_PRODUCTS_DONE`,
);

export const fetchAllProductsFailedAction = createAction<Error>(
  `${PREFIX}/API/FETCH_ALL_PRODUCTS_FAIL`,
);

// Saga Action end

export const setDeleteModalOpenAction = createAction<boolean>(
  `${PREFIX}_SET_DELETE_MODAL_OPEN`,
);

export const setSelectedProductsAction = createAction<ProductListItem[]>(
  `${PREFIX}_SET_SELECTED_PRODUCTS`,
);

export const setHeaderTitleAction = createAction<string>(
  `APP_${PREFIX}_SET_HEADER_TITLE`,
);
