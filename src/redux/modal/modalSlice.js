import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isBurgerModalOpen: false,
    isUserProfileModalOpen: false,
    isLogoutModalOpen: false,
  },
  reducers: { toggleIsBurgerModalOpen(state, action){ state.isBurgerModalOpen = !state.isBurgerModalOpen},
              toggleIsUserProfileModalOpen(state, action){ state.isUserProfileModalOpen = !state.isUserProfileModalOpen},
              toggleIsLogoutModalOpen(state, action) { state.isLogoutModalOpen = !state.isLogoutModalOpen },
            },
});

export const modalReducer = modalSlice.reducer;

export const {  toggleIsBurgerModalOpen,
                toggleIsUserProfileModalOpen,
                toggleIsLogoutModalOpen } = modalSlice.actions;