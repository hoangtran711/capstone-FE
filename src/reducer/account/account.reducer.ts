/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISingIn, useSignIn } from 'queries/useAuth';
import { toast } from 'react-toastify';
import { IAccountState } from './account.entity';

const initialState: IAccountState = { token: '', expiresIn: '' };
export const singInThunk = createAsyncThunk('account/signIn', async (payload: ISingIn) => {
  try {
    const signIn = useSignIn();
    const rs = await signIn(payload);
    return rs;
  } catch (err: any) {
    toast.error(err);
  };
});
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount(state: IAccountState, action: PayloadAction<IAccountState>) {
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
    },
    deleteAccount(state: IAccountState) {
      (state.token = ''), (state.expiresIn = '');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singInThunk.fulfilled, (state: IAccountState, action: any) => {
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
    })
  }
});

export const { updateAccount, deleteAccount } = accountSlice.actions;

export const AccountReducer = accountSlice.reducer;
