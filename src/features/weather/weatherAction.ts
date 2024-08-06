import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IUserData } from './weatherTape';
import { ILoginFormValues } from '../../components/login/Login';

export const loginUser = createAsyncThunk(
    'loginUser',
    // ! заместо data придут данные из формы
    async (data: ILoginFormValues, thunkAPI) => {
      try {
        // в post запрос мы можем передать данные не в строке, а в отдельной переменной
        // в данном случае в data лежать данные из формы, мы их передаем в api
        const response: AxiosResponse<IUserData> = await axios.post('https://dummyjson.com/auth/login', data);
        // здесь мы сохраняем токен во внутреннее хранилище в браузере local storage
        // данные сохраненные в нем не будут стираться при перезагрузке страницы
        localStorage.setItem("user-token", response.data.token)
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
