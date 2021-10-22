import { Product, ProductListItem } from 'src/models';
import { TStoreState } from 'src/reducers';

export const getProductsLoadingState = (state: TStoreState): boolean =>
  state.product.isLoading;

export const selectAllProducts = (state: TStoreState): ProductListItem[] =>
  state.product.products;

export const getSelectedProducts = (state: TStoreState): ProductListItem[] =>
  state.product.selectedProducts;

export const getEditProduct = (state: TStoreState): Product | undefined =>
  state.product.selectedProducts.length > 0
    ? state.product.selectedProducts[0]
    : undefined;

export const getDeleteModalOpen = (state: TStoreState): boolean =>
  state.product.deleteModalOpen;
