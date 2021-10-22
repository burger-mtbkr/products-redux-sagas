import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllProductsDoneAction,
  isDeletingAction,
  isLoading as isLoadingAction,
  isSavingAction,
  setDeleteModalOpenAction,
  setDeleteProductDoneAction,
  setSaveProductDoneAction,
  setSelectedProductsAction,
} from 'src/actions';
import { IProductState } from 'src/models/product.model';

export const productInitialState: IProductState = {
  deleteModalOpen: false,
  isLoading: false,
  isSaving: false,
  isDeleting: false,
  selectedProducts: [],
};

export default createReducer(productInitialState, (builder) =>
  builder
    .addCase(isLoadingAction, (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }))
    .addCase(setSelectedProductsAction, (state, { payload }) => ({
      actionTriggerRefetching: undefined,
      ...state,
      selectedProducts: payload,
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
    .addCase(isDeletingAction, (state, { payload }) => ({
      ...state,
      isDeleting: payload,
    }))
    .addCase(setDeleteProductDoneAction, (state, { payload }) => ({
      ...state,
      deleteProductResponse: payload,
    })),
);
