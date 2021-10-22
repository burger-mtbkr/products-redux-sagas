import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllProductsDoneAction,
  isLoading,
  setDeleteModalOpenAction,
  setSelectedProductsAction,
} from 'src/actions';
import { IProductState } from 'src/models/product.model';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  isLoading: false,
  products: [],
  selectedProducts: [],
};

export default createReducer(productInitialState, (builder) =>
  builder
    .addCase(isLoading, (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }))
    .addCase(fetchAllProductsDoneAction, (state, { payload }) => ({
      ...state,
      products: payload,
    }))
    .addCase(setDeleteModalOpenAction, (state, { payload }) => ({
      ...state,
      deleteModalOpen: payload,
    }))
    .addCase(setSelectedProductsAction, (state, { payload }) => ({
      actionTriggerRefetching: undefined,
      ...state,
      selectedProducts: payload,
    })),
);
