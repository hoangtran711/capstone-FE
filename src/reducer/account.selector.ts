import { IRootState } from 'app/store';

export const selectToken = (state: IRootState) => state.account.token;
