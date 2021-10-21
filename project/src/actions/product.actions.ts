import { ProductListItem } from 'src/models/';
import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'PRODUCT';

export const initApp = createAction(`${PREFIX}_INIT_APP`);

export const fetchAllProducts = createAction(
  `${PREFIX}/API/FETCH_ALL_PRODUCTS`,
);

export const fetchAllProductsDone = createAction<ProductListItem[]>(
  `${PREFIX}_FETCH_ALL_PRODUCTS_DONE`,
);

export const setDeleteModalOpen = createAction<boolean>(
  `${PREFIX}_SET_DELETE_MODAL_OPEN`,
);

export const setSelectedProducts = createAction<ProductListItem[]>(
  `${PREFIX}_SET_SELECTED_PRODUCTS`,
);

export const setHeaderTitle = createAction<string>(
  `APP_${PREFIX}_SET_HEADER_TITLE`,
);
