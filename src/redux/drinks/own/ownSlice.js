import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { fetchOwn, addOwn, deleteOwn } from './ownOperations';

const ownSlice = createSlice({
  name: 'own',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    added: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOwn.pending, (state) => {
        state.isLoading = true;
        state.added = false;
      })
      .addCase(fetchOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        Notify.failure("Server error! Please reload the page.");
      })

      .addCase(addOwn.pending, (state) => {
        state.isLoading = true;
        state.added = false;
      })
      .addCase(addOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [ ...state.items, action.payload];
        Notify.success(`Drink << ${action.payload.drink} >> was added to database!`);
        state.added = true;
      })
      .addCase(addOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.added = false;
        state.error = action.payload;
        switch (action.payload){

          case "Request failed with status code 400":
                      Notify.failure("Add drink failed! Missing data fields.", {position: 'left-bottom', distance: '30px'});
                      break;
          case "Request failed with status code 409":
                      Notify.failure("Add drink failed! Drink name is already in database.", {position: 'left-bottom', distance: '130px'});
                      break;
          default: 
                      Notify.failure("Server error! Please reload the page.", {position: 'left-bottom', distance: '30px'});
                      break;
        }
      })

      .addCase(deleteOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const indexDelete = state.items.findIndex((drink) => drink._id === action.payload._id);
        state.items.splice(indexDelete, 1); 
      })
      .addCase(deleteOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
        Notify.failure("Server error! Please reload the page.");
      }),
});

export const ownReducer = ownSlice.reducer;
