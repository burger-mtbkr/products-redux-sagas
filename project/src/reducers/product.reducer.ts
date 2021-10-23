import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllProductsDoneAction,
  isLoading,
  isSavingAction,
  setDeleteModalOpenAction,
  setSaveProductDoneAction,
  setSelectedProductsAction,
} from 'src/actions';
import { IProductState } from 'src/models/product.model';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  isLoading: false,
  isSaving: false,
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
      productListResponse: payload,
    }))
    .addCase(setSaveProductDoneAction, (state, { payload }) => ({
      ...state,
      productSaveResponse: payload,
    }))
    .addCase(isSavingAction, (state, { payload }) => ({
      ...state,
      isSaving: payload,
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
