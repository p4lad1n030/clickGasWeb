// aqui neste arquivo estara todos os  reducers que estarão disponiveis a outros componentes
import { configureStore } from "@reduxjs/toolkit";
import { uidUser, uselog } from "./sliceauth";




const store = configureStore({
 reducer: {
  userAuth:uidUser,
  userLogged:uselog
 }
})




export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// como gravar os dados no estado
/*
*import { useDispatch } from "react-redux";

*const dispatch = useDispatch();

*dispatch(nome-do-slice.actions-exportado(nome-do-objeto-modificado));
*/ 

// como ler os dados do estado
/*
*import { useSelector } from "react-redux";

*const islogged = useSelector(nome-do-slice.state exportado)

*console.log(islogged)

 */
