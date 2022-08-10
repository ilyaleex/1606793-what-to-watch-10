import {FilmsSlice} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../const';
import {addToFavorite, fetchFilmsAction} from '../../services/api-action';

const initialState: FilmsSlice = {
  genre: ALL_GENRES,
  filmsList: [],
  isDataLoaded: false,
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload ?? ALL_GENRES;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        const index = state.filmsList.findIndex((item) => item.id === action.payload.id);
        state.filmsList[index].isFavorite = action.payload.isFavorite;
      });
  }
});

export const {changeGenre} = filmsSlice.actions;
