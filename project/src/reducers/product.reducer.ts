import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllProductsDone,
  setDeleteModalOpen,
  setSelectedProducts,
} from 'src/actions';
import { IProductState } from 'src/models/product.model';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  products: [],
  selectedProducts: [],
};

export default createReducer(productInitialState, (builder) =>
  builder
    .addCase(fetchAllProductsDone, (state, { payload }) => ({
      ...state,
      products: payload,
    }))
    .addCase(setDeleteModalOpen, (state, { payload }) => ({
      ...state,
      deleteModalOpen: payload,
    }))
    .addCase(setSelectedProducts, (state, { payload }) => ({
      actionTriggerRefetching: undefined,
      ...state,
      selectedProducts: payload,
    })),
);
