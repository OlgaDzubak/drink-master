import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import * as auth from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatarURL: '', id: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => { builder
                                  .addCase(auth.signup.pending, handlePending)
                                  .addCase(auth.signup.fulfilled,  handleFulfilled_signup)
                                  .addCase(auth.signup.rejected, handleRejected_signup)

                                  .addCase(auth.signin.pending, handlePending)
                                  .addCase(auth.signin.fulfilled, handleFulfilled_signin)
                                  .addCase(auth.signin.rejected, handleRejected_signin)

                                  .addCase(auth.signout.pending, handlePending)
                                  .addCase(auth.signout.fulfilled, handleFulfilled_signout)
                                  .addCase(auth.signout.rejected, handleRejected)

                                  .addCase(auth.refresh.pending, handlePending_refresh)
                                  .addCase(auth.refresh.fulfilled, handleFulfilled_refresh)
                                  .addCase(auth.refresh.rejected, handleRejected_refresh)

                                  .addCase(auth.updateUser.pending, handlePending)
                                  .addCase(auth.updateUser.fulfilled, handleFulfilled_udpate)
                                  .addCase(auth.updateUser.rejected, handleRejected)

                                  .addCase(auth.getUser.pending, handlePending)
                                  //.addCase(user.getUser.fulfilled, handleFulfilled_get)
                                  .addCase(auth.getUser.rejected, handleRejected)
                              },
});


//functions ---------------------------------------------------------------------------
const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
}
const handlePending_refresh = (state) => {
  state.isRefreshing = true;
  state.error = null;
}

const handleFulfilled_signup = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};
const handleFulfilled_signin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};
const handleFulfilled_signout = (state) => {
  state.user = { name: '', email: '', avatarURL: '' };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};
const handleFulfilled_refresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};
const handleFulfilled_udpate = (state, action) => {
    state.error = null;
    state.isLoading = false;
    state.user = {
      email: state.user.email,
      id: state.user.id,
      name: action.payload.name,
      avatarURL: action.payload.avatarURL,
    };
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const handleRejected_signup = (state, action) => {
   
  state.error = action.payload;
  state.isLoading = false;

  switch (action.payload){
      case "Request failed with status code 409":
                  Notify.failure("Sign up failed! Email is in use.");
                  break;
      case "Request failed with status code 400":
                  Notify.failure("Sign up failed! Missing data fields.");
                  break;
      default: 
                  Notify.failure("Server error! Please reload the page.");
                  break;
  }
};
const handleRejected_signin = (state, action) => {
  
  state.error = action.payload;
  state.isLoading = false;

  switch (action.payload){
    case "Request failed with status code 401":
                Notify.failure('Пароль або email не вірні', {position: 'center-top', distance: '10px', timeout: 3000});
                break;
    case "Request failed with status code 400":
                Notify.failure("Sign up failed! Missing data fields.", {position: 'center-top', distance: '10px', timeout: 3000});
                break;
    default: 
                Notify.failure("Server error! Please reload the page.", {position: 'center-top', distance: '10px', timeout: 3000});
                break;
}
  
};
const handleRejected_refresh = (state, action) => {
  state.error = action.payload; 
  state.isRefreshing = false
  state.isLoading = false;
};
//---------------------------------------------------------------------------

export const authReducer = authSlice.reducer;
