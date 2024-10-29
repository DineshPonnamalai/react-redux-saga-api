import createSagaMiddleware from  'redux-saga';
import {configureStore}  from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import mySaga from './saga';
const sagaMiddlerware =  createSagaMiddleware();

const store  = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddlerware),
})

sagaMiddlerware.run(mySaga);

export default store;
