import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface FavoritesState {
  favoriteIds: string[];
}

export const initialState: FavoritesState = {
  favoriteIds: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteIds.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteIds = state.favoriteIds.filter(
        fav => fav !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
