import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from 'services/characters.service';
import charactersReducer from './slices/characters.slice';

export const store = configureStore({
    reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer,
        characters: charactersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(charactersApi.middleware),
});
