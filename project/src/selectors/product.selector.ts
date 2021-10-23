import { ISaveProductResponse, Product, ProductListItem } from 'src/models';
import { TStoreState } from 'src/reducers';

export const getProductsLoadingState = (state: TStoreState): boolean =>
  state.product.isLoading;

export const selectAllProducts = (state: TStoreState): ProductListItem[] =>
  state.product.productListResponse?.products || [];

export const getSelectedProducts = (state: TStoreState): ProductListItem[] =>
  state.product.selectedProducts;

export const selectIsSaving = (state: TStoreState): boolean =>
  state.product.isSaving;

export const getProductSaveResponse = (
  state: TStoreState,
): ISaveProductResponse | undefined => state.product.productSaveResponse;

export const getEditProduct = (state: TStoreState): Product | undefined =>
  state.product.selectedProducts.length > 0
    ? state.product.selectedProducts[0]
    : undefined;

export const getDeleteModalOpen = (state: TStoreState): boolean =>
  state.product.deleteModalOpen;
