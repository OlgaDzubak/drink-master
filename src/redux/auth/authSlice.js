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
                                  .addCase(auth.signout.rejected, handleRejected_signout)

                                  .addCase(auth.refresh.pending, handlePending_refresh)
                                  .addCase(auth.refresh.fulfilled, handleFulfilled_refresh)
                                  .addCase(auth.refresh.rejected, handleRejected_refresh)

                                  .addCase(auth.updateUser.pending, handlePending)
                                  .addCase(auth.updateUser.fulfilled, handleFulfilled_udpate)
                                  .addCase(auth.updateUser.rejected, handleRejected_update)

                                  .addCase(auth.getUser.pending, handlePending)
                                  //.addCase(user.getUser.fulfilled, handleFulfilled_get)
                                  .addCase(auth.getUser.rejected, handleRejected_getUser)

                                  .addCase(auth.subscribeUser.pending, handlePending)
                                  .addCase(auth.subscribeUser.fulfilled, handleFulfilled_subscribe)
                                  .addCase(auth.subscribeUser.rejected, handleRejected_subscribe)
                                  

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
  state.isLoading = false;
  state.isLoggedIn = false;
  state.user = { name: '', email: '', avatarURL: '' };
  state.token = null;
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
    Notify.success('User profile updated!', {position: 'center-top', distance: '10px', timeout: 3000});
};
const handleFulfilled_subscribe = (state, action) => {
    state.error = null;
    state.isLoading = false;
    Notify.success('You are about to subscribe to the "Drink Master" newsletter. We have sent a message to your email. Please confirm your subscription by clicking the link in the message.', {position: 'center-top', width: '500px', messageMaxLength: '300',timeout: 10000});
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
const handleRejected_signout = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
   Notify.failure("Server error! Please reload the page.", {position: 'center-top', distance: '10px', timeout: 3000});
};
const handleRejected_refresh = (state, action) => {
  state.error = action.payload; 
  state.isRefreshing = false
  state.isLoading = false;
};
const handleRejected_update = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;

  switch (action.payload){
    case "Request failed with status code 422":
                Notify.failure("User updating failed! Wrong avatar file format.");
                break;
    default: 
                Notify.failure("Server error! Please reload the page.");
                break;
}
};
const handleRejected_getUser = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const handleRejected_subscribe = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
  
  switch (action.payload){
    case "Request failed with status code 401":
                Notify.failure("Subscription failed! Please sign in.");
                break;
    default: 
                Notify.failure("Server error! Please reload the page.");
                break;
}
};


//---------------------------------------------------------------------------

export const authReducer = authSlice.reducer;
