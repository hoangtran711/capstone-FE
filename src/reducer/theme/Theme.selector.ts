import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from 'app/store';

const selfSelect = (state: IRootState) => state;
export const darkModeSelector = createSelector(
  selfSelect,
  (state: IRootState) => state.theme.darkMode,
);
