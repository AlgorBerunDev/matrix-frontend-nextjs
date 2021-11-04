import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import { navigationApi } from '../features/navigations';
import { ourobjectApi } from '../features/our-objects';
import menuReducer from '../features/menu'
import { projectingApi } from '../features/projecting';
import { whyApi } from '../features/why-are-we';
import { officialsApi } from '../features/officials';
import { uniqueApi } from '../features/unique-products';
import { brandApi } from '../features/brands';
import { footerApi } from '../features/footer';
import { productApi } from '../features/product';
import { catalogApi } from '../features/catalog';

  export const store = configureStore({
    reducer: {
        menu: menuReducer,
        [navigationApi.reducerPath]: navigationApi.reducer,
        [ourobjectApi.reducerPath]: ourobjectApi.reducer,
        [projectingApi.reducerPath]: projectingApi.reducer,
        [officialsApi.reducerPath]: officialsApi.reducer,
        [whyApi.reducerPath]: whyApi.reducer,
        [uniqueApi.reducerPath]: uniqueApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [footerApi.reducerPath]: footerApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [catalogApi.reducerPath]: catalogApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      navigationApi.middleware,
      ourobjectApi.middleware,
      officialsApi.middleware,
      uniqueApi.middleware,
      brandApi.middleware,
      footerApi.middleware,
      productApi.middleware,
      catalogApi.middleware
    )
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;