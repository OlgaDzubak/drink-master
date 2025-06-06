export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectIsLoadingVerifyModal = (state) => state.auth.isLoadingVerifyModal;

export const selectUser = (state) => state.auth.user;

export const selectError = (state) => state.auth.error;

export const selectToken = (state) => state.auth.token;

export const selectIsEmailVerificationModalOpen = (state) => state.auth.isEmailVerificationModalOpen;

export const selectVerifiedForSubscription = (state) => state.auth.verifiedForSubscription;

export const selectShouldBeVerifiedForSubscription = (state) => state.auth.shouldBeVerifiedForSubscription;