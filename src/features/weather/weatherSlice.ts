import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './weatherAction';
import { IUserData } from './weatherTape';

// типизация state
interface IUserState {
    user:IUserData
    isLoading: boolean
    error: string
  }

const initialUser: IUserData = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
    refreshToken: ''
};


// создаем state и передаем начальное значение user
const initialState: IUserState = {
    user: initialUser,
    isLoading: false,
    error: '',
  };
  




export const weatherSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
    //   .addCase(getUserWithToken.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.user = action.payload;
    //   })
  },
});

export default weatherSlice;

// экспортируем синхронные actions из slice
// export const { logoutUser } = authSlice.actions