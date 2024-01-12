
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface loginState {
  userId: string;
}
interface connectState {
  isLogged: boolean;
}


// Define the initial state using that type
const initialState: loginState = {
  userId: ' ',
}

export const User = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    userUid(state, { payload }: PayloadAction<loginState>) {
      return {
        ...state,
        userId: payload.userId
      }
    }
  },
})
// abaixo muda o estado
export const { userUid } = User.actions
// abaixo nomeia a propriedade em store.ts
export const uidUser = User.reducer
// aqui esta o estado da aplicação
export const userAuth = (state: RootState) => state.userAuth


export const logOn = createSlice({
  name: 'login',
  initialState: {
    logIn: false
  },
  reducers: {
    log(state, { payload }: PayloadAction<connectState>) {
      return {
        ...state,
        logIn: payload.isLogged
      }
    },
    disLog(state, { payload }: PayloadAction<connectState>) {
      return {
        ...state,
        logIn:payload.isLogged
      }
    }
  }

})
export const {disLog, log} = logOn.actions
export const uselog = logOn.reducer
export const login = (state: RootState) => state.userLogged


