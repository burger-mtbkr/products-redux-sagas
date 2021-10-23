import axios from 'axios';
import {
  IFetchProductResponse,
  ISaveProductResponse,
  Product,
  ProductListItem,
} from 'src/models';
import { isSuccessfulResponse } from 'src/utils';

export const getAllProducts = async (): Promise<IFetchProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? '';

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (isSuccessfulResponse(response)) {
      return {
        products: response.data as ProductListItem[],
        isSuccessful: true,
      };
    }
    return {
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};

export const getProduct = async (id: string): Promise<ISaveProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? '';

  try {
    const response = await axios.get(`${url}/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (isSuccessfulResponse(response)) {
      return {
        product: response.data as Product,
        isSuccessful: true,
      };
    }
    return {
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};

export const saveProduct = async (
  product: Product,
): Promise<ISaveProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? '';
  try {
    const response = product.id
      ? await axios.put(`${url}`, product, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
      : await axios.post(`${url}`, product, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

    if (isSuccessfulResponse(response)) {
      return {
        product: response.data as Product,
        isSuccessful: true,
      };
    }
    return {
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};

export const deleteProduct = async (
  id: string,
): Promise<ISaveProductResponse> => {
  const url = process.env.REACT_APP_API_END_POINT ?? '';

  try {
    const response = await axios.delete(`${url}/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (isSuccessfulResponse(response)) {
      return {
        isSuccessful: true,
      };
    }
    return {
      isSuccessful: false,
      error: new Error('An error has occured'),
    };
  } catch (error) {
    return {
      isSuccessful: false,
      error: axios.isAxiosError(error)
        ? error
        : new Error('An error has occured'),
    };
  }
};
