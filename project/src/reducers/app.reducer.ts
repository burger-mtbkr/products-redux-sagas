import { createReducer } from '@reduxjs/toolkit';
import { setHeaderTitleAction } from 'src/actions';
import { IAppState } from 'src/models/app.model';

export const appInitialState: IAppState = {
  title: 'Product list',
};

export default createReducer(appInitialState, (builder) =>
  builder.addCase(setHeaderTitleAction, (state, { payload }) => ({
    ...state,
    title: payload,
  })),
);
