import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isBurgerModalOpen: false,
    isUserProfileModalOpen: false,
    isLogoutModalOpen: false,
    isPolicyModalOpen: false,
    isTermsOfServiceModalOpen: false,
  },
  reducers: { toggleIsBurgerModalOpen(state, action){ state.isBurgerModalOpen = !state.isBurgerModalOpen},
              toggleIsUserProfileModalOpen(state, action){ state.isUserProfileModalOpen = !state.isUserProfileModalOpen},
              toggleIsLogoutModalOpen(state, action) { state.isLogoutModalOpen = !state.isLogoutModalOpen },
              toggleIsPolicyModalOpen(state, action) { state.isPolicyModalOpen = !state.isPolicyModalOpen },
              toggleIsTermsOfServiceModalOpen(state, action) { state.isTermsOfServiceModalOpen = !state.isTermsOfServiceModalOpen },
            },
});

export const modalReducer = modalSlice.reducer;

export const {  toggleIsBurgerModalOpen,
                toggleIsUserProfileModalOpen,
                toggleIsLogoutModalOpen,
                toggleIsPolicyModalOpen,
                toggleIsTermsOfServiceModalOpen } = modalSlice.actions;