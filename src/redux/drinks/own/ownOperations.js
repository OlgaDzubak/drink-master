import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';

export const fetchOwn = createAsyncThunk('own/fetchAll', async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/drinks/own');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
export const addOwn = createAsyncThunk('own/addOwn', async (dataUser, thunkAPI) => {

    try {
      const { data } = await axios.post('/drinks/own/add', dataUser, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
export const deleteOwn = createAsyncThunk('own/deleteOwn', async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/drinks/own/remove/${drinkId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
