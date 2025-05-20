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
    isEmailVerificationModalOpen: false,
    shouldBeVerifiedForSubscription: false,
    verifiedForSubscription: false,
  },
  extraReducers: (builder) => { builder
                                  .addCase(auth.signup.pending, handlePending)
                                  .addCase(auth.signup.fulfilled,  handleFulfilled_signup)
                                  .addCase(auth.signup.rejected, handleRejected_signup)

                                  .addCase(auth.verify.pending, handlePending)
                                  .addCase(auth.verify.fulfilled,  handleFulfilled_verify)
                                  .addCase(auth.verify.rejected, handleRejected_verify)
    
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

                                  .addCase(auth.unsubscribeUser.pending, handlePending)
                                  .addCase(auth.unsubscribeUser.fulfilled, handleFulfilled_unsubscribe)
                                  .addCase(auth.unsubscribeUser.rejected, handleRejected_unsubscribe)
    
                                  .addCase(auth.toogleIsEmailVerificationModalOpen.fulfilled, (state, action) => { state.isEmailVerificationModalOpen = !state.isEmailVerificationModalOpen })
                                  .addCase(auth.toogleIsLoggedIn.fulfilled, (state, action) => { state.isLoggedIn = !state.isLoggedIn })
                                  .addCase(auth.toogleVerifiedForSubscription.fulfilled, (state, action) => { state.verifiedForSubscription = !state.verifiedForSubscription })
                                  .addCase(auth.toogleShouldBeVerifiedForSubscription.fulfilled, (state, action) => { state.shouldBeVerifiedForSubscription = !state.shouldBeVerifiedForSubscription })
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
  state.isLoading = false;
  state.error = null;
  state.isEmailVerificationModalOpen = true;
};
const handleFulfilled_verify = (state, action) => {
  // Notify.success(`1.Email ${state.user.email} verified`, {
  //   position: state.shouldBeVerifiedForSubscription ? "right-bottom" : "right-top",
  //   timeout: 1500,
  // });
  state.isLoading = false;
  if (!state.isLoggedIn) { state.isLoggedIn = true; }
  state.user.verify = true; 
  state.error = null;
  if (state.shouldBeVerifiedForSubscription) {
    state.shouldBeVerifiedForSubscription = false;
    state.verifiedForSubscription = true;    
  }
  state.isEmailVerificationModalOpen = false;
};
const handleFulfilled_signin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  if (!action.payload.user.verify) {
    state.isEmailVerificationModalOpen = true;
  } else {
    state.isLoggedIn = true;
  }
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
  Notify.success('User profile updated!', { position: 'right-top', distance: '70px', timeout: 3000});
};
const handleFulfilled_subscribe = (state, action) => {
    Notify.success(`You are subscribed to the "Drink Master" newsletter. We have sent a message to your email ${action.payload.email}.`, {width: "400px", position: 'right-bottom', distance: '10px', timeout: 5000});  
    state.error = null;
    state.isLoading = false;
    state.user.subscribeStatus = true;
    state.shouldBeVerifiedForSubscription = false;
    state.verifiedForSubscription = false;
};
const handleFulfilled_unsubscribe = (state, action) => {
    Notify.success(`Your subscription was canceled. We have sent a message to your email ${action.payload.email}.`, {width: 400, position: 'right-bottom', distance: '10px', timeout: 3000});
    state.error = null;
    state.isLoading = false;
    state.user.subscribeStatus = false;
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
const handleRejected_verify = (state, action) => {
   
  state.error = action.payload;
  state.isLoading = false;
  state.isEmailVerificationModalOpen = false;
  state.shouldBeVerifiedForSubscription = false;
  state.verifiedForSubscription = false;
  
  switch (action.payload){
      case "Request failed with status code 403":
                  Notify.failure("Email verification failed! Invalid verification code.", {distance: '10px',});
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
                Notify.failure('Пароль або email не вірні', {position:"left-bottom"});
                break;
        case "Request failed with status code 400":
              Notify.failure("Sign up failed! Missing data fields.", {position:"left-bottom"});
              break;
        case "Request failed with status code 403":
                Notify.failure("Email verification not completed.", { position: "left-bottom" });
                state.isEmailVerificationModalOpen = true;
              break;
    default: 
                Notify.failure("Server error! Please reload the page.");
                break;
}
  
};
const handleRejected_signout = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
   Notify.failure("Server error! Please reload the page.");
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
    case "Request failed with status code 403":
                //Notify.failure("Email is not verified", { position: 'right-bottom', distance: '10px', timeout: 2000 });
                state.shouldBeVerifiedForSubscription = true;
                state.isEmailVerificationModalOpen = true;
                break;
    default: 
                Notify.failure("Server error! Please reload the page.");
                break;
}
};
const handleRejected_unsubscribe = (state, action) => {
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
